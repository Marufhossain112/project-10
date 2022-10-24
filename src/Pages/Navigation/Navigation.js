import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import "./Navigation.css"

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar className="navbarz" fluid={true} rounded={true}>
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
                alt=""
              />
            </div>
            <div>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </div>
            {user?.uid ? (
              <Button onClick={handleSignOut} className="ms-2" color="light">
                Sign Out
              </Button>
            ) : (
              <>
                <Button className="ms-2" color="light">
                  <Link to="/login">Sign in</Link>
                </Button>
                <Button className="ms-2" color="light">
                  <Link to="/register">Register</Link>
                </Button>
              </>
            )}
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink as={Link} to="/" active={true}>
            Home
          </NavLink>
          <NavLink as={Link} to="/news" active={true}>
            News
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
