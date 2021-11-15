import axios from "axios";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const makeAdmnin = () => {
    const data = { email };
    axios
      .put("http://localhost:5000/users", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input
        type="email"
        placeholder="enter eamil"
        className="form-control"
        id=""
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={makeAdmnin} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default MakeAdmin;
