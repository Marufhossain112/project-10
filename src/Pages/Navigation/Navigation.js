import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="d-flex">
            <div className="me-2">
              <img
                src={user?.photoURL}
                className="rounded-circle w-[43px]"
                alt="alt.pro"
              />
            </div>
            <div>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </div>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink as={Link} to="/" active={true}>
            Home
          </NavLink>
          <NavLink as={Link} to="/login">
            Login
          </NavLink>
          <NavLink as={Link} to="/register">
            Register
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
