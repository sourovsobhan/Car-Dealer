import React, { useEffect, useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = () => {};
  return (
    <div>
      <h1>THis is manage services</h1>
      {services.map((service) => (
        <div key={service._id}>
          <h3>{service.name}</h3>
          <button onClick={() => handleDelete}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
