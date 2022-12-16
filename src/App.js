import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Axios from "axios";
import { API_URL } from "./helper";
import { useDispatch } from "react-redux";
import { loginAction } from "./actions/userAction";

function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(true);

  const keepLogin = () => {
    let getLocalStorage = JSON.parse(localStorage.getItem("shopee_login"));
    console.log(getLocalStorage);
    if (getLocalStorage) {
      Axios.get(API_URL + `/users?id=${getLocalStorage.id}`)
        .then((response) => {
          delete response.data[0].password;
          dispatch(loginAction(response.data[0]));
          setLoading(false);
          localStorage.setItem(
            "shopee_login",
            JSON.stringify(response.data[0])
          );
        })
        .catch(() => {
          alert("Terjadi kesalahan di server!");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <div>
      <Navbar loading={loading} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
