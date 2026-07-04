# 🏡 easyEstate

A premium, modern real estate and vacation rental platform built using **Node.js**, **Express**, **MongoDB/Mongoose**, **EJS templates**, and **Tailwind CSS v4**. 

This application provides a seamless rental booking experience for guests and property listing capabilities for hosts. It has been styled with a high-end, responsive design system and glassmorphism micro-interactions to make it an excellent showcase for resumes.

---

## ✨ Features

### 👤 Guest Experience
- **Explore Stays**: Browse verified apartments, villas, and cabins with high-resolution image galleries and rating systems.
- **Advanced Detail View**: View detailed pricing breakdowns, locations, amenities, and host descriptions.
- **Favourites Wishlist**: Bookmark listings to your favorites list with smooth, interactive heart toggles.
- **Seamless Booking**: Reserve properties instantly and manage active stays directly in your guest dashboard.
- **Empty States**: Elegant custom vectors and actions for empty bookings or favorites lists.

### 🔑 Host Dashboard
- **Create Listings**: Add properties to the market with pricing, address location, rating, descriptions, and previews.
- **Media Uploads**: Integrated image uploads using Multer directly stored on the local server.
- **Edit & Update Stays**: Modify existing listed property specifications or upload new media preview files.
- **Delete Properties**: Safely delete expired listings from easyEstate.

---

## 🛠️ Technology Stack

- **Frontend**: EJS (Embedded JavaScript) Templates, Tailwind CSS v4, Plus Jakarta Sans Typography, Custom Inline SVGs
- **Backend**: Node.js, Express.js (MVC Architecture)
- **Database**: MongoDB & Mongoose Object Data Modeling
- **Authentication**: BcryptJS Password Hashing & Express Session Management
- **Validation**: Express-Validator middleware
- **File Storage**: Multer (Local Multi-part file upload engine)

---

## 📁 Directory Structure

```text
├── controller/          # MVC Controllers (auth, host, store)
├── models/              # Mongoose database schemas (user, home)
├── routes/              # Express API and page routes (auth, host, store)
├── public/              # Static assets
│   ├── input.css        # Source Tailwind CSS stylesheet (Custom theme config)
│   ├── output.css       # Compiled Tailwind CSS distribution file
│   └── uploads/         # Host uploaded housing preview images
├── views/               # EJS template layout views
│   ├── auth/            # Auth pages (login, signup)
│   ├── host/            # Host portals (add, edit, list homes)
│   ├── store/           # Guest store views (bookings, details, favourites)
│   └── partials/        # Global partial layout blocks (head, nav, errors)
├── app.js               # Application initialization & config
├── package.json         # Node manifest
├── .gitignore           # Git ignore profiles
├── .env.example         # Sample environment values
└── README.md            # Project documentation
```

---

## 🚀 Setup & Installation

### Prerequisites
- [Node.js](https://nodejs.org/en) (v18.0.0+ recommended)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) (Running locally on port 27017 or remote Atlas connection)

### 1. Clone the repository
```bash
git clone https://github.com/Sssaranshhh/EasyEstate.git
cd EasyEstate
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root directory based on the `.env.example` template:
```bash
cp .env.example .env
```
Open `.env` and fill in your custom configurations:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/easyEstate
SESSION_SECRET=your_custom_session_secret_key
```

### 4. Running the application

To run the application in **development mode** (this runs the Express server and watch compiles Tailwind CSS simultaneously):
```bash
npm run dev
```

The application will start running at:
`http://localhost:3000`

---

## 📝 Scripts
- `npm start`: Starts the node server with nodemon tracking app.js.
- `npm run tailwind`: Compiles the tailwind styles once and watches for changes in EJS views.
- `npm run dev`: Concurrently compiles Tailwind CSS and runs the Express node server.