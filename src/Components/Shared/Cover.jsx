import Title from "./Title"


const Cover = ({img,head}) => {
  return (
    <div>
      {/* <Title></Title> */}

      <div className="my-12">
    <div className="flex flex-col md:flex-row bg-white hover:bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ease-in-out rounded-lg shadow-2xl overflow-hidden">
      <img
        src={img}
        className="w-full md:w-1/2 object-cover"
        alt="Delicious Dish"
      />
      <div className="w-full md:w-1/2 p-8 flex flex-col gap-6 justify-center text-gray-800 hover:text-white transition-colors duration-300">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
          {head}
        </h2>
        <p className="text-sm md:text-base font-medium leading-relaxed">
          Experience the perfect blend of flavor, ambiance, and hospitality at [Restaurant Name]! 
          Browse our mouthwatering menu, reserve your table in seconds, and discover our chef's specials designed to tantalize your taste buds. 
          Explore a gallery of cozy interiors and vibrant dishes, read glowing customer reviews, and stay updated with exclusive offers. 
          Whether you're planning a romantic dinner, a family gathering, or a quick bite, [Restaurant Name] promises an experience worth savoring.
        </p>
      </div>
    </div>
  </div>
    </div>
   
  
  )
}

export default Cover