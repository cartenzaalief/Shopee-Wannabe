import React from "react";
import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Axios from "axios";
import { API_URL } from "../helper";
import { loginAction } from "../actions/userAction";
import { useDispatch } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [inputEmail, setInputEmail] = React.useState(""); // inputEmail = "" --> "carten@mail.com"
  const [inputPassword, setInputPassword] = React.useState(""); // inputPassword = "" --> 123456

  const buttonLogin = () => {
    // alert(`${inputEmail} dan ${inputPassword}`)
    Axios.get(API_URL + `/users?email=${inputEmail}&password=${inputPassword}`) // Axios.get(http://localhost:2000/users?email=carten@mail.com$password=123456)
      .then((response) => {
        console.log(response.data);
        delete response.data[0].password
        dispatch(loginAction(response.data[0]))
        localStorage.setItem("shopee_login", JSON.stringify(response.data[0]));
        navigate("/", { replace: true });
      })
      .catch(() => {
        alert("Terjadi kesalahan di server!");
      });
  };

  return (
    <div
      className="d-flex flex-row justify-content-center align-items-center"
      style={{ height: "85vh" }}
    >
      <div className="bg-light shadow p-5" style={{ width: 500 }}>
        <Text fontSize="3xl" as="b">
          Sign in for shopping
        </Text>
        <div>
          Not have account ? <Link to="/register">Sign up</Link>
        </div>
        <div className="mt-4 text-muted fw-bold">Email</div>
        <Input
          placeholder="Email"
          onChange={(element) => setInputEmail(element.target.value)}
        />
        <div className="mt-2 text-muted fw-bold">Password</div>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={(element) => setInputPassword(element.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <AiFillEyeInvisible /> : <AiFillEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <div className="text-end mt-5">Forgot password ? Click here</div>
        <Button
          className="mt-2"
          style={{ width: "100%" }}
          colorScheme="orange"
          onClick={buttonLogin}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
