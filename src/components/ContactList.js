import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import DeleteContact from "./DeleteContact";

const ContactList = (props) => {
  const inputEl = useRef("");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div className="main" style={{ marginTop: "50px" }}>
      <h2 className="contact-list-header">Contact List</h2>

      <div class="search-field">
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
        <div className="ui search" style={{ width: "88%" }}>
          <div className="ui icon input" style={{ width: "100%" }}>
            <input
              ref={inputEl}
              type="text"
              placeholder="Search Contacts"
              className="prompt"
              value={props.term}
              onChange={getSearchTerm}
            />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
      <div className="ui celled list contact-container">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts Available"}
      </div>
    </div>
  );
};

export default ContactList;
