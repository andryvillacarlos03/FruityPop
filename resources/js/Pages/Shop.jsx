import Nav from "@/Components/Partial/Nav";
import ShopSection from "@/Components/Partial/Shop/ShopSection";
import Footer from "@/Components/Partial/Footer";
import '../style/shop.css';
import SinglePage from "@/Components/Partial/SinglePage";
import { Head } from "@inertiajs/react";

const Shop = ()=>{
    return(

        <>
          <Head>
                   <link href="/landing/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
                   <link href="/landing/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                   <link href="/landing/css/bootstrap.min.css" rel="stylesheet" />
                   <link href="/landing/css/style.css" rel="stylesheet" />
                   <script src="/landing/lib/easing/easing.min.js"></script>
                   <script src="/landing/lib/waypoints/waypoints.min.js"></script>
                   <script src="/landing/lib/lightbox/js/lightbox.min.js"></script>
                   <script src="/landing/lib/owlcarousel/owl.carousel.min.js"></script>
                   <script src="/landing/js/main.js"></script>
       </Head>
         <Nav/>
          <SinglePage/>
          <ShopSection/>
        
          <Footer/>
        </>
    )
}

export default Shop;