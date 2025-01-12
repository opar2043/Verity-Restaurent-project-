import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../Root/Hook/useAxios";
import useEff from "../../Root/Hook/useEff";
import useAuth from "../../Root/Hook/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTanstack from "../../Root/Hook/useTanstack";

const CheckOutForm = () => {
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cart] = useTanstack();
  const [transactionId, setTransactionId] = useState('');
  const totalPrice = cart.reduce((a, b) => a + b.price, 0);

  console.log(totalPrice);
  const { user } = useAuth();
  const axiosUse = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    if (totalPrice > 0) {
      axiosUse.post('/create-payment-intent', { price: totalPrice })
        .then(res => {
          setClientSecret(res.data.clientSecret);
        })
        .catch(err => {
          console.error("Error creating payment intent:", err);
          setError("Failed to initialize payment. Please try again.");
        });
    }
  }, [totalPrice, axiosUse]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setError("Stripe.js is not loaded. Please try again.");
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setError("Card details are missing. Please enter valid card information.");
      return;
    }

    // try {
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || 'unknown@example.com',
            name: user?.displayName || 'Anonymous',
          },
        },
      });

      if (confirmError) {
        setError(confirmError.message);
        console.error("Payment Confirmation Error:", confirmError);
        return;
      }

      setTransactionId(paymentIntent?.id);

      // Save payment information to the backend
      const payment = {
        email: user?.email,
        name: user?.displayName,
        date: new Date().toISOString(),
        cartId: cart.map(item => item.menuId),
        status: 'pending',
        transactionId: paymentIntent?.id,
        price: totalPrice,
      };

      console.log(payment , 'payment object');


      axiosUse.post('/payments',payment)
      .then(res => {
        console.log(res.data);
        if(res.data.result.insertedId){
          Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment Successful",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate('/dashboard/paymentuser')
        }
      })
      .catch(err => {
        console.log(err);
      })

    //   try {
    //     const response = await axiosUse.post('/payments', payment);
    //     if (response.data?.paymentResult) {
    //       
    //       navigate('/dashboard/paymentuser'); // Redirect if needed
    //     } else {
    //       setError("Payment was processed but saving data failed. Please contact support.");
    //     }
    //   } catch (saveError) {
    //     console.error("Error saving payment information:", saveError);
    //     setError("Failed to save payment information. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Unexpected Error:", error);
    //   setError("An unexpected error occurred. Please try again.");
    // }

    
  // };


}

const cardElementOptions = {
  style: {
    base: {
      fontSize: "16px",
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      "::placeholder": {
        color: "#a0aec0",
      },
    },
    invalid: {
      color: "#e53e3e",
    },
  },
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Complete Your Payment</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Details
          </label>
          <div className="p-4 border rounded-md shadow-sm">
            <CardElement options={cardElementOptions} />
          </div>
        </div>

        <button
          type="submit"
          disabled={!stripe || !elements || !clientSecret || totalPrice <= 0}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Pay
        </button>

        {error && (
          <div className="text-sm text-red-600 mt-4">{error}</div>
        )}

        {transactionId && (
          <div className="text-sm text-green-600 mt-4">
            Payment Successful! Transaction ID: {transactionId}
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
