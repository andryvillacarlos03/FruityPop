import Nav from "@/Components/Partial/Nav";
import ContactPage from "@/Components/Partial/Contact/Contact";
import SinglePage from "@/Components/Partial/SinglePage";
import Footer from "@/Components/Partial/Footer";
import { Head } from "@inertiajs/react";
const Contact = ()=>{
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
        <ContactPage/>
        <Footer/>
        </>
    )
}

export default Contact;