import React from "react";
import { Link } from "react-router-dom";
import user from "../images/avatar.png";

const DeleteContact = (props) => {
  const { id, name, email } = props;
  console.log("deelete", props);

  return (
    <div className="main" style={{ marginTop: "50px" }}>
      <h2>Are you sure want to delete the contact?</h2>
      <div className="temp">asd{props.id}</div>
      <Link to={"/"}>
        <div>
          <button className="ui button red">NO</button>
          <button
            className="ui button blue"
            onClick={() => props.clickHandler(id)}
          >
            YES
          </button>
        </div>
      </Link>
    </div>
  );
};

export default DeleteContact;
