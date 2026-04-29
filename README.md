# 🧠 Mini SaaS Task Management System

A full-stack Task Management System built using **Node.js, Express, PostgreSQL, Sequelize, React, and Tailwind CSS**. This application allows users to securely register, log in, and manage their own tasks.

---

## 🚀 Features

### 🔐 Authentication

- User Signup & Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes

### 📋 Task Management

- Create tasks
- View only your tasks
- Toggle task status (Pending ↔ Completed)
- Delete tasks
- Multi-user support (each user has isolated data)

### 🎨 Frontend

- React + Tailwind CSS
- Clean and responsive UI
- Axios API integration
- Token stored in localStorage

### 🛠 Backend

- Node.js + Express
- Sequelize ORM with PostgreSQL
- MVC folder structure
- Middleware for authentication
- Error handling

---

## 📁 Project Structure

```
Mini-SaaS-Task-App/
│
├── Mini-SaaS-Task-Backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── .env
│   └── server.js
│
└── Mini-SaaS-Task-Frontend/
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

- Node.js
- PostgreSQL
- npm or yarn

---

## 🧩 Backend Setup

### 1. Navigate to backend

```
cd Mini-SaaS-Task-Backend
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
cd Mini-SaaS-Task-Frontend
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

- `POST /api/auth/signup`
- `POST /api/auth/login`

### Tasks (Protected)

- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

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
  "password": "1234"
}

Note: If you using Live URL, above user details are exists in the database. 
So you can login directly.
```

### Login → get token

### Use token in headers:

```
Authorization: Bearer <token>
```

---

## 🚀 Deployment

- Backend → Render
- Frontend → Vercel
- Database → Render

---

## 📌 Important Notes

- Each user can only access their own tasks
- JWT must be included for all task routes
- Do not expose `.env` file publicly
- Ensure backend is running before frontend