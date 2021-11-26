import React, { useEffect, useState } from "react";
const ManageAllProduct = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch("https://immense-sands-24458.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const sure = window.confirm("Are you sure, you want to delete");
    if (sure) {
      fetch(`https://immense-sands-24458.herokuapp.com/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("delete successfully");
          }
        });
    }
  };

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
              <td>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllProduct;
