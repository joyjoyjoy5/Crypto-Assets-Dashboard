import { useState } from "react";
import { Link } from "react-router-dom";
import "../sign-up.css";

function Signup() {
  const [stepNum, setStepNum] = useState(1);

  return (
    <>
      <div className="content">
        <div className="content__inner">
          <div className="container">
            <div className="multisteps-form">
              <div className="row">
                <div className=" main-form">
                  <div className="form-logo">
                    <img src="assets/images/LOGO.png" alt="" />
                  </div>
                  <div className="multisteps-form__progress">
                    <button
                      className="multisteps-form__progress-btn js-active"
                      type="button"
                      onClick={() => setStepNum(1)}
                    ></button>
                    <button
                      className={
                        stepNum >= 2
                          ? "js-active multisteps-form__progress-btn"
                          : "multisteps-form__progress-btn"
                      }
                      type="button"
                      onClick={() => setStepNum(2)}
                    ></button>
                    <button
                      className={
                        stepNum >= 3
                          ? "js-active multisteps-form__progress-btn"
                          : "multisteps-form__progress-btn"
                      }
                      type="button"
                      onClick={() => setStepNum(3)}
                    ></button>
                    <button
                      className={
                        stepNum >= 4
                          ? "js-active multisteps-form__progress-btn"
                          : "multisteps-form__progress-btn"
                      }
                      type="button"
                      onClick={() => setStepNum(4)}
                    ></button>
                    <button
                      className={
                        stepNum >= 5
                          ? "js-active multisteps-form__progress-btn"
                          : "multisteps-form__progress-btn"
                      }
                      type="button"
                      onClick={() => setStepNum(5)}
                    ></button>
                    <button
                      className={
                        stepNum >= 6
                          ? "js-active multisteps-form__progress-btn"
                          : "multisteps-form__progress-btn"
                      }
                      type="button"
                      onClick={() => setStepNum(6)}
                    ></button>
                    <button
                      className={
                        stepNum >= 7
                          ? "js-active multisteps-form__progress-btn"
                          : "multisteps-form__progress-btn"
                      }
                      type="button"
                      onClick={() => setStepNum(7)}
                    ></button>
                  </div>
                  <form className="multisteps-form__form">
                    {stepNum === 1 && (
                      <div
                        className="multisteps-form__panel p-4 rounded bg-white js-active"
                        data-animation="scaleIn"
                      >
                        <h3 className="multisteps-form__title">
                          Create New Account
                        </h3>
                        <div className="multisteps-form__content">
                          <div className="step-one">
                            <label>Email</label>
                            <input
                              type="email"
                              placeholder="william.smith@email.com"
                            />
                            <label>Phone Number</label>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <button
                                  className="btn btn-outline-secondary dropdown-toggle"
                                  type="button"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  +1
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="#">
                                    +2
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    +3
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    +4
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    +5
                                  </a>
                                </div>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="1234567890"
                                aria-label="Text input with dropdown button"
                              />
                            </div>
                            <label>Partner Code</label>
                            <input type="text" placeholder="1234567890" />
                          </div>
                          <div className="button-row mt-4">
                            <button
                              className="btn btn-primary ml-auto js-btn-next"
                              type="button"
                              title="Next"
                              onClick={() => setStepNum(2)}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {stepNum === 2 && (
                      <div
                        className="multisteps-form__panel rounded p-4 bg-white js-active"
                        data-animation="scaleIn"
                      >
                        <div className="multisteps-form__content">
                          <div className="step-two">
                            <div className="icon-mail">
                              <img src="images/mail-step -2.png" alt="" />
                              <h5>Check Your Email</h5>
                              <p>
                                We sent a verification link to the Email address
                                you used to create the account. If you don’t
                                verify your Email address, you may not be able
                                to continue.
                              </p>
                            </div>
                          </div>

                          <div className="button-row mt-4">
                            <button
                              className="btn btn-primary ml-auto js-btn-next"
                              type="button"
                              title="Next"
                              onClick={() => setStepNum(3)}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {stepNum === 3 && (
                      <div
                        className="multisteps-form__panel rounded p-4 bg-white js-active"
                        data-animation="scaleIn"
                      >
                        <h3 className="multisteps-form__title">
                          Create a Password
                        </h3>
                        <div className="multisteps-form__content">
                          <div className="step-three">
                            <label>Password</label>
                            <input type="password" placeholder="*********" />
                            <label>Confirm Password</label>
                            <input type="password" placeholder="*********" />
                          </div>
                          <div className="row">
                            <div className="button-row mt-4 col-12">
                              <button
                                className="btn btn-primary ml-auto js-btn-next"
                                type="button"
                                title="Next"
                                onClick={() => setStepNum(4)}
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {stepNum === 4 && (
                      <div
                        className="multisteps-form__panel rounded p-4 bg-white js-active"
                        data-animation="scaleIn"
                      >
                        <h3 className="multisteps-form__title">
                          Enter Your Verification Code
                        </h3>
                        <div className="multisteps-form__content">
                          <div className="step-four">
                            <p>
                              Security of your personal and financial
                              information is of upmost importance to us. Setting
                              up two factor authentication helps us keep your
                              account safe. We have sent an SMS with a 6 digit
                              code to your phone number. Please enter the code
                              below to confirm your mobile phone number.
                            </p>
                            <label>Enter the 6-digit code</label>
                            <input type="text" placeholder="******" />
                            <h6>
                              I haven't recieved the code{" "}
                              <a href="# " className="btn-primary">
                                Resend
                              </a>
                            </h6>
                          </div>

                          <div className="row">
                            <div className="button-row mt-4 col-12">
                              <button
                                className="btn btn-primary ml-auto js-btn-next"
                                type="button"
                                title="Next"
                                onClick={() => setStepNum(5)}
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {stepNum === 5 && (
                      <div
                        className="multisteps-form__panel rounded p-4 bg-white js-active"
                        data-animation="scaleIn"
                      >
                        <h3 className="multisteps-form__title">
                          Personal Information
                        </h3>
                        <div className="multisteps-form__content">
                          <div className="step-five">
                            <label>
                              Prefix <span>(optional)</span>
                            </label>
                            <input type="text" placeholder="Mr" />
                            <label>First Name</label>
                            <input type="text" placeholder="William" />
                            <label>Middle Name</label>
                            <input type="text" placeholder="Jay" />
                            <label>Last Name</label>
                            <input type="text" placeholder="Smith" />
                            <label>
                              Suffix <span>(optional)</span>
                            </label>
                            <input type="text" placeholder="JR" />
                          </div>
                          <div className="row">
                            <div className="button-row mt-4 col-12">
                              <button
                                className="btn btn-primary ml-auto js-btn-next"
                                type="button"
                                title="Next"
                                onClick={() => setStepNum(6)}
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {stepNum === 6 && (
                      <div
                        className="multisteps-form__panel rounded p-4 bg-white js-active"
                        data-animation="scaleIn"
                      >
                        <h3 className="multisteps-form__title">
                          Personal Information - Address
                        </h3>
                        <div className="multisteps-form__content">
                          <div className="step-six">
                            <label>Street Address</label>
                            <input type="text" placeholder="Gold street" />
                            <label>Unit Number</label>
                            <input type="text" placeholder="1234" />
                            <label>City</label>
                            <input type="text" placeholder="New Your" />
                            <label>State</label>
                            <input type="text" placeholder="New Your" />
                            <label>Zip Code</label>
                            <input type="text" placeholder="1001" />
                          </div>
                          <div className="row">
                            <div className="button-row mt-4 col-12">
                              <button
                                className="btn btn-primary ml-auto js-btn-next"
                                type="button"
                                title="Next"
                                onClick={() => setStepNum(7)}
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {stepNum === 7 && (
                      <div
                        className="multisteps-form__panel rounded p-4 bg-white js-active"
                        data-animation="scaleIn"
                      >
                        <h3 className="multisteps-form__title">
                          Personal Information
                        </h3>
                        <div className="multisteps-form__content">
                          <div className="step-seven">
                            <label>Sex</label>
                            <input type="text" placeholder="Male" />
                            <label>Date Of Birth</label>
                            <input type="date" />
                            <label>SSN or TIN</label>
                            <input type="text" placeholder="1234567890" />
                            <p>
                              Surplus is required by law to collect this
                              information
                            </p>
                          </div>
                          <div className="button-row  mt-4">
                            <Link to ="/"
                              className="btn btn-primary ml-auto"
                              type="button"
                              title="Send"
                            >
                              Next
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
