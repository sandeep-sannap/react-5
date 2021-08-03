import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "./productContext";

export default function Pruductlist() {
  let { products } = useContext(ProductContext);
  return (
    <>
      <h1 class="h3 mb-2 text-gray-800">Tables</h1>
      <p class="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables, please visit the{" "}
        <a target="_blank" href="https://datatables.net">
          official DataTables documentation
        </a>
        .
      </p>
      <Link to="/productcreate">Product Create</Link>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((product) => {
                    return (
                      <tr>
                        <td>{product.Id}</td>

                        <td>{product.name}</td>
                        <td>{product.price}</td>

                        <td>
                          <Link to={`/productedit/${product.Id}`}>
                            Edit Product
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <h4>
                    No products <Link to="/productcreate">Add Product</Link>
                  </h4>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
