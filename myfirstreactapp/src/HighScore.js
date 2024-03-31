import React, { useState } from "react";
// import highScoresData from './scoreData';

function HighScore() {
  const [userInput, setUserInput] = useState({
    firstName:'',
    lastName:'',
    age:'',
    address:'',
    HCN:'',
    id:''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  }
  const styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: 'space-around',
    alignItems: 'stretch'
  };
  return (
    <>
      <form style={styles}>
        <label htmlFor="FirstName">FirstName</label>
        <input onChange={handleChange} id="FirstName" name="firstName" />
        <br />
        <label htmlFor="LastName">LastName</label>
        <input onChange={handleChange} id="LastName" name="lastName" />
        <br />
        <label htmlFor="Age">Age</label>
        <input onChange={handleChange} id="Age" name="age" />
        <br />
        <label htmlFor="Address">Address</label>
        <input onChange={handleChange} id="Address" name="address" />
        <br />
        <label htmlFor="HomeroomClassNumber">Homeroom class number</label>
        <input onChange={handleChange} id="HomeroomClassNumber" name="HCN" />
        <br />
        <label htmlFor="ID">Student ID</label>
        <input onChange={handleChange} id="ID" name="id" />
        <br />
      </form>
      <p>firstName: {userInput.firstName}</p>
      <p>lastName: {userInput.lastName}</p>
      <p>age: {userInput.age}</p>
      <p>address: {userInput.address}</p>
      <p>Home Class Number: {userInput.HCN}</p>
      <p>ID: {userInput.id}</p>
    </>
  );
}

export default HighScore;
