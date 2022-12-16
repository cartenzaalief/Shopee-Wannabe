import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, Spinner, Menu, MenuItem, MenuDivider, Avatar, AvatarBadge, MenuList, MenuButton, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AiOutlineLogout } from "react-icons/ai"
import { logoutAction } from "../actions/userAction";
import { useDispatch } from "react-redux";

const Navbar = (props) => {
  const dispatch = useDispatch()

  const { username } = useSelector((state) => {
    return {
      username: state.userReducer.username,
    };
  });

  return (
    <div>
      <nav className="navbar navbar-expand-lg mx-5">
        <div className="container-fluid">
          <Link to="/"><Text as="b" color="darkorange">Shopee Carten</Text></Link>
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
        {props.loading ? (
          <Spinner />
        ) : username ? (
          <Menu>
            <MenuButton type="button">
              <Avatar name={username} size="md">
                <AvatarBadge boxSize="1em" bg="green.500" />
              </Avatar>
            </MenuButton>
            <MenuList textColor="black">
              <div>
                <MenuItem>Cart </MenuItem>
                <MenuItem>Transactions</MenuItem>
                <MenuItem>Profile</MenuItem>
              </div>
              <MenuDivider />
              <MenuItem onClick={() => dispatch(logoutAction())}>
                Log out
                <AiOutlineLogout className="ms-2" />
              </MenuItem>
            </MenuList>
          </Menu>
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
