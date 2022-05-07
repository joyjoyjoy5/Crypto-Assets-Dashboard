import Footer from "./Footer";

function Account () {
  return (
    <>
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="row">
                <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 className="font-weight-bold">My Account</h3>
                </div>
               
              </div>
            </div>
          </div>
          
          <div className="row d-flex justify-content-center account-page">
            <div className="col-md-6 bg-white grid-margin">
                <h3 className="name-user">John Smith</h3>
             <form action="">
                 <label for="">Change Password ></label>
                 <input type="password" className="form-control" placeholder="********" name="" id="" />
                 <label for="">Change Email</label>
                 <input type="email" className="form-control" placeholder="your@email.com"  name="" id="" />
                 <label for="">Change Phone Number</label>
                 <input type="number" className="form-control" placeholder="1234567890"  name="" id="" />
                 <label for="">Enter Your Bitcoin Address</label>
                 <input className="form-control" type="text" placeholder="Enter Your BTC Address" />
                 <br />
                 <input type="submit" className="btn btn-primary" value="Save" />
              </form>
            </div>
          </div>
        </div>

        <Footer />
        
      </div>
    </>
  );
}

export default Account;