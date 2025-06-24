# Garage Dashboard

A modern, visually rich dashboard inspired by CRED Garage, built for car enthusiasts and users who want to track their vehicle details, rewards, and benefits in a gamified, interactive way.

---

## 🚗 What is this project?

Garage Dashboard is a responsive web application that showcases a car's details, reward points, monthly summaries, and exclusive benefits. It features beautiful 3D car models, interactive charts, and a gamified user experience, all inspired by the CRED Garage design philosophy.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **UI Components:** shadcn/ui (Radix UI primitives)
- **3D Graphics:** React Three Fiber & Drei
- **Animation:** Framer Motion
- **Charts:** Chart.js
- **Testing:** Jest & React Testing Library

---

## 🧩 UI Components

- **shadcn/ui:**  
  Uses shadcn/ui, a modern component library built on top of Radix UI primitives, for accessible, customizable, and beautiful UI elements (buttons, cards, tooltips, avatars, etc.).
- **Tailwind CSS:**  
  Utility-first CSS framework for rapid, responsive, and themeable design.
- **Framer Motion:**  
  For smooth, interactive animations and transitions throughout the dashboard.
- **Chart.js**  
  For rendering interactive, visually appealing charts and graphs.
- **React Three Fiber:**  
  For rendering 3D car models and scenes directly in React using Three.js.

---

## 🗃️ State Management

- **Zustand:**  
  Lightweight, scalable state management for React. All stores (car details, rewards, benefits, user profile, monthly summary) are managed using Zustand for simplicity and performance.

---

## 🧪 Testing

- **Jest:**  
  JavaScript testing framework for unit and integration tests.
- **React Testing Library:**  
  For testing React components in a user-centric way.

---

## 🚀 How to Run This Project

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

- `src/app` – Next.js app directory (routing, layout)
- `src/components` – Reusable UI components (dashboard, car, shared, ui)
- `src/store` – Zustand stores for app state
- `src/styles` – Global and component styles (Tailwind)
- `public/` – Static assets (3D models, images, icons)

---

## 📦 Notable Packages

- `next`, `react`, `typescript`
- `tailwindcss`, `@radix-ui/react-*`, `shadcn/ui`
- `framer-motion`
- `chart.js`, `react-chartjs-2`, `recharts`
- `@react-three/fiber`, `three`, `@react-three/drei`
- `zustand`
- `jest`, `@testing-library/react`, `@testing-library/jest-dom`

---

## 📝 License

MIT
