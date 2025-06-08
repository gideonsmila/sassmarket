# SaaS Investigator

A marketplace investigation platform for SaaS tools. This repository contains both
backend (NestJS) and frontend (Next.js) applications.

## Structure

- `backend/` – NestJS API connecting to PostgreSQL
- `frontend/` – Next.js React application styled with Tailwind CSS and using shadcn/ui with MagicUI components

## Getting Started

Each project contains its own `README.md` with instructions on how to run in
development mode. Make sure you have Node.js and PostgreSQL installed.

## Deployment with Helm

A basic Helm chart is provided in the `helm/` directory. To deploy the application to a Kubernetes cluster:

```bash
helm install saas-investigator ./helm
```

Adjust the container images and other settings in `helm/values.yaml` as needed.
