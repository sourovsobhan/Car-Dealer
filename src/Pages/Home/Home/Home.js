import React, { useEffect, useState } from "react";
import About from "../../About/About";
import AddService from "../../AddService/AddService";
import DashBoard from "../../DashBoard/DashBoard";
import Service from "../../Services/Service/Service";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Contact from "./../../Contact/Contact";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Feature></Feature>

      <div className="container">
        <h1 className="mt-5">Services</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {services.slice(0, 6).map((service, index) => (
            <Service key={index} service={service}></Service>
          ))}
        </div>
      </div>
      <AddService></AddService>
      <Contact></Contact>
    </div>
  );
};

export default Home;
