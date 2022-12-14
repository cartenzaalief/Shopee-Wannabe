import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const { username } = useSelector((state) => {
    return {
      username: state.userReducer.username,
    };
  });

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/">Shopee Carten</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {username ? (
          <span>{username}</span>
        ) : (
          <ButtonGroup style={{ marginRight: 30 }}>
            <Link to="/login">
              <Button
                style={{ width: 100 }}
                colorScheme="orange"
                variant="solid"
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button
                style={{ width: 100 }}
                colorScheme="orange"
                variant="outline"
              >
                Register
              </Button>
            </Link>
          </ButtonGroup>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
