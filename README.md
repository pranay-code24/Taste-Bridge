# Taste Bridge – A Restaurant Platform 🍽️

Taste Bridge is a full-stack web platform that streamlines dine-in restaurant operations through real-time digital menus, contactless ordering, secure checkout, and automated communication. The platform focuses on enhancing customer experience and simplifying backend order management for restaurants.

---

## 🔧 Features

- Real-time menu updates with item availability
- Contactless table-side ordering with dynamic cart
- Secure payment integration with Stripe
- Role-based authentication using JWT (admin/customer)
- Transactional email confirmation via Mailtrap
- Fully responsive mobile-first design
- Seamless state management with Zustand

---

## 🧠 Tech Stack

**Frontend:**
- React.js, TypeScript
- Tailwind CSS, ShadCN UI
- Zustand (state management)

**Backend:**
- Node.js, Express.js
- MongoDB, Mongoose
- Stripe API
- Zod (schema validation)
- Mailtrap (email testing)

---

## 🚀 Project Structure

```
/frontend
    └── React client (UI, Zustand, Tailwind CSS, Stripe)

/backend
    └── Express server (routes, controllers, Stripe, Zod, Mailtrap)

/config
    └── JWT, Stripe keys, MongoDB setup
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/pranay-code24/Taste-Bridge.git
cd Taste-Bridge
```

### 2. Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3. Configure environment variables

Create a `.env` file in `/backend` with the following keys:

```env
MONGO_URI=<your_mongo_uri>
JWT_SECRET=<your_jwt_secret>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
MAILTRAP_USER=<mailtrap_user>
MAILTRAP_PASS=<mailtrap_pass>
```

---

### 4. Run the app

```bash
# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm start
```

---

## 📦 Usage

- Admins can add/update menu items in real-time
- Customers browse the live menu, build cart, place orders
- Payments are securely processed via Stripe
- Order confirmation is emailed to the customer
- UI adapts for all screen sizes and devices

---

## ✅ Testing

Basic tests have been included for:

- Menu CRUD operations
- Order placement and Stripe integration
- Email flow via Mailtrap

---

## 🧑‍💻 Author

**Pranay Gumashta**  
[GitHub Profile](https://github.com/pranay-code24)  
Built with 💙 using the MERN stack
