import Nav from "@/Components/Partial/Nav";
import ShopSection from "@/Components/Partial/Shop/ShopSection";
import Footer from "@/Components/Partial/Footer";
import '../style/shop.css';
import SinglePage from "@/Components/Partial/SinglePage";

const Shop = ()=>{
    return(

        <>

         <Nav/>
          <SinglePage/>
          <ShopSection/>
        
          <Footer/>
        </>
    )
}

export default Shop;