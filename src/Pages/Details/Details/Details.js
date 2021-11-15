import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Details = () => {
  const { serviceId } = useParams();

  const [service, setService] = useState({});
  const [phone, setPhone] = useState("");
  const [adress, setAddress] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
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
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address:
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                value={user.email}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name:
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                value={user.displayName}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone:
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Address
              </label>
              <textarea
                onChange={(e) => setAddress(e.target.value)}
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
              <button type="button" class="btn btn-warning">
                place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
