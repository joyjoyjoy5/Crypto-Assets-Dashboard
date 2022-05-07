import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Cryptoassets from "./components/Cryptoassets";
import Benificiaries from "./components/Benificiaries";
import Reports from "./components/Reports";
import Account from "./components/Account";
import Support from "./components/Support";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  if (splitLocation[1] === "signin") {
    return (
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
    );
  }
  if (splitLocation[1] === "signup") {
    return (
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    );
  } 
  if (splitLocation[1] === "benificiaries") {
    return (
      <Routes>
        <Route path="/benificiaries" element={<Benificiaries />} />
      </Routes>
    );
  }
  else {
    return (
      <div className="App">
        <Header />
        <div className="sidebar-mini">
          <div className="container-scroller">
            <div className="container-fluid page-body-wrapper">
              <Navbar splitLocation={splitLocation[1]} />

              <Routes>
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/cryptoassets" element={<Cryptoassets />} />
                <Route path="/benificiaries" element={<Benificiaries />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/account" element={<Account />} />
                <Route path="/support" element={<Support />} />
                <Route path="/signin" element={<Signin />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
