import { useState } from "react";
import Swal from "sweetalert2";
import useAxios from "../../Root/Hook/useAxios";
import { useLoaderData, useParams } from "react-router-dom";
import useEff from "../../Root/Hook/useEff";


const ManageItem = () => {

    const [category, setCategory] = useState();
    const [loading, setLoading] = useState(false);
    const [menu] = useEff()
    const axiosSecure = useAxios();
    const {id} = useParams();
    
    const newMenu = menu.find(item => item._id == id);
    console.log(newMenu);

    function handleUpdate (e){
         e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const recipe = form.recipe.value;
        const price = parseFloat(form.price.value);
        // const price = form.price.value;
        
        const updateItem = {
            name,
            recipe,
            price,
            category
        
          };

        axiosSecure.put(`/food/${id}`, updateItem)
        .then(res => {
        console.log("Response Data:", res.data);
        if (res.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} Modified Item`,
                showConfirmButton: false,
                timer: 1500,
            });
            e.target.reset();
        } else {
            Swal.fire("No Changes", "No fields were modified.", "info");
        }
    })
  
    } 
    

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-100 via-orange-300 to-yellow-100 py-10">
    <div className="card bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-orange-600">Customize Recipe</h2>
      <form onSubmit={handleUpdate}>
        {/* Recipe Name */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter recipe name"
            className="input input-bordered w-full"
            defaultValue={newMenu?.name}
            required
          />
        </div>
  
        {/* Category and Price */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category || newMenu?.category}
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
  
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              name="price"
              type="number"
              defaultValue={newMenu?.price}
              placeholder="Enter price"
              className="input input-bordered"
              required
            />
          </div>
        </div>
  
        {/* Recipe Details */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details</span>
          </label>
          <textarea
            name="recipe"
            placeholder="Enter recipe details"
            defaultValue={newMenu?.recipe}
            className="textarea textarea-bordered h-24 w-full"
            required
          ></textarea>
        </div>
  
        {/* Image Upload */}
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text font-semibold">Upload Image</span>
          </label>
          <input
            name="image"
            type="file"
            accept="image/*"
            className="file-input file-input-bordered w-full"
          />
        </div>
  
        {/* Submit Button */}
        <button type="submit" className="btn btn-warning w-full">
          Update Item
        </button>
      </form>
    </div>
  </div>
    

  )
}

export default ManageItem