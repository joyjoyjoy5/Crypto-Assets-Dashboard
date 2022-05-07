function Support() {
  return (
    <>
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="row">
                <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 className="font-weight-bold">Support</h3>
                </div>
              
              </div>
            </div>
          </div>
        
          <div className="row d-flex justify-content-center support-page">
          <div className="col-md-6 bg-white grid-margin">
             
            <form action="">
              <label for="">Your Local Certified Crypto Advisor</label>
              <input type="text" className="form-control" placeholder="Partner Name" />
              <label for="">Partner Contact Number</label>
              <input type="number" className="form-control" placeholder="Partner Number" name="" id="" />
              <label for="">Partner Email Address</label>
              <input type="email" className="form-control" placeholder="parnter@email.com" name="" id="" />
            </form>
            </div>
          </div>
        </div>
      
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © 2022.  Surplus All rights reserved.</span>
          
          </div>
        </footer>  
      </div>
    </>
  );
}

export default Support;