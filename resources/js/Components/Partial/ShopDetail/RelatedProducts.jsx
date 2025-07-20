import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const RelatedProducts = () => {
  const products = [
    { title: 'Parsely', price: '$4.99 / kg', img: 'img/vegetable-item-6.jpg', description: 'Fresh parsley' },
    { title: 'Tomato', price: '$4.99 / kg', img: 'img/vegetable-item-1.jpg', description: 'Juicy tomatoes' },
    { title: 'Banana', price: '$7.99 / kg', img: 'img/vegetable-item-3.png', description: 'Tasty bananas' },
    { title: 'Bell Pepper', price: '$7.99 / kg', img: 'img/vegetable-item-4.jpg', description: 'Colorful peppers' },
    { title: 'Potatoes', price: '$7.99 / kg', img: 'img/vegetable-item-5.jpg', description: 'Organic potatoes' },
  ];

  return (
    <div className="vesitable">
      <OwlCarousel className="owl-theme" loop margin={10} nav items={3}>
        {products.map((product, idx) => (
          <div key={idx} className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img
                src={`../../../landing/${product.img}`}
                className="img-fluid w-100 rounded-top"
                alt={product.title}
              />
            </div>
            <div
              className="text-white bg-primary px-3 py-1 rounded position-absolute"
              style={{ top: '10px', right: '10px' }}
            >
              Vegetable
            </div>
            <div className="p-4 pb-0 rounded-bottom">
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold">{product.price}</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default RelatedProducts;
