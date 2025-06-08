# Local Kubernetes Setup

This folder contains example manifests to run the application with Kubernetes using local Docker images. These steps assume you are using a local cluster such as **minikube** or **kind**.

## Build images

From the repository root run:

```bash
# build backend image
docker build -t backend:local ./backend

# build frontend image
docker build -t frontend:local ./frontend
```

## Start the cluster

Apply all manifests in this folder:

```bash
kubectl apply -f k8s/
```

The frontend will be exposed through the `frontend` service on port `3000` and the backend on `4000` inside the cluster.
