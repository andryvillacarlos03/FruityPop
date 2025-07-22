import Nav from "@/Components/Partial/Nav.jsx";
import Hero from "@/Components/Partial/Hero";
import Feature from "@/Components/Partial/Feature";
import ProductCard from "@/Components/Partial/ProductCard";
import data from '@/Data/product.json';
import Banner from "@/Components/Partial/Banner";
import BestSellerProducts from "@/Components/Partial/BestSellerProduct";
import CountersSection from "@/Components/Partial/CounterSection";
import Testimonials from "@/Components/Partial/Testamonial";
import Footer from "@/Components/Partial/Footer";
import '../style/landing.css'
import { Head } from "@inertiajs/react";

const Landing = ()=>{
    
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
                  
       </Head>
    
        {/*Navigation section*/}
         <Nav/>
        {/*End Navigation section*/}
        
        {/*Hero section*/}
         <Hero/>
        {/*End Herosection*/}
        
        {/*Feature section*/}
         <Feature/>
        {/*End Feature section*/}

        {/*Shop section*/}
        <div className="container-fluid fruite py-5">
      <div className="container py-5">
    <div className="tab-class text-center">
      <div className="row g-4">
        <div className="col-lg-4 text-start">
          <h1>Our Fruit Products</h1>
        </div>
        <div className="col-lg-8 text-end">
          <ul className="nav nav-pills d-inline-flex text-center mb-5">
            <li className="nav-item">
              <a
                className="d-flex m-2 py-2 bg-light rounded-pill active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                <span className="text-dark" style={{ width: "130px" }}>
                  Citrus
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex m-2 py-2 bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                <span className="text-dark" style={{ width: "130px" }}>
                  Tropical
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex m-2 py-2 bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                <span className="text-dark" style={{ width: "130px" }}>
                  Melons
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex m-2 py-2 bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-4"
              >
                <span className="text-dark" style={{ width: "130px" }}>
                  Berries
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="tab-content">
        {/*Tab 1*/}
        <div id="tab-1" className="tab-pane fade show active p-0">
            <div className="row g-4">
            {data
            .filter((item) => item.category === "Citrus")
            .map((item, index) => (
                <ProductCard
                key={index}
                productName={item.name}
                description={item.description}
                  productPrice={item.pricePerKg}
                category={item.category}
                productImage={item.image}
                />
            ))}

            </div>
        </div>
           {/*End of Tab 1*/}

           {/*Tab 2*/}

             <div id="tab-2" className="tab-pane fade show p-0">
            <div className="row g-4">
            {data
            .filter((item) => item.category === "Tropical")
            .map((item, index) => (
                <ProductCard
                key={index}
                productName={item.name}
                description={item.description}
                  productPrice={item.pricePerKg}
                category={item.category}
                productImage={item.image}
                />
            ))}

            </div>
        </div>

            {/*End of Tab 2*/}

        
           {/*Tab 4*/}

             <div id="tab-3" className="tab-pane fade show p-0">
            <div className="row g-4">
            {data
            .filter((item) => item.category === "Melons")
            .map((item, index) => (
                <ProductCard
                key={index}
                productName={item.name}
                description={item.description}
                productPrice={item.pricePerKg}
                category={item.category}
                productImage={item.image}
                />
            ))}

            </div>
        </div>

            {/*End of Tab 3*/}

            
           {/*Tab 4*/}

             <div id="tab-4" className="tab-pane fade show p-0">
            <div className="row g-4">
            {data
            .filter((item) => item.category === "Berries")
            .map((item, index) => (
                <ProductCard
                key={index}
                productName={item.name}
                description={item.description}
                productPrice={item.pricePerKg}
                category={item.category}
                productImage={item.image}
                />
            ))}

            </div>
        </div>

            {/*End of Tab 4*/}

       </div>
    </div>
  </div>
</div>

{/*Banner*/}

<Banner/>
{/*End Banner*/}

{/*Best Seller Products*/}
<BestSellerProducts/>
{/*End Best Seller Products*/}

{/*Counter Section*/}
<CountersSection/>
{/*End Counter Section*/}

{/*Testimonials*/}
<Testimonials/>
{/*End Testimonials*/}

{/*Footer*/}
<Footer/>
{/*End Footer*/}

       </>
    )
}

export default Landing;