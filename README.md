# 📬 Contact Form with Server Actions & Revalidation

A modern full-stack contact form built using **Next.js (App Router)**, **Server Actions**, **MongoDB**, and **Next.js caching & revalidation**.

This project demonstrates how to handle form submissions, manage server-side data, and keep UI in sync using **cache invalidation (revalidateTag)**.

---

## 🚀 Features

- ✉️ Contact form with name, email, subject, and message
- ⚡ Server Actions for handling form submission
- 🗄 MongoDB integration using Mongoose
- 🔄 Real-time-like updates using `revalidateTag`
- 📊 Contact stats dashboard (Total, New, Read, Replied)
- 🟢 Status update (Mark as Read / Replied)
- 🧠 Cached data using `unstable_cache`
- 🔔 Toast notifications for user feedback
- 📱 Fully responsive UI (Tailwind CSS + shadcn/ui)

---

## 🧱 Tech Stack

- **Frontend:** Next.js (App Router), React
- **Backend:** Server Actions (Next.js)
- **Database:** MongoDB + Mongoose
- **Styling:** Tailwind CSS, shadcn/ui
- **State Handling:** useFormStatus
- **Caching:** unstable_cache + revalidateTag

---

## 📂 Project Structure

/app
/contact → Contact stats page
/page.tsx → Home page with form

/components
contact-form.tsx
form-wrapper.tsx

/actions
index.js → Server actions (create, update, delete)

/lib
db.js → MongoDB connection

/models
Contact.js → Mongoose schema

---

## ⚙️ How It Works

### 📝 Form Submission

- Form uses **Server Actions**
- Data is sent directly to server (no API route needed)
- Stored in MongoDB

---

### 🔄 Cache & Revalidation

- Stats are cached using:

  ```js
  unstable_cache()

  Whenever data changes:
  ```

revalidateTag("contact-stats")

👉 This ensures UI stays updated without full reload

📊 Stats Page

Displays:

Total messages
New messages
Read messages
Replied messages
🛠️ Installation
git clone https://github.com/akshaydeepakpawar/contact-form-with-server_actions-and-revalidation.git
cd contact-form-with-server_actions-and-revalidation
Install dependencies
npm install
Setup environment variables

Create .env.local:

MONGODB_URI=your_mongodb_connection_string
Run the project
npm run dev

Open:

http://localhost:3000
⚠️ Important Notes
Cache updates only when:
revalidateTag() is called
Manual DB changes will NOT reflect instantly unless:
cache is invalidated
or revalidation time is set
📸 Screenshots

Add your UI screenshots here

📌 Learnings
How Server Actions replace traditional API routes
Managing server-side state in Next.js
Handling caching and revalidation properly
Avoiding stale data issues
Building real-world full-stack features
🤝 Contributing

Feel free to fork this repo and improve it!

📬 Connect

If you liked this project or want to collaborate, feel free to reach out 🚀

⭐ Show your support

Give a ⭐ if this helped you!