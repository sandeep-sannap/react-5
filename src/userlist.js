import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";

export default function UserList() {
  let userData = useContext(UserContext);

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
      <Link to="/usercreate">User Create</Link>

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
                  <th>Email</th>
                  <th> First Name</th>
                  <th> Last Name</th>

                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {userData.userList.length > 0 ? (
                  userData.userList.map((user) => {
                    return (
                      <tr>
                        <td>{user.Id}</td>
                        <td>{user.email}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>

                        <td>
                          <Link to={`/useredit/${user.Id}`}>Edit User</Link>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <h4>
                    No usera <Link to="/usercreate">Add User</Link>
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
