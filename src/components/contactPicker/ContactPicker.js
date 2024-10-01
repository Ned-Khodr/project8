import React from "react";

export const ContactPicker = ( { contacts, onChange, name, value } ) => {
  // console.log(contacts)

  const renderOptions = () => {
    if(contacts) {
      return contacts.map((contact) => (
        <option key={contact.name} value={contact.name}>{contact.name}</option>
      ))
    }
  }
  return (
    <select onChange={onChange} name={name} value={value}>
      <option value="">No Contact Selected</option>
      { renderOptions() }


    </select>
  );
};
