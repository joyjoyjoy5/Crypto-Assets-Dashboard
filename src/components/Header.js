import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
                    <Link className="navbar-brand brand-logo me-5" to="/"><img src="assets/img/LOGO.png" className="me-2" alt="logo" /></Link>
                    <Link className="navbar-brand brand-logo-mini" to="/"><img src="assets/img/LOGO.png" alt="logo" /></Link>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                    <span className="icon-menu"></span>
                    </button>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="icon-menu"></span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Header;

