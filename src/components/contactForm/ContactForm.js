import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = event => {
    setName(event.target.value)
  }
  const handlePhoneChange = event => {
    setPhone(event.target.value)
  }
  const handleEmailChange = event => {
    setEmail(event.target.value)
  }


// pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleNameChange}/>
      <input type="tel" value={phone} onChange={handlePhoneChange} pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"/> 
      <input type="email" value={email} onChange={handleEmailChange}/>
      <input type="submit"/>
    </form>
  );
};