
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Books from "../../components/Books/Books";





const Home = () => {

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
      {/* Spots Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
        <Books/>    
        </div>
      </section>
   
    

  


    </div>



     
    
  );
};

export default Home;