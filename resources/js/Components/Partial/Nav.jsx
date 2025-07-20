import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";

const Nav = () => {
  
  return (
    <>
      <div className="container-fluid fixed-top">
        {/* Topbar */}
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                <a href="#" className="text-white">Naalad, City of Naga, Cebu</a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <a href="#" className="text-white">FruityPop@gmail.com</a>
              </small>
            </div>
            <div className="top-link pe-2">
              <a href="#" className="text-white">
                <small className="mx-2">Privacy Policy</small>/
              </a>
              <a href="#" className="text-white">
                <small className="mx-2">Terms of Use</small>/
              </a>
              <a href="#" className="text-white">
                <small className="ms-2">Sales and Refunds</small>
              </a>
            </div>
          </div>
        </div>

        {/* Navbar — always visible */}
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <a href="#" className="navbar-brand">
              <h1 className="text-primary display-6">FruityPop</h1>
            </a>

            <div className="navbar-nav mx-auto d-flex flex-wrap">
              <Link href={route("page.landing")} className={`nav-item nav-link ${route().current('page.landing') ? 'active' : ''}`} >
                Home
              </Link>
              <Link href={route("page.shop")} className={`nav-item nav-link ${route().current('page.shop') ? 'active' : ''}`}>
                Shop
              </Link>
              <Link href={route("page.shop.detail")} className={`nav-item nav-link ${route().current('page.shop.detail') ? 'active' : ''}`}>
                Shop Detail
              </Link>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Pages
                </a>
                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                  <Link href={route("page.cart")} className="dropdown-item">
                    Cart
                  </Link>
                  <Link href={route("page.checkout")} className="dropdown-item">
                    Checkout
                  </Link>
                  <Link href={route("page.testimonial")} className="dropdown-item">
                    Testimonial
                  </Link>
                </div>
              </div>
              <Link href={route("page.contact")} className={`nav-item nav-link ${route().current('page.contact') ? 'active' : ''}`}>
                Contact
              </Link>
            </div>

            <div className="d-flex m-3 me-0">
              <button
                className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fas fa-search text-primary"></i>
              </button>
              <a href="#" className="position-relative me-4 my-auto">
                <i className="fa fa-shopping-bag fa-2x"></i>
                <span
                  className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                  style={{ top: "-5px", left: "15px", height: "20px", minWidth: "20px" }}
                >
                  3
                </span>
              </a>
              <a href="#" >
          
              </a>
              <Link href={route('login')} className="my-auto">
                <i className="fas fa-user fa-2x"></i>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
