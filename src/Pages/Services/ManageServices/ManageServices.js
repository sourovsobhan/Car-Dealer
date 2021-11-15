import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    axios.delete(url).then((data) => {
      if (data.data.deletedCount > 0) {
        alert("deleted successfully");
        const remainingUser = services.filter((service) => service._id != id);
        setServices(remainingUser);
      }
    });
  };
  return (
    <div>
      <h1>THis is manage services</h1>
      {services.map((service) => (
        <div key={service._id}>
          <h3>{service.name}</h3>
          <button onClick={() => handleDelete(service._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
