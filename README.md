# devops-url-shortener

A full-stack URL Shortener application deployed with a complete DevOps CI/CD pipeline using Docker, Jenkins, Nginx, and AWS EC2.

## Live Demo
🚀 http://98.81.125.40

---

## Overview

This project is a full-stack URL shortener application that allows users to convert long URLs into short, shareable links.

It also demonstrates practical DevOps implementation including:

- Application containerization with Docker
- Multi-container orchestration with Docker Compose
- Reverse proxy setup using Nginx
- CI/CD automation using Jenkins
- Automatic deployment using GitHub Webhooks
- Cloud deployment on AWS EC2
- MongoDB Atlas cloud database integration

---

## Features

- Shorten long URLs
- Redirect shortened URLs to original destination
- Full-stack web application
- Dockerized frontend and backend
- Reverse proxy with Nginx
- Automated CI/CD pipeline
- Auto deployment on every GitHub push
- Cloud deployment on AWS EC2
- MongoDB Atlas integration

---

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### DevOps & Deployment
- Docker
- Docker Compose
- Jenkins
- GitHub Webhooks
- Nginx
- AWS EC2
- Amazon Linux

---

## System Architecture

```text
User
  ↓
Nginx Reverse Proxy
  ↓
Frontend Container (React + Vite)
  ↓
Backend Container (Node.js + Express)
  ↓
MongoDB Atlas
```

## CI/CD Workflow
- Developer pushes code to GitHub
        ↓
- GitHub Webhook triggers Jenkins
        ↓
- Jenkins clones latest repository
        ↓
- Creates environment configuration
        ↓
- Builds Docker images
        ↓
- Stops/removes old containers
        ↓
- Deploys updated application on AWS EC2

## Project Structure
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
│   └── Dockerfile
│
├── nginx/
│   └── nginx.conf
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

## Local Setup

### Clone Repository
```bash
git clone https://github.com/abhishekbhatia01/devops-url-shortener.git
cd devops-url-shortener
```

### Create Environment Variables

Create a `.env` file inside `Backend/`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE=http://localhost
```

### Run Application
```bash
docker-compose up --build
```

Open:
http://localhost

## Deployment

The application is deployed on AWS EC2 using:

- Docker containers
- Nginx reverse proxy
- Jenkins CI/CD automation
- GitHub Webhook auto deployment

Every push to the GitHub repository automatically triggers Jenkins, which rebuilds and redeploys the application.

## Challenges Solved

During development and deployment, the following challenges were resolved:

- Docker image build issues
- Docker Compose configuration problems
- Linux case-sensitive path errors
- Nginx reverse proxy setup
- Vite host blocking issue
- WebSocket/HMR deployment issues
- Jenkins workspace permission conflicts
- Environment variable handling in CI/CD
- Container naming conflicts
- Git/Jenkins integration issues

## Future Improvements
- Production frontend build using `npm run build`
- SSL/HTTPS with Let's Encrypt
- Custom domain setup
- Jenkinsfile pipeline as code
- Monitoring with Prometheus and Grafana
- Kubernetes deployment

## Author

Abhishek Bhatia
