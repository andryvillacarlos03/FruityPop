import React from 'react';

const Sidebar = () => {
  return (
    <div className="col-lg-4 col-xl-3">
      <div className="row g-4 fruite">
        <div className="col-lg-12">
          <div className="input-group w-100 mx-auto d-flex mb-4">
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

          {/* Categories */}
          <div className="mb-4">
            <h4>Categories</h4>
            <ul className="list-unstyled fruite-categorie">
              {['Apples', 'Oranges', 'Strawbery', 'Banana', 'Pumpkin'].map((item, i) => (
                <li key={i}>
                  <div className="d-flex justify-content-between fruite-name">
                    <a href="#">
                      <i className="fas fa-apple-alt me-2"></i>
                      {item}
                    </a>
                    <span>({i + 2})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Featured Products */}
        <div className="col-lg-12">
          <h4 className="mb-4">Featured products</h4>
          {/* Add your featured product items here */}
        </div>

        {/* Banner */}
        <div className="col-lg-12">
          <div className="position-relative">
            <img src="img/banner-fruits.jpg" className="img-fluid w-100 rounded" alt="" />
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
  );
};

export default Sidebar;
