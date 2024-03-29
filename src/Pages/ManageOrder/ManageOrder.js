import React, { useEffect, useState } from "react";
const ManageOrder = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch("https://immense-sands-24458.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
          </tr>
        </thead>

        <tbody>
          {services.map((service, index) => (
            <tr>
              <th scope="row">1</th>
              <td>{service.name}</td>
              <td>{service.price}</td>
              <td>{service.description}</td>
              <td>{service.img}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
