import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error("Error fetching post:", err));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to={`/edit/${post._id}`}>Edit Post</Link>
    </div>
  );
}

export default PostDetails;