import React from 'react';
import Sidebar from './SideBar';
import RelatedProducts from './RelatedProducts';

const ProductDetail = () => {
  return (
    <div className="container-fluid py-5 mt-5">
      <div className="container py-5">
        <div className="row g-4 mb-5">
          <div className="col-lg-8 col-xl-9">
            <div className="row g-4">
              {/* Product Image */}
              <div className="col-lg-6">
                <div className="border rounded">
                  <a href="#">
                    <img
                      src="../../../landing/img/vegetable-item-7.jpg"
                      className="img-fluid rounded"
                      alt="Carrots"
                      style={{ height: '400px' }}
                    />
                  </a>
                </div>
              </div>
              {/* Product Info */}
              <div className="col-lg-6">
                <h4 className="fw-bold mb-3">Carrots</h4>
                <p className="mb-3">Category: Vegetables</p>
                <h5 className="fw-bold mb-3">$3.35</h5>
                <div className="d-flex mb-4">
                  {[1, 2, 3, 4].map((_, i) => (
                    <i key={i} className="fa fa-star text-secondary"></i>
                  ))}
                  <i className="fa fa-star"></i>
                </div>
                <p className="mb-4">
                  Our carrots are naturally sweet, delightfully crunchy, and bursting
                  with garden-fresh flavor. Perfect for snacking, tossing in vibrant
                  salads, or adding a hearty, healthy touch to your favorite family meals.
                </p>
                <p className="mb-4">Nature’s crisp, sweet snack — perfect for any meal.</p>

                {/* Quantity Controls */}
                <div className="input-group quantity mb-5" style={{ width: '100px' }}>
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm text-center border-0"
                    value="1"
                    readOnly
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                </a>
              </div>

              {/* Tabs */}
              <div className="col-lg-12">
                <nav>
                  <div className="nav nav-tabs mb-3">
                    <button
                      className="nav-link active border-white border-bottom-0"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-about"
                    >
                      Description
                    </button>
                    <button
                      className="nav-link border-white border-bottom-0"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-mission"
                    >
                      Reviews
                    </button>
                  </div>
                </nav>
                <div className="tab-content mb-5">
                  <div className="tab-pane active" id="nav-about">
                    <p>
                      “Our farm-fresh carrots are naturally sweet, perfectly crisp, and
                      bursting with bright, garden-fresh flavor. Grown with care and packed
                      with vitamins...
                    </p>
                    {/* Product Details */}
                    <div className="px-2">
                      <div className="row g-4">
                        <div className="col-6">
                          {[
                            ['Weight', '1 kg'],
                            ['Country of Origin', 'Agro Farm'],
                            ['Quality', 'Organic'],
                            ['Check', 'Healthy'],
                            ['Min Weight', '2 Kg'],
                          ].map(([label, value]) => (
                            <div
                              key={label}
                              className={`row ${
                                label === 'Weight' || label === 'Quality' || label === 'Min Weight'
                                  ? 'bg-light'
                                  : ''
                              } text-center align-items-center justify-content-center py-2`}
                            >
                              <div className="col-6">
                                <p className="mb-0">{label}</p>
                              </div>
                              <div className="col-6">
                                <p className="mb-0">{value}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reviews */}
                  <div className="tab-pane" id="nav-mission">
                    {[
                      {
                        name: 'Ivan Rey Olindang',
                        date: 'April 12, 2024',
                        img: '../../../landing/img/ivan.jpg',
                        stars: 4,
                        text: 'These carrots are so fresh and naturally sweet...'
                      },
                      {
                        name: 'Trixie Tinapao',
                        date: 'April 12, 2024',
                        img: '../../../landing/img/xie.jpg',
                        stars: 3,
                        text: 'I’ve been ordering their vegetables for months now...'
                      }
                    ].map((review, idx) => (
                      <div key={idx} className="d-flex mb-4">
                        <img
                          src={review.img}
                          className="img-fluid rounded-circle p-3"
                          style={{ width: '100px', height: '100px' }}
                          alt=""
                        />
                        <div>
                          <p className="mb-2" style={{ fontSize: '14px' }}>
                            {review.date}
                          </p>
                          <div className="d-flex justify-content-between">
                            <h5>{review.name}</h5>
                            <div className="d-flex mb-3">
                              {[...Array(review.stars)].map((_, i) => (
                                <i key={i} className="fa fa-star text-secondary"></i>
                              ))}
                              {[...Array(5 - review.stars)].map((_, i) => (
                                <i key={i} className="fa fa-star"></i>
                              ))}
                            </div>
                          </div>
                          <p>{review.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Form */}
              <form>
                <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control border-0 border-bottom rounded"
                      placeholder="Your Name *"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      className="form-control border-0 border-bottom rounded"
                      placeholder="Your Email *"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      className="form-control border-0 border-bottom rounded my-4"
                      rows="8"
                      placeholder="Your Review *"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-between py-3 mb-5">
                      <div className="d-flex align-items-center">
                        <p className="mb-0 me-3">Please rate:</p>
                        <div className="d-flex align-items-center" style={{ fontSize: '12px' }}>
                          {[1, 2, 3, 4, 5].map((_, i) => (
                            <i key={i} className={`fa fa-star ${i === 0 ? 'text-muted' : ''}`}></i>
                          ))}
                        </div>
                      </div>
                      <a
                        href="#"
                        className="btn border border-secondary text-primary rounded-pill px-4 py-3"
                      >
                        Post Comment
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>

        {/* Related Products */}
        <h1 className="fw-bold mb-0">Related products</h1>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetail;
