import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import CategoryBooks from "../../components/CategoryBooks/CategoryBooks";
import News from "../../components/News/News";
import AddProgram from "../AddProgram/AddProgram";
import Programs from "../../components/Programs/Programs";
import Map from "../../components/Map/Map";



const Home = () => {
  
  const scrollToPrograms = () => {
    const programsSection = document.getElementById("programs");
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="text-black">
      <Helmet>
        <title> Library | Home</title>
      </Helmet>

      {/* Carousel Section */}
      <section className="pb-10 bg-gray-100">
        <div className="container mx-auto w-full h-1/2">
        <Banner onClickLatestProgram={scrollToPrograms} />
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <CategoryBooks />
        </div>
      </section>

      <section id="programs" className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <Programs />
        </div>
      </section>

      {/* add program */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          {" "}
          <AddProgram />
        </div>
      </section>

      <section className="py-12 bg-gray-100 -10">
        <div className="container mx-auto py-10">
          <h1 className="text-3xl  pt mb-10 font-bold text-center p-3 border bg-emerald-500 text-white">
            {" "}
            Latest News
          </h1>
          <News />
        </div>
      </section>

      <section className="py-12 bg-gray-100 -10">
        <div className="container mx-auto py-10">
          <h1 className="text-3xl  pt mb-10 font-bold text-center p-3 border bg-emerald-500 text-white">
            {" "}
            Library Map
          </h1>
          <Map></Map>
        </div>
      </section>
  

   
  
    </div>
  );
};

export default Home;
