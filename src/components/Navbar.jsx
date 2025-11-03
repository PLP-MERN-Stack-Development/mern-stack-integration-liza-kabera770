import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MERN Blog</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/create" style={styles.link}>Create Post</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#282c34",
    color: "#fff",
    padding: "10px 30px",
  },
  logo: { margin: 0 },
  links: { display: "flex", gap: "15px" },
  link: { color: "white", textDecoration: "none", fontWeight: "500" },
};

export default Navbar;