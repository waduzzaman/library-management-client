
import{Outlet} from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer> 
            <ScrollToTopButton/>
            
            
        </div>
    );
};

export default Root;