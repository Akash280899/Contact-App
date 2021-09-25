import React from "react";
import { Link } from "react-router-dom";
import user from "../images/img_avatar.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item" style={{ borderTop: "0px" }}>
      <div className="ui card">
        <div className="image">
          <img src={user} />
        </div>
        <Link
          to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
        >
          <div className="content" style={{ padding: "8px" }}>
            <div
              className="header"
              style={{ marginBottom: "8px", marginTop: "8px" }}
            >
              Name: {name}
            </div>
            <div>Email: {email}</div>
          </div>
        </Link>
        <div class="extra content">
          <div className="edit-delete-icon">
            <i
              className="trash alternate outline icon"
              style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
              onClick={() => props.clickHandler(id)}
            ></i>

            <Link to={{ pathname: "/edit", state: { contact: props.contact } }}>
              <i
                className="edit alternate outline icon"
                style={{ color: "blue", marginTop: "7px" }}
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
