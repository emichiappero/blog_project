// src/components/TagFilter.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const TagFilter = () => {
  const { tag } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/posts`);
        const filteredPosts = response.data.posts.filter((post) =>
          post.tags.includes(tag)
        );
        setPosts(filteredPosts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [tag]);

  return (
    <div className="container mt-4">
      <h1>Posts with tag: {tag}</h1>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card">
              <img
                src={post.thumbnail}
                className="card-img-top"
                alt={post.title}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h5>
                <p className="card-text">{post.body}</p>
                <p className="card-text">
                  <strong>Author:</strong>{" "}
                  {post.user?.firstName
                    ? `${post.user.firstName} ${post.user.lastName}`
                    : "Unknown"}
                </p>
                <p className="card-text">
                  <strong>Tags:</strong> {post.tags.join(", ")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagFilter;
