import Footer from "./Footer";

function Dashboard() {
  return (
    <>
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="row">
                <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 className="font-weight-bold">Welcome Aamirr</h3>
                  <h6 className="font-weight-normal mb-0">
                    All systems are running smoothly!
                  </h6>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title">Assets</p>
                  <p className="font-weight-500">
                    The total number of sessions within the date range. It is
                    the period time a user is actively engaged with your
                    website, page or app, etc
                  </p>
                  <div className="d-flex justify flex-wrap mb-5">
                    <div className="me-5 mt-3">
                      <p className="text-muted">Starting Value</p>
                      <h3 className="text-primary fs-30 font-weight-medium">
                        12.3k
                      </h3>
                    </div>
                    <div className="me-5 mt-3">
                      <p className="text-muted">Maturity Value</p>
                      <h3 className="text-primary fs-30 font-weight-medium">
                        14k
                      </h3>
                    </div>
                    <div className="me-5 mt-3">
                      <p className="text-muted">APY</p>
                      <h3 className="text-primary fs-30 font-weight-medium">
                        71.56%
                      </h3>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted">Accomulation</p>
                      <h3 className="text-primary fs-30 font-weight-medium">
                        34040
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <p className="card-title">Assets</p>
                  <p className="font-weight-500">
                    The total number of sessions within the date range. It is
                    the period time a user is actively engaged with your
                    website, page or app, etc
                  </p>
                  <div className="d-flex justify flex-wrap mb-5">
                    <div className="me-5 mt-3">
                      <p className="text-muted">Starting Value</p>
                      <h3 className="text-primary fs-30 font-weight-medium">
                        12.3k
                      </h3>
                    </div>
                    <div className="me-5 mt-3">
                      <p className="text-muted">Maturity Value</p>
                      <h3 className="text-primary fs-30 font-weight-medium">
                        14k
                      </h3>
                    </div>
                    <div className="me-5 mt-3">
                      <p className="text-muted">APY</p>
                      <h3 className="text-primary fs-30 font-weight-medium">
                        71.56%
                      </h3>
                    </div>
                    <div className="mt-3">
                      <p className="text-muted">Accomulation</p>
                      <h3 className="text-primary fs-30 font-weight-medium">
                        34040
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Dashboard;
