import React, { useEffect, useState } from "react";

import { useParams } from "react-router";

const Details = () => {
  const { serviceId } = useParams();

  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  const { name, img, price, description } = service;
  return (
    <div className="pt-5 my-5">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card">
              <img src={img} class="card-img-top" alt="..." />
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
    </div>
  );
};

export default Details;
