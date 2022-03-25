import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import api from "./api";
import Navbar from "./Navbar"

function AddStudents() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.get('/response')
      .then(resp => setPosts(resp))
  }, []);

  

  
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-2">
            <table class="table table-bordered border-dark" id="sideTable" >
              <tr><td> &nbsp; Students</td></tr>
              <tr><td><a href="">- View Students</a></td></tr>
              <tr><td><Link to="/addStudents">- Add Students</Link></td></tr>
              <tr><td> &nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
              <tr><td>&nbsp;</td></tr>
            </table>
          </div>
          <div class="addTable col-10">
            <h3>Add Student</h3>
            <></>
            <div class="mb-3 row">
              <label for="inputName" class="col-sm-2 col-form-label">Full Name</label>
              <div class="col-sm-3">
                <input type="text" class="form-control" id="inputName" />
              </div>
            </div>

            <div class="mb-3 row">
              <div class="">
                <label class="col-sm-2 col-form-label">Date of Birth</label>
                <input type="date" class="me-3 col-sm-3"></input>
              </div>
            </div>

            <div class="mb-3 row">
              <div class="dropdown">
                <label for="inputSchool" class="col-sm-2 col-form-label">School</label>
                <select class="me-3 col-sm-3" name="school" id="school">
                  <option value="">Select</option>
                  <option value="BIST">BIST</option>
                  <option value="XIHE">Xaviors Institute of higher education</option>
                </select>
              </div>
            </div>
            <div class="mb-3 row">
              <div class="dropdown">
                <label for="inputClass" class="col-sm-2 col-form-label">Class</label>
                <select class="me-3 col-sm-3" name="Class" id="Class">
                  <option value="">Select</option>
                  <option value="5">5</option>
                  <option value="8">8</option>
                </select>
              </div>
            </div>
            <div class="mb-3 row">
              <div class="dropdown">
                <label for="inputPassword" class="col-sm-2 col-form-label">Position</label>
                <select class="me-3 col-sm-3" name="student" id="student">
                  <option value="">Select</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-10">
                <label class="col-sm-2 col-form-label">Status</label>
                <input class="col-sm-1" type="radio" /> Active
                <input class="col-sm-1" type="radio" /> Inactive
              </div>
            </div>
            <button class="col-sm-2" id="saveButton">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudents