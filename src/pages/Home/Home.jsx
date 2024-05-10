import { useRef } from "react"; // Import useRef hook
import { Helmet } from "react-helmet-async";
import Carousel from "../../components/Carousel/Carousel";
import Testimonials from "../../components/Testimonials/Testimonials";
import Spots from "../../components/Spots/Spots";
import Countries from "../../components/Countries/Countries";
import LastMinuteOffer from "../../components/LastMinuteOffer/LastMinuteOffer";
import TypewriterSection from "../../components/TypewriterSection/TypewriterSection";




const Home = () => {
  const propertiesRef = useRef(null);  
  const scrollToProperties = () => {
    propertiesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="text-black">
      <Helmet>
        <title> Travel | Home</title>
      </Helmet>

      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-10">
        <TypewriterSection></TypewriterSection>
      </section>

     
      {/* Carousel Section */}
      <section className="pb-10 bg-gray-100">
        <div className="container mx-auto w-full h-1/2">
          <Carousel />
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
      {/* Spots Section */}
       <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <Spots/>         
        </div>
      </section>
     
      {/* Countries Section */}
       <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <Countries/>               
        </div>
      </section>
      
      {/* Last Minute Offer */}
       <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <LastMinuteOffer/>       
        </div>
      </section>

      
       {/* Testimonials Section */}
       <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <Testimonials/>         
        </div>
      </section>


    </div>



     
    
  );
};

export default Home;