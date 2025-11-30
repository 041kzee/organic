# 🌿 Agrica – Organic Farming Website

Agrica is a React-based organic farming website designed to promote sustainable and organic agriculture. The platform allows users to browse products, read blogs, register using Firebase Authentication, and manage their cart using React Context API.



## 🚀 Live Demo

🔗 **Vercel Deployment:** *https://organic-8r0xkpfhf-khatija-kaneezs-projects.vercel.app*



## 📌 Features

### ✔️ Firebase Authentication
- User registration and login implemented on the **Register** page.

### ✔️ Global State Management (Context API)
- Products can be added to the cart.
- Cart page shows total price and items added.

### ✔️ Active Pages
1. **Home**
2. **Register** (click on the Register button to navigate)
3. **Cart** (hover on Cart → click Cart to open)
4. **About Us** (Pages → About Us)
5. **Contact Us** (Pages → Contact Us)
6. **Blog** (Click Blog in menu)
7. **Products** (Click Shop in menu)


## 🛠️ Tech Stack

- **React.js** (Frontend)
- **Firebase Authentication**
- **Context API** for global state management
- **Vercel** for hosting
- **Tailwind for styling**


## Folder Structure

```bash
app/
├── about/
│   └── page.js
├── blog/
│   └── page.js
├── cart/
│   └── page.js
├── components/
│   ├── Footer.js
│   ├── Header.js
│   └── PhotoHead.js
├── contact/
│   └── page.js
├── contexts/
│   └── AuthContext.js
├── firebase/
│   └── firebase.js
├── products/
│   └── page.js
├── register/
│   └── page.js
├── favicon.ico
├── globals.css
├── layout.js
└── page.js
```


## ▶️ Running the Project Locally

```bash
# 1. Clone the repository
git clone https://github.com/041kzee/organic.git

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# Project will run at:
# http://localhost:3000
