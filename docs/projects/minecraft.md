# Minecraft Server in Docker

<!--INSERT YOUR BRIEF DESCRIPTION HERE -->
This page documents how I configured my very first cloud server instance in the Developer Akademie DevSecOps Course.

## TOC

<!--INSERT YOUR TABLE OF CONTENTS HERE -->

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition
  link="https://github.com/Gosia2024/minecraft_server"
  title="Github Tip"
  type="tip"
/>

## Table of Contents

1. [Description](#description)
2. [Quickstart](#quickstart)
3. [Usage](#usage)
4. [Configuration](#configuration)
5. [Persistence](#persistence)
6. [Testing](#testing)
7. [Security Notes](#security-notes)
8. [License](#license)

---

## Description

This repository provides a ready-to-use **production-grade Minecraft Java Edition server** running inside a Docker container.  
It uses `docker-compose` to simplify setup and supports persistent data storage so that your game world and configurations are preserved across restarts.

**Main contents:**

- `Dockerfile` for building the Minecraft server image
- `docker-compose.yml` for container orchestration
- `.env` file for environment variable configuration
- `server.properties` for Minecraft server settings

---

## Quickstart

### Prerequisites

- Docker installed
- Docker Compose installed
- Java Edition Minecraft client for testing (optional)

### Set up environment variables

```bash
cp .env.example .env
```

Edit .env with your desired settings before starting the server.

### Start the server

```bash
git clone git@github.com:Gosia2024/minecraft_server.git
```

```bash
cd minecraft_server
```

```bash
docker compose up -d
```

The server will be available on port 8888 of your host/VPS IP.

### Usage

## Environment variables

Configure your environment variables by copying .env.example to .env and modifying as needed.

To apply changes after editing .env:

```bash
docker compose down
```

```bash
docker compose up -d
```

## Editing server.properties

You can directly modify server.properties outside the container by editing it in the mounted volume and restarting the container.

### Configuration

| Variable             | Description                              | Default                 |
|----------------------|----------------------------------------|-------------------------|
| SERVER_PORT          | Port the server listens on              | 8888                    |
| ONLINE_MODE          | Enforces Mojang account authentication | true                    |
| MAX_PLAYERS          | Maximum number of players               | 20                      |
| DIFFICULTY           | Game difficulty (peaceful, easy, normal, hard) | normal           |
| GAMEMODE             | Game mode (survival, creative, etc.)   | survival                |
| MOTD                 | Message of the day                      | My Production MC Server |
| ENABLE_COMMAND_BLOCK | Enable command blocks                   | false                   |
| PVP                  | Enable PvP                             | true                    |

### Persistence

Game world data and configuration are stored in a Docker volume.  
This ensures:

- Worlds are not lost after server/container restarts.
- Configuration changes persist across deployments.

Example volume mapping (from docker-compose.yml):

```bash
volumes:
  - mc_data:/app/world
```

### Testing

## Option 1: Using mcstatus

Install mcstatus:

```bash
pip install mcstatus
```

Test connection:

```bash
python -m mcstatus <VPS-IP>:8888 status
```

## Option 2: Using Minecraft Java Client

- Launch Minecraft Java Edition.
- Select Multiplayer.
- Add a server with the address:

```bash
<VPS-IP>:8888
```

- Join and start playing.
  
### Security Notes

- Do not store passwords, tokens, or private keys in the repository.

- Use .env files for sensitive configurations and exclude them from Git (.gitignore).

- Do not commit your VPS IP address to the repository.

- Environment variables follow the convention: UPPER_CASE_WITH_UNDERSCORE.

- Always reference variables in scripts with `${VAR_NAME}` syntax.
  
### License

This project is for educational purposes. Check Minecraft's EULA before running the server publicly.
