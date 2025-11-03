type nul > README.md
# MERN Blog Application 📝

A full-stack blog built with the *MERN* stack — *MongoDB, Express.js, React.js, and Node.js*.

---

## 🚀 Features
- Create, read, update, and delete blog posts  
- Category management  
- RESTful API with Express & MongoDB  
- Responsive React frontend with routing  
- Axios for API communication  
- Environment variables for secure configuration  

---

## 🧱 Technologies
- *Frontend:* React (Vite), React Router, Axios  
- *Backend:* Node.js, Express.js, Mongoose  
- *Database:* MongoDB  
- *Styling:* CSS  

---

## ⚙ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>
cd mern-blog
Backend Setup: 
cd server
npm install
Create a .env file in the server/ folder:
MONGO_URI=your_mongodb_connection_string
PORT=5000
Run the backend:
npm run dev
Frontend Setup:
cd ../client
npm install
npm run dev
Frontend runs on http://localhost:5173
FOLDER STRUCTURE:
mern-blog/
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env.example
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
└── README.md
