# 🚛 Truck Signs API


<!--INSERT YOUR BRIEF DESCRIPTION HERE -->
This page documents how I configured my very first cloud server instance in the Developer Akademie DevSecOps Course.

## TOC

<!--INSERT YOUR TABLE OF CONTENTS HERE -->

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition
  link="https://github.com/Gosia2024/truck_signs_api"
  title="Github Tip"
  type="tip"
/>
<div align="center">



# 🚛 Truck Signs API

![Python version](https://img.shields.io/badge/Python-3.8.10-4c566a?logo=python&logoColor=white&colorB=pink&style=flat-square&colorA=4c566a)
![Django version](https://img.shields.io/badge/Django-2.2.8-4c566a?logo=django&logoColor=white&colorB=pink&style=flat-square&colorA=4c566a)
![DRF version](https://img.shields.io/badge/DRF-3.12.4-4c566a?logo=django&logoColor=white&colorB=pink&style=flat-square&colorA=4c566a)

</div>

---

## 📑 Table of Contents
- [🚛 Truck Signs API](#-truck-signs-api)
  - [TOC](#toc)
- [🚛 Truck Signs API](#-truck-signs-api-1)
  - [📑 Table of Contents](#-table-of-contents)
  - [⚙️ Prerequisites](#️-prerequisites)
  - [⚡ Quickstart](#-quickstart)
  - [⚙️ Environment Variables](#️-environment-variables)
  - [🧪 Usage](#-usage)
  - [🚀 Deployment on V-Server](#-deployment-on-v-server)
  - [💻 Technologies](#-technologies)
  - [📌 Additional Notes](#-additional-notes)
  - [🛠 Troubleshooting](#-troubleshooting)

---

## ⚙️ Prerequisites

Before running the application, make sure you have:

- Docker (>= 27)
- Git
- Open ports: `8020` (API) and `5432` (PostgreSQL)

---

## ⚡ Quickstart

**1. Clone this repository**

```bash
git clone https://github.com/Gosia2024/truck_signs_api.git
cd truck_signs_api
```
2. Copy the example environment file
```bash
cd truck_signs_designs/settings
cp simple_env_config.env .env
```
⚠️ This .env contains only insecure example values.
Replace them with real secrets for production use.

3. Build and run the containers
```bash
docker build -t trucks-api:local .
docker network create trucks-net 2>/dev/null || true

docker run -d --name ts-db \
  --network trucks-net \
  --env-file ./db.env \
  -p 5432:5432 \
  -v pgdata:/var/lib/postgresql/data \
  --restart unless-stopped \
  postgres:13

docker run -d --name ts-api \
  --network trucks-net \
  -p 8020:8020 \
  --env-file ./.env.app \
  --restart unless-stopped \
  trucks-api:local
```
4. Check containers are running
```bash
docker ps
```
5. Open the application
- Admin panel → http://localhost:8020/admin

- Example endpoint → http://localhost:8020/truck-signs/categories/
## ⚙️ Environment Variables
db.env (PostgreSQL container):
```bash
POSTGRES_DB=trucks
POSTGRES_USER=truckuser
POSTGRES_PASSWORD=CHANGE_ME
```
.env.app (Django container):
```bash
# --- CORE ---
DOCKER_SECRET_KEY=CHANGE_ME
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
DJANGO_DEBUG=False

# --- DB (must match db.env) ---
DOCKER_DB_NAME=trucks
DOCKER_DB_USER=truckuser
DOCKER_DB_PASSWORD=CHANGE_ME
DOCKER_DB_HOST=ts-db
DOCKER_DB_PORT=5432

# --- AUTO SUPERUSER (optional) ---
DJANGO_SUPERUSER_USERNAME=admin
DJANGO_SUPERUSER_EMAIL=admin@example.com
DJANGO_SUPERUSER_PASSWORD=CHANGE_ME

# --- STRIPE (dummy) ---
DOCKER_STRIPE_PUBLISHABLE_KEY=dummy
DOCKER_STRIPE_SECRET_KEY=dummy
DOCKER_STRIPE_WEBHOOK_SECRET=dummy

# --- EMAIL (console backend) ---
DOCKER_EMAIL_BACKEND=django.core.mail.backends.console.EmailBackend
DOCKER_EMAIL_HOST=localhost
DOCKER_EMAIL_PORT=1025
DOCKER_EMAIL_USE_TLS=False
DOCKER_EMAIL_HOST_USER=dummy
DOCKER_EMAIL_HOST_PASSWORD=dummy
DEFAULT_FROM_EMAIL=app@example.com

# --- WSGI ---
DJANGO_SETTINGS_MODULE=truck_signs_designs.settings.test_docker
APP_MODULE=truck_signs_designs.wsgi:application
GUNICORN_APP_MODULE=truck_signs_designs.wsgi:application

```
## 🧪 Usage
Create a superuser
```bash
docker exec -it ts-api python manage.py createsuperuser
```
View logs
```bash
docker logs -f ts-api
docker logs -f ts-db
```
Restart containers
```bash
docker restart ts-api
docker restart ts-db
```
Update and redeploy
```bash
git pull
docker build -t trucks-api:local .
docker rm -f ts-api
docker run -d --name ts-api \
  --network trucks-net \
  -p 8020:8020 \
  --env-file ./.env.app \
  --restart unless-stopped \
  trucks-api:local
```
## 🚀 Deployment on V-Server

On your server (V-Server / VPS):

1. Clone and build
```bash
git clone https://github.com/Gosia2024/truck_signs_api.git
cd truck_signs_api
docker build -t trucks-api:local .
```
2. Adjust allowed hosts
- In .env.app set
```bash
DJANGO_ALLOWED_HOSTS=your.server.ip
```
3. Run containers
```bash
docker network create trucks-net 2>/dev/null || true

docker run -d --name ts-db \
  --network trucks-net \
  --env-file ./db.env \
  -p 5432:5432 \
  -v pgdata:/var/lib/postgresql/data \
  --restart unless-stopped \
  postgres:13

docker run -d --name ts-api \
  --network trucks-net \
  -p 8020:8020 \
  --env-file ./.env.app \
  --restart unless-stopped \
  trucks-api:local
```
4. Access on your server
- http://YOUR_SERVER_IP:8020/admin

- http://YOUR_SERVER_IP:8020/truck-signs/categories/
## 💻 Technologies

- Python 3.8.10

- Django 2.2.8

- Django REST Framework 3.12.4

- PostgreSQL 13

- Docker 27.2.0

- Gunicorn (WSGI server)

- WhiteNoise (static files)

## 📌 Additional Notes

- Project settings are split into environments (development, test_docker, production) inside truck_signs_designs/settings/

- The API exposes CRUD endpoints for categories, products, lettering items, orders and payments (Stripe)

- This project contains only the backend — static files are served by WhiteNoise inside the Gunicorn container
## 🛠 Troubleshooting
FATAL: password authentication failed for user "truckuser"
→ Passwords in db.env and .env.app do not match.
→ Remove the volume and recreate:
```bash
docker rm -f ts-db
docker volume rm pgdata
```
DisallowedHost
→ Add your IP/domain to DJANGO_ALLOWED_HOSTS and restart ts-api.

Static files not served
→ WhiteNoise serves static files; ensure collectstatic runs in entrypoint.

Line endings (Windows)
→ Ensure container-entrypoint.sh has LF endings and is executable:
```bash
git update-index --chmod=+x container-entrypoint.sh
```

