import Footer from "./Footer";

function Reports () {
  return ( 
    <> 
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="row">
                <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 className="font-weight-bold">Reports</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <p>No reports available...</p>
            </div>
          </div>
        </div>
      
        <Footer />
      </div>
    </>
  );
}

export default Reports;