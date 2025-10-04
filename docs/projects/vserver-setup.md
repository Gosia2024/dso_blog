# V-Server Setup

<!--INSERT YOUR BRIEF DESCRIPTION HERE -->
This page documents how I configured my very first cloud server instance in the Developer Akademie DevSecOps Course.

## TOC

<!--INSERT YOUR TABLE OF CONTENTS HERE -->

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition
  link="https://github.com/Gosia2024/v-server-setup"
  title="Github Tip"
  type="tip"
/>

## 🖥️ V-Server Setup Guide

This documentation describes step-by-step how to configure your own Ubuntu-based V-Server – including SSH setup, NGINX web server, GitHub integration, and security best practices.

---

## 🔧 Requirements

- An Ubuntu server (e.g., from Hetzner, Netcup, AWS)
- SSH access to the server
- A GitHub account

---

## 📌 Step 1: SSH Key-Based Login

1. **Generate an SSH key pair** (on your local machine):

   ```bash
   ssh-keygen -t ed25519
   ```

2. **Copy your public key to the server**:

   ```bash
   ssh-copy-id user@server-ip
   ```

3. Now connect to your server without a password:

   ```bash
   ssh user@server-ip
   ```

---

## 🔒 Step 2: Disable Password Login

1. Open the SSH configuration file:

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

2. Change or add the following lines:

   ```
   PasswordAuthentication no
   PermitRootLogin no
   ```

3. Restart SSH:

   ```bash
   sudo systemctl restart ssh
   ```

✅ Make sure your SSH key login works before disabling password login!

---

## 🌐 Step 3: Install and Configure NGINX

1. Install NGINX:

   ```bash
   sudo apt update
   sudo apt install nginx
   ```

2. Create a directory for your custom homepage:

   ```bash
   sudo mkdir -p /var/www/myhomepage
   ```

3. Create an HTML file:

**Option A – Quick version with `echo`:**

   ```bash
   echo "Hello, NGINX! I have just configured our NGINX web server on Ubuntu Server!" | sudo tee /var/www/myhomepage/index.html
   ```

**Option B – Manual edit with `nano`:**

   ```bash
   sudo nano /var/www/myhomepage/index.html
   ```

   Example content:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>My NGINX Homepage</title>
   </head>
   <body>
     <h1>Hello from my own homepage!</h1>
     <p>This is a custom HTML page served by NGINX.</p>
   </body>
   </html>
   ```

4. Configure NGINX to serve the custom page:

   ```bash
   sudo nano /etc/nginx/sites-available/default
   ```

   Change:

   ```nginx
   root /var/www/myhomepage;
   index index.html;
   ```

5. Restart NGINX:

   ```bash
   sudo systemctl restart nginx
   ```

---

## 🧪 Test Your Setup

Open your browser and go to:

```
http://<your-server-ip>
```

✅ You should see your custom HTML page.

---

## 🔁 Step 4: Set Up Git and GitHub

1. Install Git (if not already installed):

   ```bash
   sudo apt install git
   ```

2. Configure Git with your name and email:

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```

🔐 Set up SSH Connection to GitHub (important!)

1. Generate a new SSH key on the server (VM):
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
2. Start the SSH agent and add the key:
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```
3. Show your public key:
```bash
cat ~/.ssh/id_ed25519.pub
```

4. Now go to GitHub → Settings → SSH and GPG Keys → New SSH Key
Paste the copied public key and give it a name (e.g., v-server).

3. Test the connection:
```bash
ssh -T git@github.com
```
You should see:
```text
Hi your-username! You've successfully authenticated, but GitHub does not provide shell access.
```

3. Initialize a new Git repository:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

4. Push to GitHub:

   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/v-server-setup.git
   git push -u origin main
   ```

5. Create a new branch:

   ```bash
   git checkout -b improved-readme
   ```

6. Make changes, push the branch, and open a Pull Request ✅

---

## 📦 Summary

- ✅ Secure login using SSH key
- ✅ Password login disabled
- ✅ NGINX web server with custom homepage
- ✅ Git and GitHub integration completed

---


