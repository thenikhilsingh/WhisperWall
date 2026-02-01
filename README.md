# WhisperWall 🕵️‍♀️

WhisperWall is an **anonymous clubhouse-style web app** where members can write and view anonymous posts.  
While everyone can see the messages, only **verified members** can see who wrote them. Admin users have additional moderation powers.

This project is built with **Node.js, Express.js, PostgreSQL, Passport.js**, and demonstrates authentication, role-based access, and database relationships.

---

## 🧠 Features

### 🗝️ Authentication
- Sign up and login with Passport.js
- Secure password hashing via bcrypt
- Form validation and sanitization

### 🪪 Membership
- Users can become members by entering a **secret passcode**
- Only members can view author names on posts

### ✍️ Anonymous Messaging
- Logged-in users can create posts
- Posts are anonymous to non-members

### 🛡️ Admin Controls
- Admin users can delete any message
- Admin-only delete buttons
- Admin status can be assigned with a separate secret passcode or manually
