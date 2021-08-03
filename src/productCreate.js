import React, { useContext, useState } from "react";
import ProductContext from "./productContext";

export default function ProductCreate({ history }) {
  let { products, setProducts } = useContext(ProductContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [Id, setId] = useState("");

  let userSubmit = (e) => {
    e.preventDefault();

    setProducts([
      ...products,
      {
        name,
        price,
        Id,
      },
    ]);
    history.push("/productlist");
  };

  return (
    <div className="container">
      <form onSubmit={(e) => userSubmit(e)}>
        <div className="row">
          <div className="col-lg-12">
            <h1>Product Form</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="username">Id</label>
            <input
              className="form-control"
              value={Id}
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
