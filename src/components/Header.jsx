import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../Context/Usercontext";

const Header = () => {
  const { cuser , auth} = useContext(Authcontext);

  const signoutbtn=()=>{
    signOut(auth)
    .then(()=>{})
    .catch(error => console.error(error))

  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Item 1</Link>
              </li>

              <li>
                <Link to="/">Item 3</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            daisyUI
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : undefined
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : undefined
                  }
                  to="/book"
                >
                  Booking
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : undefined
                  }
                  to="/login"
                >
                  Log In
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-orange-400" : undefined
                  }
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </li>
              {cuser?.uid ? (
                <li>
                  <NavLink
                    className={`
                    bg-orange-900 text-yellow-200
                     ${({ isActive }) =>
                     isActive ? "text-orange-400" : undefined}
                    `
                    }
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-orange-400" : undefined
                    }
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                </li>
              )}
              <li>
                <Link onClick={signoutbtn} className="btn btn-ghost normal-case text-xl">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
