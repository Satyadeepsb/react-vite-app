import React from "react";
import { useForm } from "react-hook-form";
import { postAPI } from "../helper/axio-helper";

export const EmployeeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    postAPI("/employees", data);
  };

  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="offset-4 col-4">
                <label htmlFor="employeeName">Employee Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("name")}
                />
              </div>
            </div>
            <div className="row">
              <div className="offset-4 col-4">
                <label htmlFor="employeeRole">Employee Role</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("role")}
                />
              </div>
            </div>
            <div className="mt-5">
              <label></label>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
