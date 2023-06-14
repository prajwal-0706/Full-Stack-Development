import React, { useState } from 'react';
import axios from 'axios';

const Forms = () => {
  const [Details, setDetails] = useState({});

  const changeHandler = (e) => {
    setDetails({ ...Details, [e.target.name]: e.target.value });
    console.log(Details);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(Details);
    const url = 'http://127.0.0.1:5000';
    axios
      .post(`${url}/user/login`, Details)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <div className="forms">
      <form className="inputs" onSubmit={submitHandler}>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          className="inputs"
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="inputs"
          onChange={changeHandler}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
