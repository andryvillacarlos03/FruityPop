

const ProductCard = ({productName,category,productPrice,productImage,description})=>{
    return(<>
         <div className="col-md-6 col-lg-4 col-xl-3 d-flex">
            <div className="rounded position-relative fruite-item border border-secondary w-100 d-flex flex-column">
                    <div className="fruite-img">
                        <img
                            src={productImage}
                            className="img-fluid w-100 rounded-top"
                            alt=""
                        />
                    </div>
                    <div
                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", left: "10px" }}
                    >
                    {category}
                    </div>
                    <div className="p-4 border-top-0 rounded-bottom d-flex flex-column h-100">
                    <h4>{productName}</h4>
                    <p>
                        {description}
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap mt-auto">
                        <p className="text-dark fs-5 fw-bold mb-0">{productPrice} / kg</p>
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

    
    </>)
}

export default ProductCard;