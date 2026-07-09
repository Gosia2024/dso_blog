# Baby Tools Shop — E-Commerce Project

<!--INSERT YOUR BRIEF DESCRIPTION HERE -->
This page documents how I configured my very first cloud server instance in the Developer Akademie DevSecOps Course.

## TOC

<!--INSERT YOUR TABLE OF CONTENTS HERE -->

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition
  link="https://github.com/Gosia2024/baby-tools-shop"
  title="Github Tip"
  type="tip"
/>

# Baby Tools Shop — E-Commerce Project

## Table of Contents

* [Project Overview](#project-overview)
* [Quickstart](#quickstart)
* [Usage](#usage)
  * [Project Setup & Development Instructions](#project-setup--development-instructions)
  * [Security & Environment Configuration](#security--environment-configuration)
  * [Docker Setup](#docker-setup)
  * [Deployment on the Server](#deployment-on-the-server)
  * [Project Screenshots](#project-screenshots)

---

## Project Overview

This project is a **fork** of the original [Baby Tools Shop](https://github.com/Developer-Akademie-GmbH/baby-tools-shop) repository by Developer Akademie GmbH.
It has been cloned and customized for personal development and deployment.

---

## Quickstart

This section provides a brief guide to get the project running quickly.

### Prerequisites


- **Python 3.9** – Programming language  
- **venv (Virtual Environment)** – Dependency isolation  
- **Docker** – (Added in this fork) for containerized deployment and consistent environments  


### Quickstart Steps

This section provides a quick guide to run the project using Docker.


### Steps

#### 1. Clone the repository from GitHub
```bash
git clone https://github.com/Gosia2024/baby-tools-shop.git
```
# 2. Navigate into the project directory
```bash
cd baby-tools-shop
```

# 3. Build the Docker image using the Dockerfile
```bash
docker build -t babyshop .
```

# 4. Run the container with environment variables and port mapping
```bash
docker run --env-file .env -p 8025:8025 --name babyshop babyshop
```

🌐 Open in your browser:

Application: http://localhost:8025

Admin Panel: http://localhost:8025/admin


---
## Usage


After starting the project via Docker (see [Quickstart](#quickstart)), you can:

- Access the application at: `http://localhost:8025`
- Access the admin panel at: `http://localhost:8025/admin`

If you prefer to run the project locally (without Docker), that’s also possible.

🛠️ Please refer to the following sections to configure and run the application manually:

- [Project Setup & Development Instructions](#project-setup--development-instructions)
- [Security & Environment Configuration](#security--environment-configuration)

🚀 For containerized or production deployment, see:

- [Docker Setup](#docker-setup)
- [Deployment on the Server](#deployment-on-the-server)

### 2. Creating and Activating a Virtual Environment

* Created a virtual environment:

```powershell
python -m venv venv
```

* Activated the environment:

```cmd
"venv\Scripts\activate"
```

* Removed original activate script to avoid Python version conflicts.

### 3. Installing Dependencies

```bash
pip freeze > requirements.txt
```

### 4. Running the Development Server

```bash
python manage.py runserver
```

* Resolved migration errors by applying migrations.

### 5. Applying Migrations

```bash
python manage.py migrate
```

### 6. Creating a Superuser

```bash
python manage.py createsuperuser
```

### 7. Installing Pillow for Image Support

```bash
pip install Pillow
pip freeze > requirements.txt
```

### 8. Verifying Local Functionality

* Uploaded images in admin panel.
* Confirmed correct product display and error-free operation locally.

---

## Security & Environment Configuration


* Created `.env` file with:
  
Then replace the `DJANGO_SECRET_KEY` with a real secret key.  
You can generate one using Python:

```python
from django.core.management.utils import get_random_secret_key
print(get_random_secret_key())

```env

DJANGO_SECRET_KEY=your_real_secret_key
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=127.0.0.1,localhost

```
You can copy the example env file and then adjust it:

```bash
cp example.env .env


* Added `.env` to `.gitignore`.
* Updated `settings.py` to load from `.env`.

---
````
## Docker Setup

You can view it [here](./Dockerfile).
This setup enables containerized development and testing of the Baby Tools Shop app.
```

### Building and Running

```bash
docker build -t babyshop .
docker run -p 8025:8025 babyshop
```

* Access at `http://<your_ip>:8025`
* Admin at `http://<your_ip>:8025/admin`

---

## Deployment on the Server

### Steps

1. SSH into server, navigate home:

```bash
cd ~
```

2. Clone your fork and checkout the feature branch:

```bash
git clone -b feature/docker-setup https://github.com/Gosia2024/baby-tools-shop.git
cd baby-tools-shop
```

3. Edited `.env.production`:

```env
DJANGO_SECRET_KEY=your_secret_key
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=127.0.0.1,localhost,your_server_ip
```

4. Build image:

```bash
docker build -t babyshop .
```

5. Run container:

```bash
docker run --env-file .env.production -p 8025:8025 --name babyshop babyshop
```

6. Create superuser:

```bash
docker exec -it babyshop python manage.py createsuperuser
```

7. Access app:

```
http://<your_server_ip>:8025/
```

and admin:

```
http://<your_server_ip>:8025/admin/

```
## Project Screenshots

##### Home Page with login

<img alt="Home Page with login" src="https://raw.githubusercontent.com/Gosia2024/baby-tools-shop/feature/docker-setup/project_images/home.png" />


##### Home Page with filter

<img alt="Home Page with filter" src="https://github.com/MET-DEV/Django-E-Commerce/blob/master/project_images/capture_20220323080840305.jpg"></img>

##### Product Detail Page

<img alt="Product Detail Page" src="https://github.com/MET-DEV/Django-E-Commerce/blob/master/project_images/capture_20220323080934541.jpg"></img>

##### Home Page with no login

<img alt="Home Page with no login" src="https://github.com/MET-DEV/Django-E-Commerce/blob/master/project_images/capture_20220323080953570.jpg"></img>

##### Register Page

<img alt="Register Page" src="https://github.com/MET-DEV/Django-E-Commerce/blob/master/project_images/capture_20220323081016022.jpg"></img>

##### Login Page

<img alt="Login Page" src="https://github.com/MET-DEV/Django-E-Commerce/blob/master/project_images/capture_20220323081044867.jpg"></img>

---

