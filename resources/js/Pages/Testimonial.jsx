import React from 'react';
import Nav from '@/Components/Partial/Nav';
import SinglePage from '@/Components/Partial/SinglePage';
import Footer from '@/Components/Partial/Footer';
import { Head } from '@inertiajs/react';
const Testimonials = () => {
  const testimonialData = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "../../../landing/img/luna.jpg",
      name: "Luna Redoble",
      profession: "Producer",
      stars: 4,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "../../../landing/img/rits.jpg",
      name: "Ritz Fernando",
      profession: "International Tambay",
      stars: 5,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
      img: "../../../landing/img/marc.jpg",
      name: "Marc Ray Genilla",
      profession: "Web Developer",
      stars: 5,
    },
  ];

  return (
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

    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="testimonial-header text-center">
          <h4 className="text-primary">Our Testimonial</h4>
          <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
        </div>

        <div className="row">
          {testimonialData.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="testimonial-item img-border-radius bg-light rounded p-4">
                <div className="position-relative">
                  <i
                    className="fa fa-quote-right fa-2x text-secondary position-absolute"
                    style={{ bottom: '30px', right: 0 }}
                  ></i>
                  <div className="mb-4 pb-4 border-bottom border-secondary">
                    <p className="mb-0">{item.text}</p>
                  </div>
                  <div className="d-flex align-items-center flex-nowrap">
                    <div className="bg-secondary rounded">
                      <img
                        src={item.img}
                        className="img-fluid rounded"
                        style={{ width: '100px', height: '100px' }}
                        alt=""
                      />
                    </div>
                    <div className="ms-4 d-block">
                      <h4 className="text-dark">{item.name}</h4>
                      <p className="m-0 pb-3">{item.profession}</p>
                      <div className="d-flex pe-5">
                        {Array.from({ length: 5 }, (_, i) => (
                          <i
                            key={i}
                            className={`fas fa-star ${
                              i < item.stars ? 'text-primary' : ''
                            }`}
                          ></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Testimonials;
