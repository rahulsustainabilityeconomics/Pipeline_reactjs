import React, { useState } from "react";
import "./ContactSupport.scss";

const ContactSupport = () => {
  const [selectOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");
  const handlesubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  const handleDropDownChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(e.target.value);
  };
  const handleMessageChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMessage(e.target.value);
  };
  return (
    <form className="contact" onSubmit={handlesubmit}>
      <h2>Contact Support</h2>
      <div className="contact-container">
        <h3>Reason for Contact</h3>

        <select
          value={selectOption}
          onChange={handleDropDownChange}
          className="dropdown"
        >
          <option value="option1">Dropdown Autofill</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
        </select>

        <h3>Message</h3>

        <textarea
          className="message-container"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your Message here:"
        ></textarea>

        <div className="submit-form">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default ContactSupport;