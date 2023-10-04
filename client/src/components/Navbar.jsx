import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { HashLink } from "react-router-hash-link";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducers/rootSlice";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import jwt_decode from "jwt-decode";
import logo from "./a1.png";

const Navbar = () => {
  const [iconActive, setIconActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [abhaopen, setabhaOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    localStorage.getItem("token")
      ? jwt_decode(localStorage.getItem("token"))
      : ""
  );

  const logoutFunc = () => {
    dispatch(setUserInfo({}));
    localStorage.removeItem("token");
    return navigate("/login");
  };

  return (
    <header>
      <nav className={iconActive ? "nav-active" : ""}>
        <h2 className="nav-logo">
          <NavLink to={"/"}>
            <img src={logo} className="w-48" alt="logo" />
          </NavLink>
        </h2>
        <ul className="nav-links flex items-center">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <div onMouseLeave={() => setabhaOpen(false)} className="relative ">
            <button
              onMouseOver={() => setabhaOpen(true)}
              className=" flex items-center  my-2 "
            >
              ABDM
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <ul
              className={`absolute  w-32 bg-gray-100 z-1 rounded-md shadow-xl ${
                abhaopen ? "block" : "hidden"
              }`}
            >
              <li className="flex w-auto items-center px-3  text-sm hover:bg-gray-200 my-1 ">
                <NavLink to={"/Abha"}>ABHA</NavLink>
              </li>
              <li className="flex w-auto items-center px-3  text-sm hover:bg-gray-200 my-1">
                <NavLink to={"/AboutABHA"}>About Abha</NavLink>
              </li>
              <li className="flex  items-center px-3 text-sm hover:bg-gray-200 rounded-b-lg my-1">
                <NavLink to={"/AboutPMJAY"}>About PMJAY</NavLink>
              </li>
            </ul>
          </div>
          <li>
            <NavLink to={"/doctors"}>Doctors</NavLink>
          </li>
          {token && user.isAdmin && (
            <li>
              <NavLink to={"/dashboard/users"}>Dashboard</NavLink>
            </li>
          )}
          {token && !user.isAdmin && (
            <>
                <li>
                    <NavLink to={"/applyfordoctor"}>Apply for doctor</NavLink>
                  </li>
                
              <li>
                <HashLink to={"/contact"}>Contact Us</HashLink>
              </li>
            </>
          )}

          {!token ? (
            <>
              <li>
                <NavLink
                  className="py-2 px-2 mr-1 shadow-sm bg-gray-100 hover:bg-gray-200 text-sm text-gray-900 font-bold rounded-lg transition duration-200"
                  to={"/login"}
                >
                  Login/Register
                </NavLink>
              </li>
            </>
          ) : (
            <div onMouseLeave={() => setOpen(false)} className="relative ">
              <button
                onMouseOver={() => setOpen(true)}
                className=" flex items-center font-medium "
              >
                <img
                  src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                  className="rounded-full w-8"
                  alt="profile pic"
                />
              </button>
              <ul
                className={`absolute  w-fit bg-gray-200 z-1 rounded-md shadow-xl right-0.3 ${
                  open ? "block" : "hidden"
                }`}
              >
                <li className="flex w-auto items-center px-3  text-sm hover:bg-gray-100 my-1 ">
                  <NavLink to={"/profile"}>Profile</NavLink>
                </li>
                <li className="flex w-auto items-center px-3  text-sm hover:bg-gray-100 my-1">
                  <NavLink to={"/appointments"}>Appointments</NavLink>
                </li>
                <li className="flex  items-center px-3 text-sm hover:bg-gray-100 rounded-b-lg my-1">
                  <span onClick={logoutFunc}>Logout</span>
                </li>
              </ul>
            </div>
          )}
          <li>
            <NavLink to={"/notifications"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                id="notifications"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path>
              </svg>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="menu-icons">
        {!iconActive && (
          <FiMenu
            className="menu-open"
            onClick={() => {
              setIconActive(true);
            }}
          />
        )}
        {iconActive && (
          <RxCross1
            className="menu-close"
            onClick={() => {
              setIconActive(false);
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
