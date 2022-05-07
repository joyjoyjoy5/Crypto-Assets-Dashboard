import { useState } from "react";
import './benificiaries.css';

function Benificiaries () {
  const [stepNum, setStepNum] = useState(1);

  return (
    <>
      <div className="content">
        <div className="content__inner">
          <div className="container">
            <div className="multisteps-form benific">
              <div className="row">
                <div className=" main-form">
                  <div className="multisteps-form__progress">
                    <button className="multisteps-form__progress-btn js-active" type="button" onClick={() => setStepNum(1)} ></button>
                    <button className={
                      stepNum >= 2  
                      ? "js-active multisteps-form__progress-btn"
                      : "multisteps-form__progress-btn"
                      } 
                      type="button" 
                      onClick={() => setStepNum(2)} >
                    </button>
                    <button className={
                      stepNum >= 3  
                      ? "js-active multisteps-form__progress-btn"
                      : "multisteps-form__progress-btn"
                      } 
                      type="button" onClick={() => setStepNum(3)} >
                    </button>
                    <button className={
                        stepNum >= 4  
                      ? "js-active multisteps-form__progress-btn"
                      : "multisteps-form__progress-btn"
                      } 
                    type="button" onClick={() => setStepNum(4)} >
                    </button>
                    <button className={
                      stepNum >= 5  
                      ? "js-active multisteps-form__progress-btn"
                      : "multisteps-form__progress-btn"
                      } 
                      type="button" onClick={() => setStepNum(5)} >
                    </button>
                    <button className={
                      stepNum >= 6  
                      ? "js-active multisteps-form__progress-btn"
                      : "multisteps-form__progress-btn"
                      } 
                      type="button" onClick={() => setStepNum(6)} >
                    </button>
                    <button className={
                      stepNum >= 7  
                      ? "js-active multisteps-form__progress-btn"
                      : "multisteps-form__progress-btn"
                      } 
                      type="button" onClick={() => setStepNum(7)} >
                    </button>
                    <button className={
                      stepNum >= 8  
                      ? "js-active multisteps-form__progress-btn"
                      : "multisteps-form__progress-btn"
                      } 
                      type="button" onClick={() => setStepNum(8)} >
                    </button>
                    <button className={
                      stepNum >= 9  
                      ? "js-active multisteps-form__progress-btn"
                      : "multisteps-form__progress-btn"
                      } 
                      type="button" onClick={() => setStepNum(9)} >
                    </button>
                    <button className={
                      stepNum >= 10  
                      ? "js-active multisteps-form__progress-btn"
                      : "multisteps-form__progress-btn"
                      } 
                      type="button" onClick={() => setStepNum(10)} >
                    </button>
                   
                 </div>

                  <form className="multisteps-form__form">
                    {stepNum === 1 && (
                    <div className="multisteps-form__panel p-4 rounded bg-white js-active" data-animation="scaleIn">
                      <h3 className="multisteps-form__title">Your Guranteed Crypto Growth</h3>
                      
                      <div className="multisteps-form__content">
                        <div className="step-one">
                            <label>Intial Amount</label>
                            <input type="number" placeholder="$10,000 - $5,000,000" />
                            <label>Number Of Years</label>
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" className="custom-control-input" id="customCheck1" />
                              <label className="custom-control-label" for="customCheck1">3</label>
                              
                              <input type="checkbox" className="custom-control-input" id="customCheck2" />
                              <label className="custom-control-label" for="customCheck2">5</label>

                              <input type="checkbox" className="custom-control-input" id="customCheck3" />
                              <label className="custom-control-label" for="customCheck3">7</label>

                              <input type="checkbox" className="custom-control-input" id="customCheck3" />
                              <label className="custom-control-label" for="customCheck3">10</label>
                            </div>
                            <label>Guranteed Rate (APY)</label>
                            <input type="number" name="" id="" placeholder="30%" />
                            <label>Crypto Value At Maturity</label>
                            <input type="text" name="" id="" placeholder="$2,000,000" />
                        </div>
                        <div className="button-row mt-4">
                          <button className="btn btn-primary ml-auto js-btn-next" 
                            type="button" 
                            title="Next" onClick={() => setStepNum(4)} onClick={() => setStepNum(3)}
                            onClick={() => setStepNum(2)}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                    )}
                    {stepNum === 2 && (
                    <div className="multisteps-form__panel p-4 rounded bg-white js-active" data-animation="scaleIn">
                      <h3 className="multisteps-form__title">Enter Your Beneficiaries</h3>
                      <div className="multisteps-form__content"> 
                        <div className="step-two">
                          <div className="icon-mail">
                            <p>Beneficiaries receive the death benefit
                              in the event you pass away before your term is over.
                              A beneficiary can be a person or a trust.
                              The owner may change the beneficiary(ies)
                              at any time during the term of the contract.</p>
                          </div>

                          <div className="btns-benif">
                            <button>An Individual</button>
                            <button>A Trust</button>
                            <button>Your Estate</button>
                          </div>
                       </div>
                  
                        <div className="button-row mt-4">
                          <button className="btn btn-primary ml-auto js-btn-next" type="button" title="Next" onClick={() => setStepNum(4)} onClick={() => setStepNum(3)}>Next</button>
                        </div>
                      </div>
                    </div>
                    )}
                    {stepNum === 3 && (
                    <div className="multisteps-form__panel p-4 rounded bg-white js-active" data-animation="scaleIn">
                      <h3 className="multisteps-form__title">Individual Information</h3>
                      <div className="multisteps-form__content">
                        <div className="step-three">
                          <label>Prefix <span>(optional)</span></label>
                          <input type="text" placeholder="Mr" />
                          <label>First Name</label>
                          <input type="text" placeholder="William" />
                          <label>Middle Name</label>
                          <input type="text" placeholder="Jay" />
                          <label>Last Name</label>
                          <input type="text" placeholder="Smith" />
                          <label>Suffix <span>(optional)</span></label>
                          <input type="text" placeholder="JR" />
                        </div>
                        <div className="row">
                          <div className="button-row mt-4 col-12">
                          <button className="btn btn-primary ml-auto js-btn-next" type="button" title="Next" onClick={() => setStepNum(4)}>Next</button>
                        </div>
                      </div>
                    </div>
                    </div>
                    )}
                    {stepNum === 4 && (
                    <div className="multisteps-form__panel p-4 rounded bg-white js-active" data-animation="scaleIn">
                      <h3 className="multisteps-form__title">Trust Information</h3>
                      <div className="multisteps-form__content">
                        <div className="step-three-2">
                          <label>Name</label>
                          <input type="text" placeholder="John Smith" />
                          <div className="row">
                            <div className="col-md">
                              <label>Street Address</label>
                              <input type="text" placeholder="Gold Road 3422" />
                            </div>
                            <div className="col-md">
                              <label>Second address</label>
                              <input type="text" placeholder="Silver Road 1234" />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md">
                              <label>ZIP Code</label>
                              <input type="number" name="" id="" placeholder="1002" />
                            </div>
                            <div className="col-md">
                              <label>Tax-identification Number</label>
                              <input type="number" name="" id="" placeholder="1234567890" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="button-row mt-4 col-12">
                            <button className="btn btn-primary ml-auto js-btn-next" type="button" title="Next" onClick={() => setStepNum(5)}>Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}
                    {stepNum === 5 && (
                    <div className="multisteps-form__panel p-4 rounded bg-white js-active" data-animation="scaleIn">
                      <h3 className="multisteps-form__title">Individual Information</h3>
                      <div className="multisteps-form__content">
                        <div className="step-four">
                          <label>Sex</label>
                          <input type="text" placeholder="Male" />
                          <label>Date Of Birth</label>
                          <input type="date" />
                          <label>SSN or TIN</label>
                          <input type="text" placeholder="1234567890" />
                          <p>Surplus is required by law to collect this information</p>  
                          <label>Relationship To Owner</label>
                          <input type="text" placeholder="Son" />
                        </div>
                        
                        <div className="row">
                          <div className="button-row mt-4 col-12">
                            <button className="btn btn-primary ml-auto js-btn-next" type="button" title="Next" onClick={() => setStepNum(6)}>Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}
                    {stepNum === 6 && (
                    <div className="multisteps-form__panel p-4 rounded bg-white js-active" data-animation="scaleIn">
                      <h3 className="multisteps-form__title">Allocation</h3>
                      <div className="multisteps-form__content">
                        <div className="step-five">
                        <label>Allocation %</label>
                        <input type="text" placeholder="Male" />
                        <label>Contact Email</label>
                        <input type="text" placeholder="johnsmith@gmail.com" />
                        <label>Contact Email</label>
                        <input type="text" placeholder="johnsmith@gmail.com" />
                        </div>
                        <div className="row">
                          <div className="button-row mt-4 col-12">
                            <button className="btn btn-primary ml-auto js-btn-next" type="button" title="Next" onClick={() => setStepNum(7)}>Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}
                    {stepNum === 7 && (
                    <div className="multisteps-form__panel p-4 rounded bg-white js-active" data-animation="scaleIn">
                      <h3 className="multisteps-form__title">Irrevocable?</h3>
                      <div className="multisteps-form__content">
                        <div className="step-six">
                          <div className="icon-mail">
                            <p>Is this beneficiary irrevocable?</p>
                          </div>

                          <div className="btns-benif irrevoc">
                            <button>Yes</button>
                            <button>No</button>
                          </div>

                          <p className="bottom-text">*An irrevocable beneficiary can only be revoked by a written request
                            from the crypto contract owner and the irrevocable beneficiary.</p>
                        </div>
                        <div className="row">
                          <div className="button-row mt-4 col-12">
                            <button className="btn btn-primary ml-auto js-btn-next" type="button" title="Next" onClick={() => setStepNum(8)}>Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}
                    {stepNum === 8 && (
                    <div className="multisteps-form__panel p-4 rounded bg-white js-active" data-animation="scaleIn">
                      <h3 className="multisteps-form__title">Your Guranteed Crypto Growth</h3>
                      <div className="multisteps-form__content">
                        <div className="step-six-2">
                          <p>Review and sign the Agreement</p>
                        </div>
                        <div className="row">
                          <div className="button-row mt-4 col-12">
                            <button className="btn btn-primary ml-auto js-btn-next" type="button" title="Next" onClick={() => setStepNum(9)}>Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}
                    {stepNum === 9 && (
                    <div className="multisteps-form__panel p-4 rounded bg-white js-active" data-animation="scaleIn">
                      <h3 className="multisteps-form__title">Your Guranteed Crypto Growth</h3>
                      <div className="multisteps-form__content">
                        <div className="step-six-3">
                          <p>How would you like to cover the intial amount for your Crypto Asset?</p>
                          <div className="row text-center">
                            <div className="col-md ">
                              <a href="#" data-toggle="modal" data-target="#BtcPayment"><span>connect</span> <br /> coinbase <br /> commerce</a>
                            </div>
                            <div className="col-md">
                              <a href="#" data-toggle="modal" data-target="#WirePayment"><span>connect</span> <br /> Circle Payment <br /> (wire)</a>
                            </div>
                          </div>

                          <div className="row text-center">
                            <div className="col-md">
                              <a href="" data-toggle="modal" data-target="#AchPayment"><span>connect</span> <br /> Circle Payment <br /> (ACH)</a>
                            </div>
                            <div className="col-md">
                              <a href="#" data-toggle="modal" data-target="#StripePayment"><span>connect</span> <br /> Circle Payment <br /> (Debit/credit card)</a> 
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="button-row mt-4 col-12">
                            <button className="btn btn-primary ml-auto js-btn-next" type="button" title="Next" onClick={() => setStepNum(10)}>Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}
                    {stepNum === 10 && (
                    <div className="multisteps-form__panel p-4 rounded bg-white js-active" data-animation="scaleIn">
                      <h3 className="multisteps-form__title">Your Guranteed Crypto Growth</h3>
                      <div className="multisteps-form__content">
                        <div className="step-seven">
                          <p>Congralations On New Your Crypto Asset</p>
                        </div>
                        <div className="button-row  mt-4">
                          <button className="btn btn-primary ml-auto" type="button" title="Send">Next</button>
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
  )
};

export default Benificiaries;