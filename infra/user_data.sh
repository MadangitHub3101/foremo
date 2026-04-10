#!/bin/bash

# Update system
apt update -y

# Install Docker & Git
apt install -y docker.io git

systemctl start docker
systemctl enable docker

# Go to home
cd /home/ubuntu

# Clone your repo
git clone https://github.com/MadangitHub3101/foremo.git

cd foremo

# Build backend
docker build -t backend ./backend

# Build frontend
docker build -t frontend ./frontend

# Run containers
docker run -d -p 4005:4005 --name backend backend
docker run -d -p 80:80 --name frontend frontend