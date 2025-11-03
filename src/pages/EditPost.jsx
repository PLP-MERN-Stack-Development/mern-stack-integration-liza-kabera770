import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/posts/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setContent(res.data.content);
      })
      .catch(err => console.error("Error loading post:", err));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/posts/${id}`, { title, content });
      navigate(`/posts/${id}`);
    } catch (err) {
      console.error("Error updating post:", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Post</h2>
      <form onSubmit={handleUpdate} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Edit title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Edit content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows="6"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditPost;