# 🍔 Swiggy-like Food Delivery Backend with Vendor Dashboard

This is a full-stack food delivery app backend I built using **Node.js, Express, and MongoDB**. It's kind of like a Swiggy clone (just backend + vendor dashboard for now). Vendors can register, log in, add their firms, and upload products — all from a simple dashboard made using **React** (with Vite).

I focused mostly on the backend — setting up models, APIs, authentication, image upload, etc. This was a personal learning project to get comfortable with the MERN stack.

---

## 💡 Features

### 🔧 Backend
- Vendor registration & login (JWT + bcrypt for security)
- Add/manage firms (firm name, area, region, category, offer, image)
- Add/manage products (name, price, image, category, best seller flag, description)
- File upload using **multer**
- APIs created using Express, structured with proper routing and controllers
- Connected to MongoDB using **Mongoose**

### 🖥️ Vendor Dashboard (React)
- Built using Vite + React
- Components: `Navbar`, `Sidebar`, `AllProducts`
- Forms: Vendor register, login, add firm, add product

---

## 📦 Tech Stack

### Backend:
- **Node.js**, **Express**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **bcrypt** for hashing passwords
- **multer** for image uploads
- **dotenv**, **body-parser**, **nodemon** for setup

### Frontend:
- **React** (with Vite)
- Axios (for API calls)

---

## 📁 Folder Structure

### Backend:
├── controllers/
│ └── vendorController.js
├── models/
│ ├── Vendor.js
│ ├── Firm.js
│ └── Product.js
├── routes/
│ └── vendorRoutes.js
├── .env
├── app.js
├── server.js

### Frontend:
frontend/
├── components/
│ ├── Navbar.jsx
│ ├── Sidebar.jsx
│ └── AllProducts.jsx
├── forms/
│ ├── VendorRegister.jsx
│ ├── VendorLogin.jsx
│ ├── AddFirm.jsx
│ └── AddProduct.jsx

## 🔗 MongoDB Models

### Vendor
{
  username: String,
  email: String (unique),
  password: String (hashed)
}
### Firm
{
  firmName, area, category, region, offer, image
}
### Product

{
  productName, price, category, image, bestSeller, description
}
⚙️ How to Run
Backend:
Go to the backend folder

Install dependencies:

npm install
Create a .env file with:
PORT=5000
MONGO_URI=your_mongo_connection
JWT_SECRET=your_secret_key
Start the server:
nodemon server.js

Frontend:
Create project using Vite:
npm create vite@latest frontend -- --template react
cd frontend
npm install
Add your components/forms and run:


npm run dev
🚀 Future Plans
Add order management & delivery partner modules

Payment integration (maybe Razorpay)

Admin dashboard

Proper error handling & validations


📜 License
Open for learning, feedback, and improvements.
