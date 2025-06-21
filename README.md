# 🎬 Movie Ticket Booking Frontend – Nuxt 3

This is the **frontend** of a full-stack movie ticket booking platform built with **Nuxt 3** and **Vue 3**.  
It supports real-time seat selection, Google login via OAuth2, QR code ticket display, and multilingual UI – connecting to a Spring Boot backend.

> 🔗 Backend repo: [Spring Boot – Movie Booking](https://github.com/nhat-khoa/movie-booking-springboot)

---

## 📽️ Video Demo

👉 Watch At: [YouTube Video Demo](https://www.youtube.com/watch?v=r6mNs0JB_O8)

---

## 🚀 Key Features

- 🔐 **Google OAuth2 Login**  
  Integrated with Google Identity Services for secure sign-in.

- 🪑 **Real-time Seat Selection**  
  WebSocket (SockJS + WebStomp) for live seat updates during booking.

- 🌍 **Multi-language Support**  
  Built-in `vue-i18n` for localized content (i18n-ready).

- 📱 **Responsive UI**  
  Mobile-friendly design using Bootstrap 3 + Font Awesome + Toast + SweetAlert2.

---


## 🧪 Technology Stack

| Layer          | Tech Stack                                           |
|----------------|------------------------------------------------------|
| **Framework**  | Nuxt 3, Vue 3                                        |
| **State Mgmt** | Pinia                                                |
| **HTTP**       | Axios                                                |
| **Realtime**   | WebSocket, SockJS, WebStomp                          |
| **UI**         | Bootstrap 3, Font Awesome 4, SweetAlert2, Toastification |
| **Utils**      | Day.js, VueUse, vue-i18n                             |

---

## 🗂️ Project Structure (Simplified)

```
booking-movie-ticket-nuxt/
├── .nuxt/ # Nuxt build output (auto-generated)
├── .output/ # Output files for deployment (SSR/static)
├── components/ # Vue components (UI widgets, modals, etc.)
├── layouts/ # Application layout files
├── locales/ # i18n language JSON files
├── middleware/ # Route middleware (auth checks, etc.)
├── pages/ # Page-based routing (each file = route)
├── plugins/ # Client-side or SSR plugins (e.g., Toast, Axios)
├── public/ # Static assets (CSS, icons, etc.)
├── server/ # API routes (Nitro server - optional usage)
├── stores/ # Pinia store definitions
├── .env # Environment variables (runtime config)
├── .gitignore # Git ignore rules
├── app.vue # Root Vue entry file
├── nuxt.config.ts # Nuxt 3 configuration
├── package.json # Project dependencies and scripts
├── package-lock.json # Exact dependency versions (npm)
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation
```

---

## ⚙️ Runtime Config (.env)
```env
GOOGLE_CLIENT_ID=your-google-client-id
API_BASE=http://localhost:8080
```

## 🛠️ Setup
- Install dependencies:
```
npm install
```
- Start the dev server at http://localhost:3000
```
npm run dev
```
- Build and preview production build
```
# Build
npm run build

# Preview
npm run preview
```
---
## 👨‍💻 Author
@nhat-khoa


