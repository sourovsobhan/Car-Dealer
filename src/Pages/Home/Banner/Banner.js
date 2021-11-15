import React from "react";
import banner1 from "../../../image/vehicle-1.png";
import banner2 from "../../../image/vehicle-2.png";
import banner3 from "../../../image/vehicle-3.png";
const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100 img-height" alt="..." />
          </div>
          <div className="carousel-item">
            <img
              src={banner2}
              className="d-block w-100 img-height "
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100 img-height" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
