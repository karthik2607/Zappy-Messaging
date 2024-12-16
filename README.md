# Zappy Messaging 🔧🔔

Welcome to **Zappy Messaging**, a feature-rich and scalable real-time chat application that prioritizes user experience and future-proofing. Built with modern web technologies, Zappy aims to redefine real-time communication by integrating robust features and a commitment to security.

Maintained by [**Karthik Sudhan S G**](https://github.com/karthik2607), Zappy is designed to evolve with cutting-edge features like **end-to-end encryption**, making it an exciting project to contribute to.

---

## 🚀 Features

- **Real-Time Messaging:** Instant updates, powered by WebSockets, for seamless communication.
- **Group Chats:** Collaborate and stay connected with friends or teams.
- **Dockerized Setup 🛠️:** Zappy is containerized for streamlined deployment across platforms.
- **Scalable Architecture:** Designed to handle large user bases effortlessly.
- **Customizable UI:** A sleek and modern chat interface with room for personalization.
- **Open for Contributions:** Excited to collaborate on improving and adding new features!

---

## 🔒 What’s Next?

Our vision includes implementing **end-to-end encryption** to ensure user privacy and make Zappy as secure as possible. By securing conversations, Zappy will align with industry standards like **WhatsApp** and **Signal** while maintaining an open-source philosophy.

We’re looking for contributors to help design and implement encryption protocols, improve performance, and build new features! 🎉

---

## 🙌 Why Contribute?

Zappy Messaging is a perfect project for:

- Developers passionate about real-time applications.
- Security enthusiasts eager to work on encryption and privacy-focused features.
- Open-source advocates looking to leave their mark on a growing project.
- Beginners seeking mentorship in Docker, WebSockets, and real-time chat systems.

---

## 🚑 Tech Stack

- **Frontend:** React.js 🔧
- **Backend:** Node.js (Express) 🛠️
- **Database:** MongoDB 📊
- **Real-Time:** Socket.io 🔄
- **Containerization:** Docker 🛠
- **Future Plans:** Encryption integration using **AES/RSA protocols** ⚛️

---

## 🛠 Installation Guide

### Requirements

- [Node.js](https://nodejs.org/en/download)
- [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)

Ensure MongoDB is installed and running in the background.

### First Method (Manual Setup)

1. Clone the repository and navigate to the project folder:
   ```shell
   git clone https://github.com/karthik2607/Zappy-Messaging.git
   cd Zappy-Messaging
   ```

2. Rename the environment files:
   ```shell
   cd public
   mv .env.example .env
   cd ../server
   mv .env.example .env
   cd ..
   ```

3. Install the dependencies:
   ```shell
   cd server
   yarn
   cd ../public
   yarn
   ```

4. Start the development servers:
   - **Frontend:**
     ```shell
     cd public
     yarn start
     ```
   - **Backend:**  
     Open a new terminal and run:
     ```shell
     cd server
     yarn start
     ```

   Now, visit `localhost:3000` in your browser to start using Zappy Messaging!

### Second Method (Dockerized Setup)

1. Ensure Docker and Docker Compose are installed on your system.

2. Build the containers:
   ```shell
   docker compose build --no-cache
   ```

3. Run the containers:
   ```shell
   docker compose up
   ```

   Open `localhost:3000` in your browser, and you're good to go! 🐳

---

## 🚀 Get Involved

Interested in contributing? Check out our [issues section](https://github.com/karthik2607/Zappy-Messaging/issues) or submit a pull request. Let’s collaborate and make Zappy the go-to chat app for secure and scalable communication.

Reach out to [**Karthik Sudhan S G**](https://github.com/karthik2607) for discussions or queries. Your ideas and expertise are always welcome! 🌟

---

## 🕺 Shoutout

This project is maintained with ❤️ and dedication by [Karthik Sudhan S G](https://github.com/karthik2607). If you like Zappy Messaging, give it a star ⭐ and share it with your friends!

