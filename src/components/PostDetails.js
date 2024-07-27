// src/components/PostDetails.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getPostById, getCommentsByPostId } from "../services/Api";
import "./PostDetail.css";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  //const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getPostById(id);
        setPost(postData);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    const fetchComments = async () => {
      try {
        const commentsData = await getCommentsByPostId(id);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchPost();
    fetchComments();
  }, [id]);

  /* const handleCommentSubmit = async () => {
    try {
      await addComment(id, { text: newComment });
      setNewComment("");
      const commentsData = await getCommentsByPostId(id);
      setComments(commentsData);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  }; */

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mt-4 mb-5">
      <nav aria-label="breadcrumb ">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Post #{id}
          </li>
        </ol>
      </nav>
      <img
        src={`https://picsum.photos/id/${post.id}/1280/400`}
        className="img-fluid mt-3"
        alt={post.title}
      />

      <div className="entry-meta list-unstyled d-flex mt-3">
        {post.tags.map((tag) => (
          <span className="badge bg-secondary mx-1">{tag}</span>
        ))}
      </div>
      <h1 className="my-3 display-6">{post.title}</h1>
      <p className="lead">{post.body}</p>
      <hr className="w-50 mx-auto mb-5 mt-5 mb-xl-9 border-dark-subtle" />
      <h4>Comments</h4>
      <div className="comments">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p className="commentAuthor">{comment.user.username}</p>
            <p className="commentText fw-lighter">{comment.body}</p>
          </div>
        ))}
      </div>

      {/* <div>
        <h4>Add a Comment</h4>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="3"
          className="form-control"
        />
        <button onClick={handleCommentSubmit} className="btn btn-primary mt-2">
          Submit
        </button>
      </div> */}
    </div>
  );
};

export default PostDetails;
