# 🌐 Linkify SaaS App

A modern Linkify-style SaaS application built with **Next.js 15**, **Convex**, **Clerk**, and
**Tinybird**.  
Easily manage your links, customize your profile, and analyze traffic — all from a beautiful,
responsive dashboard.

![Screenshot](public/preview.png)

---

## 🚀 Features

- 🔐 Authentication & User Management (Clerk)
- 🍄 Real-time Database & Backend Logic (Convex)
- 📊 Analytics & Metrics (Tinybird)
- 🎨 Drag-and-Drop Link Management
- 🧾 Dashboard with Customization & Username Forms
- ☁️ Deployment-ready on Vercel or Netlify
- 🧩 Modular & Extensible Design
- 🌗 Dark Mode Ready

---

## 🧑‍💻 Tech Stack

| Frontend     | Backend                   | Auth          | Analytics       |
| ------------ | ------------------------- | ------------- | --------------- |
| Next.js 15   | Convex                    | Clerk         | Tinybird        |
| React DnD    | Convex API                | JWT           | Chart Rendering |
| Tailwind CSS | Convex Tables & Mutations | Clerk Queries |

---

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/linkify-saas.git
cd linkify-saas

2. Install dependencies

npm install

3. Setup .env.local

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CONVEX_DEPLOYMENT=your_convex_deployment
CONVEX_SITE_URL=http://localhost:3000

TINYBIRD_TOKEN=your_tinybird_token

You can find Clerk and Convex keys in their respective dashboards.
4. Run locally

npm run dev

Visit: http://localhost:3000
🧩 Scripts

"scripts": {
  "dev": "npx convex dev --env-file .env.local && convex dashboard",
  "dev:frontend": "next dev",
  "dev:backend": "convex dev",
  "predev": "convex dev --until-success && convex dashboard",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}

🪪 License

MIT © Abdulsamet Dursun
🖼️ Preview

Include screenshots/GIFs here to visually show off the UI.
🙋‍♂️ Questions or Feedback?

Feel free to open an issue or contact me via LinkedIn or email.
```
