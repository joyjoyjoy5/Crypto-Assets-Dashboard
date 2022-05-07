import { Link } from "react-router-dom";
// import '../../public/assets/css/signin.css';

function Signin() {
  return (
    <>
      <section className="signin-sec">
        <div className="container">
           <div className="row d-flex justify-content-center">
               <div className="col-md-6 bg-white box">
                  <img src="assets/img/LOGO.png" alt="" />
                  <h2>Sign In</h2>
                  <form action="post">
                    <label>Email</label>
                    <input type="email" placeholder="william.snith@email.com" name="" id="" /> 
                    <label>Password</label> 
                    <input type="password" placeholder="********" name="" id="" />
                    <div className="row">
                      <div className="col">
                          <input type="checkbox" /><span>Remember me </span> 
                      </div>
                      <div className="col text-right">
                        <Link to="#">Forgot Password</Link>
                      </div>
                    </div>
                    <div className="btn-area">
                        <input type="submit" value="Next" />
                        <p>Don't have an account yet? click <Link to="/signup">here</Link> to Sign Up</p>
                    </div>
                  </form>
               </div>
           </div>
        </div>
    </section>
    </>
  );
}

export default Signin;