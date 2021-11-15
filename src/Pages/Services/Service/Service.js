import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, img, _id, description, price } = props.service;
  console.log(props.services);
  return (
    <div>
      <div className="col">
        <div class="card">
          <div class="card-body">
            <img src={img} alt="" width="100%" height="200px" />
            <h1> Name:{name} </h1>
            <h6>
              Price:
              {price}
            </h6>
            {description.slice(0, 150)} <br />
            <Link to={`/details/${_id}`}>
              <button type="button" class="btn btn-warning">
                Purchase
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
