import { useState } from "react"
import useAxios from "../../Root/Hook/useAxios"
import Swal from "sweetalert2"


const imge_api = 'e6f292b4e8b1b3ceddb9562d872ff097';
const image_main_api_key = `https://api.imgbb.com/1/upload?key=${imge_api}`

const AddItem = () => {

    const [category , setCategory] = useState('')
    const [loading, setLoading] = useState(false);
    console.log(category);
    const axiosSecure = useAxios();

  //  const onSubmit = async(data) =>{
    
  //         //  image bbb link
  //         const imageFile = {image: form.image[0]}
  //         const res = await axiosSecure.post(image_main_api_key,imageFile, {
  //           headers: {
  //             'Content-Type' : 'multipart/form-data'
  //           }
  //         })                                      
  //         console.log(res.data);
  //       const imageUrl = res.data.data?.url;


  //           if(!imageUrl){
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: "Image upload failed. Please try again.",
  //         });
  //       }

  //  }

  // function handleAddItem(e){
  //        e.preventDefault()
  //       const form = e.target;

  //       const name = form.name.value;
  //       const recipe = form.recipe.value;
  //       const price = parseFloat(form.price.value);
  //       setLoading(true);
  //       const addItem={
  //           name ,
  //           recipe,
  //           price,
  //           category,
  //           image: ''
  //       }

  //       console.log(addItem);

  //       axiosSecure.post('/food',addItem)
  //       .then(res => {
  //           Swal.fire({
  //               position: "top-end",
  //               icon: "success",
  //               title: `${name} Added to Your Item`,
  //               showConfirmButton: false,
  //               timer: 1500
  //             });
  //             e.target.reset()

  //           //   console.log(res.data);
  //       })
  //   }


    const onSubmit = async (data) => {
      try {
        const formData = new FormData();
        formData.append("image", data.image);
  
        // Upload the image
        const res = await axiosSecure.post(image_main_api_key, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        // Retrieve the uploaded image URL
        const imageUrl = res.data.data?.url;
        console.log(imageUrl,'image');
        if (!imageUrl) {
          throw new Error("Image upload failed.");
        }
  
        return imageUrl; // Return the image URL to use in handleAddItem
      } catch (error) {
        console.error("Image upload error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Image upload failed. Please try again.",
        });
        return null;
      }
    };
  
    const handleAddItem = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const recipe = form.recipe.value;
      const price = parseFloat(form.price.value);
  
      // Gather form data
      const formData = {
        name,
        recipe,
        price,
        category,
        image: form.image.files[0], // Pass the file to onSubmit
      };
  
      setLoading(true); // Show loading state
      onSubmit(formData)
        .then((imageUrl) => {
          if (!imageUrl) return; // Exit if image upload fails
  
          const addItem = {
            name,
            recipe,
            price,
            category,
            image: imageUrl,
          };
  
          // Post the new item with the image URL
          return axiosSecure.post("/food", addItem);
        })
        .then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Added to Your Item`,
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset(); // Reset the form
        })
        .catch((error) => {
          console.error("Error adding item:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to add the item. Please try again.",
          });
        })
        .finally(() => {
          setLoading(false); // Reset loading state
        });
    };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 py-10">
    <div className="card bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">Add New Recipe</h2>
      <form onSubmit={handleAddItem}>
        <div className="form-control mb-4 ">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter recipe name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category and Price Fields in Flexbox */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Category */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="select select-bordered"
              required
            >
              <option value="" disabled>
                Select a Category
              </option>
              <option value="offered">Offered</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="salad">Salad</option>
            </select>
          </div>

          {/* Price */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              name="price"
              type="number"
              placeholder="Enter price"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details</span>
          </label>
          <textarea
            name="recipe"
            placeholder="Enter recipe details"
            className="textarea textarea-bordered h-24 w-full"
            required
          ></textarea>
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Upload Image</span>
          </label>
          <input
            name="image"
            type="file"
            accept="image/*"
            className="file-input file-input-bordered w-full"
            required
          />
        </div>

        <button
          type="submit"
          className={`btn btn-info w-full ${
            loading ? "loading cursor-not-allowed" : ""
          }`}
       
        >
          {loading ? "Uploading..." : "Add Item"}
        </button>
      </form>
    </div>
  </div>
  )
}

export default AddItem