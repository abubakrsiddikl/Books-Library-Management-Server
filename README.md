# 📚 Library Management API

A complete **Library Management System** built using **Express.js**, **TypeScript**, and **MongoDB** with **Mongoose** ODM. This project allows managing books and their borrowing functionality with strict validation, business logic, and advanced MongoDB features.

---

## 🔗 Live URL

> [Deployed Link](https://library-managment-api-server.vercel.app)

## 📁 GitHub Repository

> [GitHub Repo](https://github.com/abubakrsiddikl/Books-Library-Management-Server)

---

## 🎯 Project Objective

To develop a robust RESTful API system for managing a library’s books and their borrowing activities. It includes proper schema validation, business logic (like copy deduction and availability control), and MongoDB aggregations.

---

## 🚀 Features

### 📖 Book Management

* Create, Read, Update, Delete books
* Filter books by genre
* Sort and paginate books by fields (e.g., `createdAt`)

### 📘 Borrow Management

* Borrow books with due dates
* Automatically deduct copies and update availability
* Borrowed summary using MongoDB aggregation

### 🛡️ Validations

* All fields are validated (e.g., ISBN unique, copies ≥ 0)
* Custom error handling and response structure

### ⚙️ Technologies Used

* **Node.js**, **Express.js**, **TypeScript**
* **MongoDB**, **Mongoose**
* **Zod** for optional validation (if used)

---

## 🔧 Installation & Setup

```bash
git clone https://github.com/your-username/library-management-api.git
cd library-management-api
npm install
cp .env.example .env
# Add MongoDB URI in .env
npm run dev
```

Server runs on: `http://localhost:5000`

---

## 📌 API Endpoints

### 1️⃣ Create Book

```
POST /api/books
```

#### Request:

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5
}
```

---

### 2️⃣ Get All Books (with Filter & Sort)

```
GET /api/books?filter=SCIENCE&sortBy=createdAt&sort=desc&limit=5
```

---

### 3️⃣ Get Book by ID

```
GET /api/books/:bookId
```

---

### 4️⃣ Update Book

```
PUT /api/books/:bookId
```

#### Request:

```json
{
  "copies": 50
}
```

---

### 5️⃣ Delete Book

```
DELETE /api/books/:bookId
```

---

### 6️⃣ Borrow Book

```
POST /api/borrow
```

#### Request:

```json
{
  "book": "<bookId>",
  "quantity": 2,
  "dueDate": "2025-07-18"
}
```

---

### 7️⃣ Get Borrow Summary

```
GET /api/borrow
```

#### Response:

```json
{
  "data": [
    {
      "book": { "title": "The Theory of Everything", "isbn": "9780553380163" },
      "totalQuantity": 5
    },
    {
      "book": { "title": "1984", "isbn": "9780451524935" },
      "totalQuantity": 3
    }
  ]
}
```

---

## 🧠 Business Logic

* Static method on Book model to update `copies` and `available`
* Middleware for timestamping
* Aggregation for borrow summary

---

## 🧪 Error Handling

```json
{
  "message": "Validation failed",
  "success": false,
  "error": { "name": "ValidationError", ... }
}
```

---

## ✨ Bonus Implementations

* ✅ Clean folder structure
* ✅ Consistent response format
* ✅ Global error handling middleware
* ✅ Video explanation link included

---

## 📽️ Video Demo

> [Watch Project Walkthrough](https://your-public-video-link.com)

---

## 👨‍💻 Author

**Abu Bakr Siddik**
Full Stack Web Developer
Skills: TypeScript | Node.js | MongoDB | Mongoose | Express | React

> © 2025 Abu Bakr Siddik Corporation  — All rights reserved.
