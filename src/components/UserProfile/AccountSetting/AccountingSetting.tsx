import React, { useState } from "react";
import "./AccountingSetting.scss";

const AccountingSetting = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);

  const handleToggleEdit = () => {
    setEditing(!editing);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    handleSaveClick();
  };
  return (
    <div className="accountsetting">
      <h1> Your Profile</h1>
      <div className="account-setting-form">
        <form action="">
          <label htmlFor="">
            <h3>Name</h3>
            <div className="inputAccountDetails">
              <input type="text" value={name} onChange={handleNameChange} />
              <button>Edit</button>
            </div>
          </label>
          <label htmlFor="">
            <div className="inputAccountDetails">
              <h3> Company Email</h3>
              <input type="text" />
              <button>Edit </button>
            </div>
          </label>
          <label htmlFor="">
            <div className="inputAccountDetails">
              <h3>Password</h3>
              <input type="password" />
              <button>Edit</button>
            </div>
          </label>
        </form>
      </div>
    </div>
  );
};

export default AccountingSetting;
