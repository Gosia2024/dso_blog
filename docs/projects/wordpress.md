
# WordPress Docker Project
# 🚛 Truck Signs API


<!--INSERT YOUR BRIEF DESCRIPTION HERE -->
This page documents how I configured my very first cloud server instance in the Developer Akademie DevSecOps Course.

## TOC

<!--INSERT YOUR TABLE OF CONTENTS HERE -->

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition
  link="https://github.com/Gosia2024/wordpress"
  title="Github Tip"
  type="tip"
/>

# WordPress Docker Project

## Table of Contents

- [WordPress Docker Project](#wordpress-docker-project)
- [🚛 Truck Signs API](#-truck-signs-api)
  - [TOC](#toc)
- [WordPress Docker Project](#wordpress-docker-project-1)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Quickstart](#quickstart)
    - [Prerequisites](#prerequisites)
    - [Run](#run)
    - [Usage](#usage)
    - [Configuration](#configuration)
      - [Docker Compose details](#docker-compose-details)
    - [Restarting the setup](#restarting-the-setup)
    - [Creating the .env File](#creating-the-env-file)
    - [Logging into WordPress and Adding a Test Post](#logging-into-wordpress-and-adding-a-test-post)
  - [Security Notes](#security-notes)
  - [Testing](#testing)

## Description

This repository contains a Docker Compose setup to deploy a WordPress site with a MySQL database.  
The setup uses official Docker images, persists data with Docker volumes, and configures environment variables for flexibility.  
The purpose is to provide a ready-to-run WordPress environment suitable for deployment on a cloud VM.

## Quickstart

### Prerequisites

- Docker installed ([docs.docker.com/get-docker](https://docs.docker.com/get-docker/))
- Docker Compose installed ([docs.docker.com/compose/install](https://docs.docker.com/compose/install/))
- Access to a machine or VM where you want to deploy

### Run

1. Clone this repository and navigate into the project folder:

```bash
git clone https://github.com/Gosia2024/wordpress.git
cd wordpress
```

1. Create a .env file in the project root (see Creating the .env File).
1. Start the containers:

```bash
docker-compose up -d
```

Open your browser and go to [http://localhost:8080](http://localhost:8080)
(or [http://YOUR_VM_IP:8080](http://YOUR_VM_IP:8080) on your cloud VM).


### Usage

### Configuration

Environment variables are set in the .env file:

- `WORDPRESS_DB_USER` — MySQL user for WordPress  
- `WORDPRESS_DB_PASSWORD` — Password for MySQL user  
- `WORDPRESS_DB_NAME` — Database name  
- `MYSQL_ROOT_PASSWORD` — Root password for MySQL  

You can modify these values in your `.env` file before starting the containers.

#### Docker Compose details

Two services are defined:

- `wordpress` — runs the WordPress application  
- `db` — runs the MySQL database  
Both services run on the default Docker network created by Compose to allow communication.  
Both services use `restart: on-failure` to automatically restart if they exit unexpectedly.

Volumes (wordpress_data, db_data) persist data between container restarts.

### Restarting the setup

To stop the services:

```bash
docker-compose down
```

Your WordPress data and database will persist across restarts due to volume usage.

### Creating the .env File

On your local machine or server, create the .env file in the root directory of the project.

Paste the following environment variables into the file:

```bash
WORDPRESS_DB_USER=wordpressuser
WORDPRESS_DB_PASSWORD=securepassword
WORDPRESS_DB_NAME=wordpressdb
MYSQL_ROOT_PASSWORD=rootpassword
```

Save the file with Ctrl + O, press Enter, and exit with Ctrl + X.

### Logging into WordPress and Adding a Test Post

After you complete the WordPress installation and log in:

1. Navigate to the WordPress admin dashboard.

1. Go to Posts → Add New.

1. Create a test post, for example, titled "Hello World".

1. Publish the post.

1. Verify that the post appears on the homepage of your WordPress site.

This confirms that your WordPress installation is working properly and data persistence is functioning as expected.

## Security Notes

- Do not store passwords, tokens, or sensitive information directly in the repository.  
- Use environment variables defined in the `.env` file for all sensitive data.  
- The `.env` file is included in `.gitignore` to prevent accidental commits.  
- Use `${VARIABLE_NAME}` syntax in `docker-compose.yaml` to reference environment variables.  
- Follow naming conventions: environment variables should be uppercase with underscores.

## Testing

Before submitting the project, ensure:

- WordPress is accessible at the IP address of your cloud VM on port 8080.
- You can log in with the configured admin user credentials.
- Data remains intact after restarting the containers.
- Containers automatically restart if they exit unexpectedly.
