import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Details = () => {
  const { serviceId } = useParams();

  const [service, setService] = useState({});

  const onSubmit = (data) => {
    data.email = user?.email;
    data.status = "pending";
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("welcome Your ordered successfull");
        }
      });
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    fetch(`https://immense-sands-24458.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  const { name, img, price, description } = service;
  const { user } = useAuth();
  return (
    <div className="pt-5 my-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card">
              <img src={img} class="card-img-top" width="300px" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Name:{name}</h5>
                <h1>Details of:{service.name}</h1>
                <b>Price:{price}</b>

                <p class="card-text">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("email")}
            placeholder="Email"
            defaultValue={user.email}
            className="p-2 m-2 w-100 input-field"
          />
          <input
            {...register("name")}
            placeholder="Name"
            defaultValue={service.name}
            className="p-2 m-2 w-100 input-field"
          />

          <input
            {...register("description")}
            defaultValue={service.description}
            placeholder="Description"
            className="p-2 m-2 w-100 input-field"
          />

          <input
            {...register("image", { required: true })}
            placeholder="Image Link"
            defaultValue={service.img}
            className="p-2 m-2 w-100 input-field"
          />

          <input
            {...register("price", { required: true })}
            placeholder="Price"
            defaultValue={service.price}
            type="price"
            className="p-2 m-2 w-100 input-field"
          />
          <br />

          {errors.exampleRequired && <span>This field is required</span>}

          <input
            type="submit"
            value="Order now"
            className="btn btn-info w-50"
          />
        </form>
      </div>
    </div>
  );
};

export default Details;
