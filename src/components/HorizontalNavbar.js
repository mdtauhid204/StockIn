import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { signOut } from "../store/actions/authactions";

const HorizontalNavar = ({ setIndex, setCompany }) => {
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

  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style={{ marginBottom: "200px" }}
    >
      <a class="navbar-brand" href="#">
        <img src="logo.png" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
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
    </nav>
  );
};

export default HorizontalNavar;
