import React, { useContext, useState } from "react";
import UserContext from "./userContext";

export default function Usercreate({ history }) {
  let userData = useContext(UserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Id, setId] = useState("");

  let userSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      Id,
    });
    userData.setUserList([
      ...userData.userList,
      {
        firstName,
        lastName,
        email,
        Id,
      },
    ]);
    history.push("/userlist");
  };

  return (
    <div className="container">
      <form onSubmit={(e) => userSubmit(e)}>
        <div className="row">
          <div className="col-lg-12">
            <h1>User Form</h1>
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
            <label htmlFor="username">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="username">First Name</label>
            <input
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-lg-6">
            <label htmlFor="username">Last Name</label>
            <input
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
