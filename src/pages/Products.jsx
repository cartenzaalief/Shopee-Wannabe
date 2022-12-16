import React from "react";
import { Text, Input, Select, Button, Stack } from "@chakra-ui/react";
import Axios from "axios";
import { API_URL } from "../helper";
import { getProductAction } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
  const [productData, setProductData] = React.useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { productList } = useSelector((state) => {
    return { productList: state.productReducer.products };
  });

  const getProductData = () => {
    Axios.get(API_URL + `/products`)
      .then((response) => {
        console.log(response.data);
        // setProductData(response.data);
        dispatch(getProductAction(response.data));
      })
      .catch(() => {
        alert("Terjadi kesalahan di server!");
      });
  };

  React.useEffect(() => {
    getProductData();
  }, []);

  const printProductData = () => {
    return productList.map((value) => {
      return (
        <div className="d-flex flex-column align-items-center">
          <img src={value.images} alt="" style={{ width: 200 }} />
          <div
            className="rounded bg-warning text-light d-flex flex-column align-items-center"
            style={{ width: 150, marginTop: -25 }}
            onClick={() => navigate(`/detail?id=${value.id}`)}
          >
            <div>{value.price}</div>
            <div>{value.name}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      style={{
        marginLeft: 100,
        marginRight: 100,
        marginTop: 50,
        marginBottom: 50,
      }}
    >
      <Text fontSize="4xl" as="b" className="text-muted">
        Our Arrival Products
      </Text>
      <Text>
        Choose product and{" "}
        <span className="fw-bold">transact more easily.</span>
      </Text>
      <div className="d-flex mt-3 gap-5">
        <div
          className="card px-2 border-warning"
          style={{ width: 300, height: 350 }}
        >
          <div className="card-body">
            <Text fontSize="2xl" as="b">
              Filter
            </Text>
            <Stack spacing={2} className="mt-3">
              <Input placeholder="Name" />
              <Select placeholder="Select Brand">
                <option value="ikea">IKEA</option>
                <option value="ace">ACE</option>
                <option value="mr.diy">Mr. DIY</option>
              </Select>
              <Select placeholder="Select Category">
                <option value="livingroom">Livingroom</option>
                <option value="bedroom">Bedroom</option>
                <option value="kitchen">Kitchen</option>
              </Select>
              <div className="d-flex gap-2">
                <Input placeholder="Minimum" />
                <Input placeholder="Maximum" />
              </div>
            </Stack>
            <div className="d-flex justify-content-center gap-5 mt-4">
              <Button colorScheme="green">Filter</Button>
              <Button colorScheme="red">Reset</Button>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex flex-wrap gap-1">{printProductData()}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
