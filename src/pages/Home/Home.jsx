import { useRef } from "react"; // Import useRef hook
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";





const Home = () => {
  const propertiesRef = useRef(null);  
  const scrollToProperties = () => {
    propertiesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-black">
        <Helmet>
        <title> Library | Home</title>
      </Helmet>


     
      {/* Carousel Section */}
      <section className="pb-10 bg-gray-100">
        <div className="container mx-auto w-full h-1/2">
          <Banner />
        </div>
      </section>  
      <section className="bg-gradient-to-b from-blue-500 to-blue-700 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Find Your Best Destination to Visit</h2>
          <p className="text-lg mb-8">Explore our wide range of Travel Spots and plan your trip</p>         
          <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded-full hover:bg-blue-100 hover:text-blue-600 transition duration-300" onClick={scrollToProperties}>
            View Tourist Spots
          </button>
        </div>
      </section>
   
     
   

      {/* Last Minute Offer */}
       {/* <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <LastMinuteOffer/>       
        </div>
      </section> */}

  


    </div>



     
    
  );
};

export default Home;