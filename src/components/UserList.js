import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="mb-4 display-5 text-center">Users</h2>
            <p className="text-secondary mb-5 text-center lead fs-4">
              Welcome
              <strong className="text-light-emphasis">
                {", " + user.displayName}
              </strong>
            </p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <nav aria-label="breadcrumb ">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Users
            </li>
          </ol>
        </nav>
        <div className="row gy-3 gy-lg-0 gx-xxl-5">
          {users.map((user) => (
            <div className="col-md-3 mb-4" key={user.id}>
              <div className="card">
                <img
                  src={user.image}
                  className="card-img-top "
                  alt={user.username}
                />
                <div className="card-body">
                  <h5 className="card-title lead ">
                    {user.firstName} {user.lastName}
                  </h5>
                  <strong className="small">@{user.username}</strong>
                  <p className="card-text text-primary small">{user.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserList;
