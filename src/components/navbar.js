import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { signOut } from "../store/actions/authactions";

const Navbar = ({ setIndex, setCompany }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("logout");
    dispatch(signOut());
    navigate("/register");

    // console.log(user);
  };
  const handleBSE = () => {
    setIndex("BSE");
  };
  const handleNSE = () => {
    setIndex("NSE");
  };

  const styleInsight = {
    "font-size": "2rem",
    "font-family": "IBM Plex Sans Condensed', sans-serif",
  };
  const styleStock = {
    "font-size": "2.5rem",
    "font-family": "Platino Linotype",
    "font-weight": "Bold",
    "line-height": ".5",
    "margin-top": "15px",
  };
  return (
    <div className="container-fluid navcont">
      <div className="row logo">
        <div className="col-5 image">
          <img src="logo.png" />
        </div>
        <div id="stock" className="col-7 " style={{ "margin-left": "-5px" }}>
          <h3 style={styleStock}>STOCK </h3>
          <h3 style={styleInsight}> INSIGHT</h3>
        </div>
      </div>
      <div className="row mt-3 navrow">
        <h3 className="heading">COMPANY</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link text-muted"
              href="#"
              onClick={() => setCompany("Ashokley")}
            >
              ASHOKLEY
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-muted"
              href="#"
              onClick={() => setCompany("Cipla")}
            >
              CIPLA
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-muted"
              href="#"
              onClick={() => setCompany("Eichermot")}
            >
              EICHERMOT
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-muted "
              href="#"
              onClick={() => setCompany("Reliance")}
            >
              RELIANCE
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-muted "
              href="#"
              onClick={() => setCompany("TataSteel")}
            >
              TATASTEEL
            </a>
          </li>
        </ul>
      </div>
      <div className="row mt-3">
        <h3 className="heading">INDEX</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-muted" href="#" onClick={handleBSE}>
              BSE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-muted" onClick={handleNSE} href="#">
              NSE
            </a>
          </li>
        </ul>
      </div>
      <div className="row logbtn ">
        <button onClick={handlesubmit} className="logoutbtn text-white">
          LOGOUT <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
