
import img from '../../../assets/assets/reservation/category-pizza.jpg'

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto p-10 space-y-16">
        {/* History Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 md:flex md:items-center">
          <div className="md:w-1/2">
            <img
              src={img}
              alt="Our Journey"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <p className="text-gray-600 leading-relaxed">
              From humble beginnings in 1990 as a family-owned diner, we have grown into a destination for food enthusiasts.
              Our commitment to great flavors, warm hospitality, and community has been our guiding principle.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Today, we continue to serve dishes inspired by tradition and crafted with love, bringing a modern twist to classic recipes.
            </p>
          </div>
        </section>

        {/* Unique Features Section */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">What Makes Us Unique</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Farm-to-Table Ingredients</h3>
              <p className="text-gray-600">
                We work with local farms to bring the freshest and most sustainable ingredients directly to your plate.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Innovative Menu</h3>
              <p className="text-gray-600">
                Our chefs create a unique blend of global flavors with traditional recipes, ensuring every bite is memorable.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Exclusive Dining Experiences</h3>
              <p className="text-gray-600">
                Experience seasonal tasting menus, private chef events, and wine pairings designed to delight.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Eco-Friendly Practices</h3>
              <p className="text-gray-600">
                Sustainability is at our core, from biodegradable packaging to reducing food waste and supporting green initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Food Stats Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-extrabold text-green-600">50+</h3>
              <p className="text-gray-700 mt-2">Signature Dishes</p>
            </div>
            <div>
              <h3 className="text-5xl font-extrabold text-green-600">30+</h3>
              <p className="text-gray-700 mt-2">Years of Service</p>
            </div>
            <div>
              <h3 className="text-5xl font-extrabold text-green-600">1M+</h3>
              <p className="text-gray-700 mt-2">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-5xl font-extrabold text-green-600">100%</h3>
              <p className="text-gray-700 mt-2">Customer Satisfaction</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
