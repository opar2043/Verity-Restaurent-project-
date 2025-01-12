import Swal from "sweetalert2";
import useAuth from "../Root/Hook/useAuth";
import useAxios from "../Root/Hook/useAxios";

const Card = ({ item }) => {
    const { name, recipe, price, image, category,_id } = item;
    const {user} = useAuth()
    const axiosSecure = useAxios()

    function addToCart(food){
      // console.log(food);

      const orderItem = {
        email : user?.email,
        userName : user?.displayName,
        menuId: _id,
        name,
        recipe,
       price, 
       image,
       category
      }
      
      axiosSecure.post('/order',orderItem)
      .then(res =>{
        console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} - Added to Your Cart`,
          showConfirmButton: false,
          timer: 1200
        });
      })
      
    }
  
    return (
      <div className="">
     <div className=" bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <figure className="relative">
            <img
              src={image}
              alt={name}
              className=" h-48 w-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-gray-900 text-white text-xs px-3  rounded-full shadow-md uppercase">
              {category}
            </div>
          </figure>
          <div className="p-4">
            <h2 className=" text-xl font-bold text-gray-800">
              {name}
            </h2>
            <p className="text-gray-600 text-sm mt-2 line-clamp-3">{recipe}</p>
            <p className="text-lg font-semibold text-gray-800 mt-4">
              ${price}
            </p>
           
              <button onClick={()=>addToCart(item)} className="btn btn-primary w-full  rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-md hover:shadow-lg transition-shadow duration-300">
                Order Now
              </button>
        
          </div>
        </div>  

      </div>
    );
  };
  
  export default Card;
  