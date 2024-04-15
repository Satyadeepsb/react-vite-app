import React, { useState, useEffect } from "react";
import { deleteAPI, getAPI } from "../helper/axio-helper";

export const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  async function getEmployees() {
    const response = await getAPI("/employees");
    setEmployees(response.data);
  }

  useEffect(() => {
    getEmployees();
  }, []);

  const handleDelete = (id: any) => {
    console.log(`ID ${id}`);
    deleteAPI(`/employees/${id}`)
      .then(() => {
        getEmployees();
      })
      .catch(() => {
        console.log("Error");
      });
  };

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee: any, i: number) => (
              <tr key={employee.id}>
                <th scope="row">{employee.id}</th>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Record Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
