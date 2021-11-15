import React from "react";
import feautures1 from "../../../image/vehicle-1.png";
import feautures2 from "../../../image/vehicle-2.png";
import feautures3 from "../../../image/vehicle-3.png";
import feautures4 from "../../../image/vehicle-4.png";
import feautures5 from "../../../image/vehicle-5.png";
import feautures6 from "../../../image/vehicle-6.png";

const Feature = () => {
  return (
    <div>
      <h1>Feauture Cars</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-body">
                <img src={feautures2} alt="" className="img-fluid" />
                <h2>New Model</h2>
                <b>$55000</b> <br />
                <button type="button" class="btn btn-danger mt-2">
                  Chech out
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-body">
                <img src={feautures3} alt="" className="img-fluid" />
                <h2>New Model</h2>
                <b>$55000</b> <br />
                <button type="button" class="btn btn-danger mt-2">
                  Chech out
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-body">
                <img src={feautures4} alt="" className="img-fluid" />
                <h2>New Model</h2>
                <b>$55000</b> <br />
                <button type="button" class="btn btn-danger mt-2">
                  Chech out
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-body">
                <img src={feautures5} alt="" className="img-fluid" />
                <h2>New Model</h2>
                <b>$55000</b> <br />
                <button type="button" class="btn btn-danger mt-2">
                  Chech out
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-body">
                <img src={feautures6} alt="" className="img-fluid" />
                <h2>New Model</h2>
                <b>$55000</b> <br />
                <button type="button" class="btn btn-danger mt-2">
                  Chech out
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <div class="card-body">
                <img src={feautures1} alt="" className="img-fluid" />
                <h2>New Model</h2>
                <b>$55000</b> <br />
                <button type="button" class="btn btn-danger mt-2">
                  Chech out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
