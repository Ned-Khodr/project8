import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  contact,
  date,
  time,
  setTitle,
  setContact,
  setDate,
  setTime,
  handleSubmit
}) => {

  // console.log(contacts)

  const handleNameChange = event => {
    setTitle(event.target.value)
  }
  const handleDateChange = event => {
    setDate(event.target.value)
  }
  const handleTimeChange = event => {
    setTime(event.target.value)
  }
  const handleContactChange = event => {
    setContact(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleNameChange}></input>
      <input type="date" value={date} onChange={handleDateChange} min={getTodayString()}></input>
      <input type="time" value={time} onChange={handleTimeChange}></input>
      <ContactPicker contacts={contacts} onChange={handleContactChange} name="contact" value={contact} />
      <input type="submit"></input>
    </form>
  );
};
