import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import {NavLink}from "react-router-dom";
import TablePagination from "./TablePagination";

function Dashboard() {
  const [post, setPost] = useState([]);
  console.log(post);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async(id) => {
    try {
      await axios.delete("http://localhost:8081/user/"+id)
      window.location.reload()
      
    } catch (err) {
      console.log(err);
      
    }
  }

  return (
    <div className="px-3">
      <NavBar T />
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-75 bg-white rounded p-3">
          <NavLink to='/create' className="btn btn-success ml-3">Create Post +</NavLink>


          <div>
            <TablePagination />
          </div>
          {/* <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Content</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {post.map((data, i) => (
                <tr key={i}>
                  <td>{data.name}</td>
                  <td>{data.content}</td>
                  <td>{data.category}</td>
                  <td className="d-flex">
                    <NavLink to={`/update/${data.id}`} className="btn btn-primary">
                      Update
                    </NavLink>
                    <button onClick={e => handleDelete(data.id)} className="btn btn-danger ms-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
