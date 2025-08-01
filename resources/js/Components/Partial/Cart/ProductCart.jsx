import React from 'react';
import {route} from 'ziggy-js';
import { Link } from '@inertiajs/react';
const ProductCart = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Products</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: 'Big Banana',
                  img: '../../../landing/img/vegetable-item-3.png',
                  price: '2.99 $',
                  total: '2.99 $',
                },
                {
                  name: 'Potatoes',
                  img: '../../../landing/img/vegetable-item-5.jpg',
                  price: '2.99 $',
                  total: '2.99 $',
                },
                {
                  name: 'Awesome Broccoli',
                  img: '../../../landing/img/vegetable-item-2.jpg',
                  price: '2.99 $',
                  total: '2.99 $',
                },
              ].map((item, index) => (
                <tr key={index}>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src={item.img}
                        className="img-fluid me-5 rounded-circle"
                        style={{ width: '80px', height: '80px' }}
                        alt={item.name}
                      />
                    </div>
                  </th>
                  <td>
                    <p className="mb-0 mt-4">{item.name}</p>
                  </td>
                  <td>
                    <p className="mb-0 mt-4">{item.price}</p>
                  </td>
                  <td>
                    <div
                      className="input-group quantity mt-4"
                      style={{ width: '100px' }}
                    >
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
                  </td>
                  <td>
                    <p className="mb-0 mt-4">{item.total}</p>
                  </td>
                  <td>
                    <button className="btn btn-md rounded-circle bg-light border mt-4">
                      <i className="fa fa-times text-danger"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5">
          <input
            type="text"
            className="border-0 border-bottom rounded me-5 py-3 mb-4"
            placeholder="Coupon Code"
          />
          <button
            className="btn border-secondary rounded-pill px-4 py-3 text-primary"
            type="button"
          >
            Apply Coupon
          </button>
        </div>

        <div className="row g-4 justify-content-end">
          <div className="col-8"></div>
          <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
            <div className="bg-light rounded">
              <div className="p-4">
                <h1 className="display-6 mb-4">
                  Cart <span className="fw-normal">Total</span>
                </h1>
                <div className="d-flex justify-content-between mb-4">
                  <h5 className="mb-0 me-4">Subtotal:</h5>
                  <p className="mb-0">$96.00</p>
                </div>
                <div className="d-flex justify-content-between">
                  <h5 className="mb-0 me-4">Shipping</h5>
                  <div>
                    <p className="mb-0">Flat rate: $3.00</p>
                  </div>
                </div>
                <p className="mb-0 text-end">Sanfernando, Cabatbatan</p>
              </div>
              <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                <h5 className="mb-0 ps-4 me-4">Total</h5>
                <p className="mb-0 pe-4">$99.00</p>
              </div>
              <Link href={route('page.checkout')}  className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
                >
               
              
                Proceed Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
