const CountersSection = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="bg-light p-5 rounded">
          <div className="row g-4 justify-content-center">

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5 text-center">
                <i className="fa fa-users text-secondary"></i>
                <h4>satisfied customers</h4>
                <h1>1963</h1>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5 text-center">
                <i className="fa fa-users text-secondary"></i>
                <h4>quality of service</h4>
                <h1>99%</h1>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5 text-center">
                <i className="fa fa-users text-secondary"></i>
                <h4>quality certificates</h4>
                <h1>33</h1>
              </div>
            </div>

            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="counter bg-white rounded p-5 text-center">
                <i className="fa fa-users text-secondary"></i>
                <h4>Available Products</h4>
                <h1>789</h1>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CountersSection;
