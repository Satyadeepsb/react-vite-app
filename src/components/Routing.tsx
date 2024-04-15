import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Counter } from "./Counter";
import { EmployeeForm } from "./EmployeeForm";
import { EmployeeTable } from "./EmployeeTable";
import PokeComponent from "./PokeComponent";
import Rerender from "./Rerender";
import { UseCallback } from "./UseCallback";
import { UseContext } from "./UseContext";
import UseEffect from "./UseEffect";
import { UseMemo } from "./UseMemo";
import { UseReducer } from "./UseReducer";

export default function Routing() {
  return (
    <BrowserRouter>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React Nav
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/employee-form">
                  Employee Form
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/employee">
                  Employees
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/useeffect">
                  Use Effect
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/usecontext">
                  Use Context
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/usereducer">
                  Use Reducer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/usememo">
                  Use Memo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/usecallback">
                  Use Callback
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <Routes>
        <Route path="/" element={<PokeComponent />} />
        <Route path="/re-render" element={<Rerender />} />
        {/* <Route path="/employee-form" element={<EmployeeForm />} />
        <Route path="/employee" element={<EmployeeTable />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/usecontext" element={<UseContext />} />
        <Route path="/usereducer" element={<UseReducer />} />
        <Route path="/usememo" element={<UseMemo />} />
        <Route path="/usecallback" element={<UseCallback />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
