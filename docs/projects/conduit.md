# 🚀 Conduit CI/CD Deployment

<!--INSERT YOUR BRIEF DESCRIPTION HERE -->
This page documents how I configured my very first cloud server instance in the Developer Akademie DevSecOps Course.

## TOC

<!--INSERT YOUR TABLE OF CONTENTS HERE -->

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition
  link="https://github.com/Gosia2024/conduit-deployment"
  title="Github Tip"
  type="tip"
/>

# 🚀 Conduit CI/CD Deployment

This repository contains everything you need to deploy **Conduit** (RealWorld Example App) with a **Django backend** and an **Angular frontend** using **Docker Compose** and **GitHub Actions**.

---

## 📌 Features
- ✅ Automated CI/CD pipeline with GitHub Actions  
- ✅ Docker images built and pushed to GitHub Container Registry (GHCR)  
- ✅ Automatic deployment to your own server via SSH  
- ✅ Django backend + Angular frontend fully containerized  

---

## 🔧 Prerequisites

Before you start, make sure you have:

- A **Linux server** with Docker & Docker Compose installed  
- A **GitHub repository fork** of this project  
- GitHub **Secrets** configured (see below)

---

## ⚙️ Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Gosia2024/conduit-deployment.git
cd conduit-deployment
```
2️⃣ Configure .env

Create a .env file with your settings (example):

SECRET_KEY=your-django-secret
DEBUG=False
BACKEND_EXTERNAL_PORT=8000
FRONTEND_EXTERNAL_PORT=80
DJANGO_SUPERUSER_USERNAME=admin
DJANGO_SUPERUSER_PASSWORD=admin123
DJANGO_SUPERUSER_EMAIL=admin@example.com
ALLOWED_HOSTS=127.0.0.1,localhost,your-server-ip
CORS_ORIGIN_WHITELIST=http://localhost,http://your-server-ip

3️⃣ Deploy with Docker Compose

Run:
```bash
docker compose up -d --build
```
- Backend → available on [http://your-server-ip:8000/api/](http://your-server-ip:8000/api/)
- Frontend → available on [http://your-server-ip/](http://your-server-ip/)

🤖 CI/CD with GitHub Actions

The workflow in .github/workflows/deploy.yml automates deployment:

1.Build job

- Runs on push to branch ci-cd-ghcr-deployment

- Builds & pushes Docker images (frontend + backend) to GHCR

- Uploads .env and compose.yaml as artifacts

2.Remote Deploy job

Copies config files to your server via SCP

Connects via SSH

Runs:
```bash
docker compose down --remove-orphans
docker system prune -af
docker compose up -d
```
🔑 Required GitHub Secrets

Add these secrets in your repository → Settings → Secrets and variables → Actions:

- SECRET_KEY, DEBUG

- BACKEND_EXTERNAL_PORT, FRONTEND_EXTERNAL_PORT

- DJANGO_SUPERUSER_USERNAME, DJANGO_SUPERUSER_PASSWORD, DJANGO_SUPERUSER_EMAIL

- ALLOWED_HOSTS, CORS_ORIGIN_WHITELIST

- API_URL (frontend → backend URL)

- SERVER_HOST, SERVER_USER, SERVER_SSH_KEY, DEPLOY_DIR

✅ Result

Push to ci-cd-ghcr-deployment → 🚀 automatic deployment

Django backend + Angular frontend running on your server

No manual rebuilds needed

🖼️ Architecture
Developer → GitHub → GitHub Actions → GHCR → Server → Docker Compose → Backend + Frontend

🧪 Test

Check if backend is working:
```bash
curl http://<server-ip>:8000/api/
```
Expected response:
```bash
{"articles": "http://<server-ip>:8000/api/articles"}
```
🌍 Frontend
```bash
http://<your-server-ip>
```
🎉 That’s it! You now have Conduit running with a full CI/CD pipeline.
