import Button from "@restart/ui/esm/Button";
import { Modal } from "bootstrap";
import React from "react";
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault(); //not to refresh
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
    } else {
      this.props.addContactHandler(this.state);
      this.setState({ name: "", email: "" });
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <div className="ui main" style={{ marginTop: "50px" }}>
        <h2 className="contact-list-header">Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
