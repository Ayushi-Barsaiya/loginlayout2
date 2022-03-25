import { useEffect, useState } from "react";
import api from "./api"
import "../App.css";
import Navbar from "./Navbar";
import fileLogo from "./Logos/fileLogo.png";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Pagination from "./Pagination";
import {CSVLink} from "react-csv";
import AddStudents from "./AddStudents";

function DataTable() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.get('/response')
      .then(resp => setPosts(resp))
  }, []);

  const headers = [
    {label:"id", key:"id"},
    {label:"Name", key:"Name"},
    {label:"Age", key:"Age"},
    {label:"School", key:"School"},
    {label:"Class", key:"Class"},
    {label:"Division", key:"Division"},
    {label:"Status", key:"Status"}
  ]
  
  const csvReport={
    fileName:'Report.csv',
    headers: headers,
    data: posts.data?posts.data:"loading..",
  };

  return (
    <div class="">
     
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      {console.log(posts.data)}
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col-2">
            <table class="table table-bordered border-dark" id="sideTable" >
              <tr><td> &nbsp; Students</td></tr>
              <tr><td><a href="">- View Students</a></td></tr>
              <tr><td><Link to="/students/add">- Add Students</Link></td></tr>
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
          <div class="col-10">
            <div class="nav-bar">
              <form class="d-flex blurb">
                <input class="me-3" type="search" placeholder="Name" aria-label="Search" />
                <input class="me-3" type="search" placeholder="Age" aria-label="Search" />
                <select class="me-3" name="student" id="student">
                  <option value="School">School</option>
                </select>
                <select class="me-3" name="student" id="student">
                  <option value="Class">Class</option>
                </select>
                <select class="me-3" name="student" id="student">
                  <option value="Division">Division</option>
                </select>
              </form>
              <button class="search" type="submit">Search</button>
            </div>
            <div class="row">
              <div class="col-12">
                <table class="table-content">
                  <tbody>
                    <tr>
                      <th>ID^v</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>School</th>
                      <th>Class^v</th>
                      <th>Division</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                    {posts.data && (posts.data).length > 0 ?
                      posts.data.map(e =>
                        <tr>
                          <td>{e.id}</td>
                          <td>{e.Name}</td>
                          <td>{e.Age}</td>
                          <td>{e.School}</td>
                          <td>{e.Class}</td>
                          <td>{e.Division}</td>
                          <td>{e.Status}</td>
                          <td><Link to="/students/add">Edit</Link> <a href="">Delete</a></td>
                        </tr>)
                      : 'loading...'}
                  </tbody>
                </table>
              </div>
              <Pagination />
            </div>
           <CSVLink {...csvReport}><button><img class="logo" src={fileLogo} alt="" />Download Excel</button></CSVLink>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default DataTable;
