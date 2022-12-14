import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Navbar = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link to="/">Shopee Carten</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
        <ButtonGroup style={{ marginRight: 30 }}>
          <Link to="/login">
            <Button style={{ width: 100 }} colorScheme="orange" variant="solid">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button style={{ width: 100 }} colorScheme="orange" variant="outline">
              Register
            </Button>
          </Link>
        </ButtonGroup>
      </nav>
    </div>
  );
};

export default Navbar;
