import React from 'react';

const ShopSection = () => {
  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <h1 className="mb-4">Fresh fruits shop</h1>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              <div className="col-xl-3">
                <div className="input-group w-100 mx-auto d-flex">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <div className="col-6"></div>
              <div className="col-xl-3">
                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                  <label htmlFor="fruits">Default Sorting:</label>
                  <select
                    id="fruits"
                    name="fruitlist"
                    className="border-0 form-select-sm bg-light me-3"
                    form="fruitform"
                  >
                    <option value="volvo">Nothing</option>
                    <option value="saab">Popularity</option>
                    <option value="opel">Organic</option>
                    <option value="audi">Fantastic</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-3">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <h4>Categories</h4>
                      <ul className="list-unstyled fruite-categorie">
                        {['Apples', 'Oranges', 'Strawbery', 'Banana', 'Pumpkin'].map((cat, i) => (
                          <li key={i}>
                            <div className="d-flex justify-content-between fruite-name">
                              <a href="#">
                                <i className="fas fa-apple-alt me-2"></i>
                                {cat}
                              </a>
                              <span>({Math.floor(Math.random() * 10)})</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <h4 className="mb-2">Price</h4>
                      <input
                        type="range"
                        className="form-range w-100"
                        id="rangeInput"
                        name="rangeInput"
                        min="0"
                        max="500"
                        defaultValue="0"
                        onInput={(e) => {
                          document.getElementById('amount').value = e.target.value;
                        }}
                      />
                      <output id="amount" name="amount">
                        0
                      </output>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="mb-3">
                      <h4>Additional</h4>
                      {['Organic', 'Fresh', 'Sales', 'Discount', 'Expired'].map((label, i) => (
                        <div className="mb-2" key={i}>
                          <input
                            type="radio"
                            className="me-2"
                            id={`Categories-${i + 1}`}
                            name="Categories-1"
                            value={label}
                          />
                          <label htmlFor={`Categories-${i + 1}`}>{label}</label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <h4 className="mb-3">Featured products</h4>

                    {[
                      { name: 'Apples', img: 'featur-1.jpg', price: '2.99', old: '4.11' },
                      { name: 'Strawberry', img: 'featur-2.jpg', price: '7.99', old: '11.99' },
                      { name: 'Broccoli', img: 'featur-3.jpg', price: '4.20', old: '7.11' },
                    ].map((item, i) => (
                      <div className="d-flex align-items-center justify-content-start mb-3" key={i}>
                        <div className="rounded me-4" style={{ width: '100px', height: '100px' }}>
                          <img
                            src={`../../../landing/img/${item.img}`}
                            className="img-fluid rounded"
                            alt=""
                          />
                        </div>
                        <div>
                          <h6 className="mb-2">{item.name}</h6>
                          <div className="d-flex mb-2">
                            {[...Array(4)].map((_, idx) => (
                              <i key={idx} className="fa fa-star text-secondary"></i>
                            ))}
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="d-flex mb-2">
                            <h5 className="fw-bold me-2">{item.price} $</h5>
                            <h5 className="text-danger text-decoration-line-through">
                              {item.old} $
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="d-flex justify-content-center my-4">
                      <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">
                        View More
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="position-relative">
                      <img
                        src="../../../landing/img/banner-fruits.jpg"
                        className="img-fluid w-100 rounded"
                        alt=""
                      />
                      <div
                        className="position-absolute"
                        style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }}
                      >
                        <h3 className="text-secondary fw-bold">
                          Fresh <br /> Fruits <br /> Banner
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="col-lg-9">
                <div className="row g-4 justify-content-center">
                  {[
                    { name: 'Garlic', img: 'vegetable-item-10.jpg', price: '1.21', type: 'Vegetable' },
                    { name: 'Carrots', img: 'vegetable-item-7.jpg', price: '1.99', type: 'Vegetable' },
                    { name: 'Radish', img: 'vegetable-item-11.jpg', price: '4.99', type: 'Vegetable' },
                    { name: 'Lemon', img: 'fruite-item-9.jpg', price: '5.99', type: 'Fruits' },
                    { name: 'Banana', img: 'fruite-item-3.jpg', price: '15.99', type: 'Fruits' },
                    { name: 'Oranges', img: 'fruite-item-1.jpg', price: '3.99', type: 'Fruits' },
                    { name: 'Raspberries', img: 'fruite-item-2.jpg', price: '4.99', type: 'Fruits' },
                    { name: 'Water Melon', img: 'fruite-item-23.jpg', price: '18.99', type: 'Fruits' },
                    { name: 'Strawberries', img: 'fruite-item-31.jpg', price: '11.99', type: 'Fruits' },
                  ].map((product, i) => (
                    <div className="col-md-6 col-lg-6 col-xl-4" key={i}>
                      <div className="rounded position-relative fruite-item h-100">
                        <div className="fruite-img">
                          <img
                            src={`../../../landing/img/${product.img}`}
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: '10px', left: '10px' }}
                        >
                          {product.type}
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>{product.name}</h4>
                          <p>
                            {/* Placeholder description */}
                            Delicious {product.name} — fresh and tasty for your healthy meals.
                          </p>
                          <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">${product.price} / kg</p>
                            <a
                              href="#"
                              className="btn border border-secondary rounded-pill px-3 text-primary"
                            >
                              <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="col-12">
                    <div className="pagination d-flex justify-content-center mt-5">
                      <a href="#" className="rounded">
                        &laquo;
                      </a>
                      <a href="#" className="active rounded">
                        1
                      </a>
                      <a href="#" className="rounded">
                        2
                      </a>
                      <a href="#" className="rounded">
                        3
                      </a>
                      <a href="#" className="rounded">
                        4
                      </a>
                      <a href="#" className="rounded">
                        5
                      </a>
                      <a href="#" className="rounded">
                        6
                      </a>
                      <a href="#" className="rounded">
                        &raquo;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Products Grid */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
