import React, { useContext, useState } from "react";
import ProductContext from "./productContext";
import { useHistory } from "react-router";

export default function ProductEdit(props) {
  let id = props.match.params.id;

  const history = useHistory();
  let { products, setProducts } = useContext(ProductContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [Id, setId] = useState("");

  let userSubmit = (e) => {
    e.preventDefault();

    const newProduct = products.map((product) => {
      if (product.Id === id) {
        return {
          ...product,
          name,
          price,
        };
      }
      return product;
    });

    setProducts(newProduct);

    history.push("/productlist");
  };

  return (
    <div className="container">
      <form onSubmit={(e) => userSubmit(e)}>
        <div className="row">
          <div className="col-lg-12">
            <h1>Product Edit Form</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="username">Id</label>
            <input
              disabled
              className="form-control"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="username">name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="username">Price</label>
            <input
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary mt-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
