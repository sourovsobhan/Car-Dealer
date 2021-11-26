import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";
const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://immense-sands-24458.herokuapp.com/services", data)
      .then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          alert("successfully addeded");
          reset();
        }
        console.log(res);
      });

    console.log(data);
  };
  return (
    <div>
      <div className="container">
        <h1>Add Services</h1>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 add-service">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name", { required: true, maxLength: 20 })}
                placeholder="name"
              />
              <input {...register("description")} placeholder="description" />
              <input type="number" {...register("price")} placeholder="price" />
              <input {...register("img")} placeholder="img" />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
