import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Testimonial() {
  return (
    <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="testimonial-header text-center">
          <h4 className="text-primary">Our Testimonial</h4>
          <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          speed={1000} // Slide transition speed in ms
          effect="fade" // Optional: fade effect
          fadeEffect={{ crossFade: true }}
        >
          <SwiperSlide>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: 0 }}></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    I love how fresh and flavorful their fruits and vegetables are! Every order arrives crisp, vibrant, and full of natural goodness. It’s my go-to store for healthy, organic produce I can trust.
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="../../../landing/img/rits.jpg"
                      className="img-fluid rounded"
                      style={{ width: '100px', height: '100px' }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Ritz Fernando</h4>
                    <p className="m-0 pb-3">Graphic Designer</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: 0 }}></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    The quality of their produce is amazing! Every order is fresh, flavorful, and always carefully packed, delivered right to my front door — I couldn’t ask for more.
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="../../../landing/img/luna.jpg"
                      className="img-fluid rounded"
                      style={{ width: '100px', height: '100px' }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Maria Luna Redoble</h4>
                    <p className="m-0 pb-3">Data Analyst</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: '30px', right: 0 }}></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    I’m so happy with their fresh produce! Every box is always packed with vibrant, tasty fruits and vegetables that stay crisp, delicious, and healthy for many days.
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src="../../../landing/img/marc.jpg"
                      className="img-fluid rounded"
                      style={{ width: '100px', height: '100px' }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">Marc Ray Genilla</h4>
                    <p className="m-0 pb-3">Project Coordinator</p>
                    <div className="d-flex pe-5">
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                      <i className="fas fa-star text-primary"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
