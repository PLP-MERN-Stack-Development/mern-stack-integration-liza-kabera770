import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map(post => (
          <div key={post._id} style={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/posts/${post._id}`}>Read More</Link>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  card: {
    background: "#f9f9f9",
    margin: "15px 0",
    padding: "15px",
    borderRadius: "8px",
  },
};

export default Home;