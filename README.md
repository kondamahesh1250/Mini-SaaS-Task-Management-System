# 🧠 Mini SaaS Task Management Application

A full-stack Task Management System built using **Node.js, Express, PostgreSQL, Sequelize, React, and Tailwind CSS**. This application allows users to securely register, log in, and manage their own tasks.

---

## 🚀 Features

### 🔐 Authentication

* User Signup & Login
* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes

### 📋 Task Management

* Create tasks
* View only your tasks
* Toggle task status (Pending ↔ Completed)
* Delete tasks
* Multi-user support (each user has isolated data)

### 🎨 Frontend

* React + Tailwind CSS
* Clean and responsive UI
* Axios API integration
* Token stored in localStorage

### 🛠 Backend

* Node.js + Express
* Sequelize ORM with PostgreSQL
* MVC folder structure
* Middleware for authentication
* Error handling

---

## 📁 Project Structure

```
Mini-SaaS-Task-App/
│
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── .env
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── App.jsx
    │   └── main.jsx
```

---

## ⚙️ Prerequisites

Make sure you have installed:

* Node.js
* PostgreSQL
* npm or yarn

---

## 🧩 Backend Setup

### 1. Navigate to backend

```
cd backend
```

### 2. Install dependencies

```
npm install
```

### 3. Create `.env` file

```
PORT=5000
DB_NAME=taskdb
DB_USER=postgres
DB_PASS=yourpassword
DB_HOST=localhost
JWT_SECRET=mysecretkey
```

### 4. Start PostgreSQL

Make sure your database `taskdb` exists.

### 5. Run backend

```
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

## 💻 Frontend Setup

### 1. Navigate to frontend

```
cd frontend
```

### 2. Install dependencies

```
npm install
```

### 3. Run frontend

```
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

### Auth

* `POST /api/auth/signup`
* `POST /api/auth/login`

### Tasks (Protected)

* `GET /api/tasks`
* `POST /api/tasks`
* `PUT /api/tasks/:id`
* `DELETE /api/tasks/:id`

---

## 🔑 Authentication Flow

1. User logs in → receives JWT token
2. Token stored in `localStorage`
3. Token sent in headers:

```
Authorization: Bearer <token>
```

4. Backend verifies token for protected routes

---

## 🧪 Testing (Postman)

### Signup

```
POST /api/auth/signup
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

### Login → get token

### Use token in headers:

```
Authorization: Bearer <token>
```

---

## 🚀 Deployment (Optional)

* Backend → Render / Railway
* Frontend → Vercel / Netlify
* Database → Supabase / Neon

---

## 📌 Important Notes

* Each user can only access their own tasks
* JWT must be included for all task routes
* Do not expose `.env` file publicly
* Ensure backend is running before frontend