import React from "react";
import { Button } from "@chakra-ui/react";
import Axios from "axios";
import { API_URL } from "../helper";
import { useLocation } from "react-router-dom";

const Detail = (props) => {
  const { search } = useLocation();
  const [productDetail, setProductDetail] = React.useState({});

  const fetchProductData = () => {
    Axios.get(API_URL + `/products${search}`)
      .then((response) => {
        setProductDetail(response.data[0]);
      })
      .catch(() => {
        alert("Terjadi kesalahan di server!");
      });
  };

  React.useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      <div
        className="d-flex flex-row justify-content-center my-5"
        style={{ marginLeft: 200, marginRight: 200 }}
      >
        <img className="me-3" src={productDetail.images} alt="" />
        <div>
          <div className="fs-1 fw-bold">{productDetail.name}</div>
          <div>
            <span className="fs-4">by</span>
            <span className="fs-3 fw-bold text-muted">
              {" "}
              {productDetail.brand}
            </span>
          </div>
          <div>Description</div>
          <div>{productDetail.description}</div>
          <div className="fs-1 fw-bold text-muted">
            Rp. {productDetail.price}
          </div>
          <Button className="rounded-circle" colorScheme="blackAlpha">
            -
          </Button>
          <span className="mx-2">1</span>
          <Button className="rounded-circle" colorScheme="blackAlpha">
            +
          </Button>
          <Button className="ms-2" colorScheme="teal" variant="outline">
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
