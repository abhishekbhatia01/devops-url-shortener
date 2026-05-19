# 🚀 DevOps URL Shortener

A full-stack **URL Shortener Application** deployed with a complete **DevOps CI/CD pipeline** using **Docker, Docker Compose, Jenkins, Nginx, GitHub Webhooks, and AWS EC2**.

This project demonstrates real-world DevOps practices by automating build, deployment, and infrastructure management for a production-ready web application.

---

## 📌 Overview

This application allows users to convert long URLs into short, shareable links and automatically redirect users to the original destination.

Beyond application functionality, this project showcases practical DevOps implementation, including:

- 🐳 Docker containerization
- 📦 Multi-container orchestration with Docker Compose
- 🔄 CI/CD automation using Jenkins
- 🔗 GitHub Webhook integration
- 🌐 Reverse proxy configuration with Nginx
- ☁️ Cloud deployment on AWS EC2
- 🗄️ MongoDB Atlas cloud database integration

---

## ✨ Features

### Application Features

- Shorten long URLs instantly
- Redirect shortened URLs to original URLs
- Responsive frontend UI
- RESTful backend API
- MongoDB cloud database integration

### DevOps Features

- Dockerized frontend and backend services
- Automated CI/CD pipeline
- Auto deployment on every GitHub push
- Reverse proxy with Nginx
- Jenkins deployment automation
- Cloud hosting on AWS EC2
- Environment variable configuration management

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### DevOps / Deployment
- Docker
- Docker Compose
- Jenkins
- GitHub Webhooks
- Nginx
- AWS EC2
- Amazon Linux 2023

---

## 🏗️ System Architecture

```text
                    User
                     │
                     ▼
           Nginx Reverse Proxy
                     │
        ┌────────────┴────────────┐
        ▼                         ▼
Frontend Container         Backend Container
 (React + Vite)           (Node.js + Express)
                                  │
                                  ▼
                           MongoDB Atlas
```

---

## 🔄 CI/CD Workflow

```text
Developer pushes code to GitHub
            │
            ▼
GitHub Webhook triggers Jenkins
            │
            ▼
Jenkins pulls latest repository
            │
            ▼
Creates environment configuration
            │
            ▼
Builds Docker images
            │
            ▼
Stops and removes old containers
            │
            ▼
Deploys updated application on AWS EC2
```

---

## 📂 Project Structure

```text
devops-url-shortener/
│
├── Frontend/
│   ├── src/
│   ├── Dockerfile
│   └── vite.config.js
│
├── Backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/
│   ├── Dockerfile
│   └── .env
│
├── nginx/
│   └── nginx.conf
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## ⚙️ Local Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/abhishekbhatia01/devops-url-shortener.git
cd devops-url-shortener
```

---

### 2️⃣ Configure Environment Variables

Create a `.env` file inside the `Backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE=http://localhost
```

---

### 3️⃣ Run Application with Docker

```bash
docker compose up --build
```

---

## 🌐 Access Application

Open in browser:

```bash
http://localhost
```

---

## ☁️ Deployment

This project is deployed on **AWS EC2** using:

- Docker containers
- Nginx reverse proxy
- Jenkins automation server
- GitHub Webhooks
- MongoDB Atlas

### Deployment Flow

Every push to the GitHub repository automatically:

- Triggers Jenkins
- Pulls latest code
- Builds fresh Docker images
- Removes old containers
- Deploys updated application

---

## 🐛 Challenges Solved

During development and deployment, several real-world DevOps issues were resolved:

- Docker image build failures
- Docker Compose networking issues
- Linux case-sensitive path problems
- Nginx reverse proxy configuration
- Vite host accessibility issues
- WebSocket / HMR deployment errors
- Jenkins workspace permission conflicts
- Environment variable handling in CI/CD
- Container naming conflicts
- GitHub webhook integration issues

---

## 🔮 Future Improvements

Planned enhancements:

- Production frontend build (`npm run build`)
- HTTPS with Let's Encrypt SSL
- Custom domain configuration
- Jenkinsfile pipeline as code
- Monitoring with Prometheus + Grafana
- Kubernetes deployment
- Blue-Green deployment strategy

---

## 👨‍💻 Author

**Abhishek Bhatia**

---

## ⭐ If you like this project

Give it a **star ⭐ on GitHub**
