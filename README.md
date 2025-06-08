# SaaS Investigator

A marketplace investigation platform for SaaS tools. This repository contains both
backend (NestJS) and frontend (Next.js) applications.

## Structure

- `backend/` – NestJS API connecting to PostgreSQL
- `frontend/` – Next.js React application styled with Tailwind CSS and using shadcn/ui with MagicUI components

## Getting Started

Each project contains its own `README.md` with instructions on how to run in
development mode. Make sure you have Node.js and PostgreSQL installed.

## Running with Kubernetes

For a local Kubernetes cluster (such as **minikube** or **kind**) you can build
the Docker images and apply the manifests from the `k8s/` folder:

```bash
docker build -t backend:local ./backend
docker build -t frontend:local ./frontend
kubectl apply -f k8s/
```

