import React from "react";
import RegisterImage from "../assets/images/forms.png";
import { Link } from "react-router-dom";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Axios from "axios";
import { API_URL } from "../helper";

const Register = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [username, setUsername] = React.useState(""); // username = "" --> "selena01" --> setUsername
  const [email, setEmail] = React.useState(""); // email = "" --> selena01@mail.com
  const [password, setPassword] = React.useState(""); // password = "" --> 123456

  const buttonRegister = () => {
    Axios.post(API_URL + `/users`, {
      username,
      email,
      password,
      role: "user",
    })
      .then(() => {
        alert("Register Success✅");
      })
      .catch(() => {
        alert("Terjadi kesalahan di server");
      });
  };

  return (
    <div
      className="d-flex flex-row justify-content-center align-items-center"
      style={{ height: 700 }}
    >
      <div className="d-flex flex-row shadow">
        <img style={{ width: 600 }} src={RegisterImage} alt="" />
        <div className="shadow p-5" style={{ width: 400 }}>
          <div className="fw-bold">START FOR FREE</div>
          <div className="fs-3 fw-bold">Sign up to SHOPEE</div>
          <div>
            Already a member ?{" "}
            <Link className="fw-bold" to="/login">
              Sign in
            </Link>
          </div>
          <div className="mt-4 text-muted fw-bold">Username</div>
          <Input
            placeholder="Example01"
            onChange={(element) => setUsername(element.target.value)} // element.target.value = "selena01"
          />
          <div className="mt-2 text-muted fw-bold">Email</div>
          <Input
            placeholder="name@example.com"
            onChange={(element) => setEmail(element.target.value)} // element.target.value = "selena01@mail.com"
          />
          <div className="mt-2 text-muted fw-bold">Password</div>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="6+ character"
              onChange={(element) => setPassword(element.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? <AiFillEyeInvisible /> : <AiFillEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            className="mt-5"
            colorScheme="orange"
            style={{ width: "100%" }}
            onClick={buttonRegister}
          >
            Create an account
          </Button>
          <div className="text-center text-muted">or</div>
          <Button colorScheme="gray" style={{ width: "100%" }}>
            Sign up with Google <FcGoogle style={{ marginLeft: 5 }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
