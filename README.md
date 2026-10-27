
# Tutedude Kubernetes Assignment

## Project Overview

This project deploys a Flask backend and an Express.js frontend on a local Kubernetes cluster using Minikube.

The frontend communicates with the backend through a Kubernetes ClusterIP Service.

## Technologies Used

- Docker
- Kubernetes
- Minikube
- Flask
- Express.js
- YAML

## Project Structure

- `backend/` — Flask application and Dockerfile
- `frontend/` — Express application and Dockerfile
- `kubernetes/` — Kubernetes Deployment and Service manifests

## Kubernetes Resources

| Resource | Purpose |
|---|---|
| `flask-deployment` | Runs the Flask backend |
| `flask-service` | Internal access to the backend |
| `frontend-deployment` | Runs the Express frontend |
| `frontend-service` | Exposes the frontend using NodePort |

## Deployment Commands

Start Minikube:

```bash
minikube start --driver=docker
```

Deploy the application:

```bash
kubectl apply -f kubernetes/
```

Verify the resources:

```bash
kubectl get deployments,pods,services
```

## Testing

The application was tested through the Express frontend, which displayed the Flask backend status as running.

## Screenshots and Documentation

Refer to the Word document included with the assignment for deployment evidence, screenshots, and detailed explanations.

## Author

Pratheesh Babu
