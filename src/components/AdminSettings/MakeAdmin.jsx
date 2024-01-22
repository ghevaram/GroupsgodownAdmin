import React from "react";
import "./AdminSettings.css";
function MakeAdmin() {
  return (
    <div className="d-flex justify-content-center">
      <div className="m-4 col-10 border border-3 p-4 bg-light rounded">
        <h5 className="text-center">Make Admin</h5>
        <div className="input_divs">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="User ID"
            />
            <label for="floatingInput">User ID</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="First Name"
            />
            <label for="floatingInput">First Name</label>
          </div>
        </div>
        <div className="input_divs">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Middle Name"
            />
            <label for="floatingInput">Middle Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              placeholder="Last Name"
            />
            <label for="floatingInput">Last Name</label>
          </div>
        </div>
        <div className="input_divs">
          <div class="form-floating mb-3">
            <input
              type="number"
              class="form-control"
              id="floatingInput"
              placeholder="Phone Number"
            />
            <label for="floatingInput">Phone Number</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="Email ID"
            />
            <label for="floatingInput">Email ID</label>
          </div>
        </div>
        <div className="input_divs">
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingInput"
              placeholder="Password"
            />
            <label for="floatingInput">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingInput"
              placeholder="Confirm Password"
            />
            <label for="floatingInput">Confirm Password</label>
          </div>
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <button className="btn btn-success">Add</button>
          <button className="btn btn-primary">Search</button>
          <button className="btn btn-danger">Update</button>
        </div>
      </div>
    </div>
  );
}

export default MakeAdmin;
