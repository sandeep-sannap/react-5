import React, { useContext, useState } from "react";
import UserContext from "./userContext";
import { useHistory } from "react-router";

export default function Useredit(props) {
  const id = props.match.params.id;
  const history = useHistory();

  let userData = useContext(UserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [Id, setId] = useState("");
  let userSubmit = (e) => {
    e.preventDefault();

    const newData = userData.userList.map((user) => {
      if (user.Id === id) {
        return {
          ...user,
          firstName,
          lastName,
          email,
        };
      }
      return user;
    });

    userData.setUserList(newData);

    history.push("/userlist");
  };

  return (
    <div className="container">
      <form onSubmit={(e) => userSubmit(e)}>
        <div className="row">
          <div className="col-lg-12">
            <h1>User Edit Form</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <label htmlFor="username">Id</label>
            <input
              disabled="true"
              className="form-control"
              value={id}
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
