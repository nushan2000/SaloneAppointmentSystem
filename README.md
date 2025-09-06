# 💇 Salone Appointment Booking System - Microservices Architecture

A comprehensive **salone appointment and booking platform** built with microservices architecture, featuring user authentication, appointment scheduling, and real-time notifications.

---

## 👥 Group Members

| Name                      | Registration Number |
|---------------------------|--------------------|
| Ediriwickrama E.A.N.H.    | EG/2020/3920       |
| Nipun N.M.A.C.            | EG/2020/4100       |
| Prabuddhika R.P.H.        | EG/2020/4116       |
| Vindyani K.A.C.H.         | EG/2020/4253       |

**Group No:** 7

---

## 🏗️ Architecture Overview

This application follows a microservices architecture with the following components:

- **API Gateway** (Port 4000) – Central entry point routing requests to appropriate services
- **Auth Service** (Port 5000) – JWT token validation and authentication
- **Appointment Service** (Port 5001) – Appointment CRUD operations and management  
- **Notification Service** (Port 5002) – Real-time notifications via **Kafka messaging**
- **Frontend** (Port 3000) – React.js web application for customers and staff

### Supporting Infrastructure
- **MongoDB** – Database for users, appointments, and notifications
- **Kafka** – Message broker for asynchronous communication
- **Docker & Kubernetes** – Containerization and orchestration for deployments

---

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js 18+ (for local development)
- Kubernetes cluster (for K8s deployment)
- Minikube (for local Kubernetes testing)

---

### Option 1: Docker Compose (Recommended for Dev)

```bash
# 1. Clone the repository
git clone https://github.com/your-username/salone-booking-system.git
cd salone-booking-system

# 2. Start all services
docker-compose up --build

# 3. Access the application
# Frontend: http://localhost:3000
# API Gateway: http://localhost:4000
# MongoDB: mongodb://localhost:27017
```

---

### Option 2: Kubernetes Deployment

#### For Production Kubernetes Cluster

```bash
# 1. Create namespace and configs
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/secrets.yaml
kubectl apply -f k8s/configmap.yaml

# 2. Deploy databases and Kafka
kubectl apply -f k8s/mongodb-deployment.yaml
kubectl apply -f k8s/kafka-deployment.yaml

# 3. Deploy microservices
kubectl apply -f k8s/auth-deployment.yaml
kubectl apply -f k8s/appointment-deployment.yaml
kubectl apply -f k8s/notification-deployment.yaml
kubectl apply -f k8s/api-gateway-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml

# 4. Get external IPs
kubectl get services -n salone-booking
```

#### For Minikube Testing

```batch
:: Windows
deploy.bat deploy
deploy.bat status
deploy.bat port-forward
deploy.bat cleanup
deploy.bat urls
```

```bash
# Linux/Mac
./deploy.sh deploy
./deploy.sh status
./deploy.sh port-forward
./deploy.sh cleanup
./deploy.sh urls
```

---

## 🔧 Configuration

### Environment Variables

```env
# Database URL
MONGODB_URI=mongodb://admin:password123@localhost:27017/salone?authSource=admin

# JWT Secret
JWT_SECRET_KEY=your-super-secret-jwt-key

# Service URLs
AUTH_SERVICE_URL=http://localhost:5000
APPOINTMENT_SERVICE_URL=http://localhost:5001
NOTIFICATION_SERVICE_URL=http://localhost:5002
BASE_URL=http://localhost:4000

# Frontend
FRONTEND_URL=http://localhost:3000
```

---

## 🎯 Features

```text
✅ User Authentication – Secure sign-in & sign-up with JWT
✅ Appointment Scheduling – Book, update, or cancel salone appointments
✅ Notifications – Kafka-based real-time notifications
✅ API Gateway – Routes requests across services
✅ Scalability – Deployable via Kubernetes with rolling updates
```

---

## 🧪 Testing the Application

```text
1. User Registration & Login
   - Go to http://localhost:3000
   - Register and log in with credentials

2. Appointment Management
   - Book a new appointment
   - Update or cancel existing appointments

3. Notifications
   - Appointment booking triggers a Kafka event
   - Notification service processes and sends alert
```

---

## 🛠️ Tech Stack

```text
Backend: Node.js, Express.js
Frontend: React.js
Database: MongoDB
Message Queue: Kafka
Orchestration: Docker, Kubernetes
```

---

## 🏗️ Microservices Architecture

```
+-------------------+         +-------------------+
|   Frontend (3000) | ----->  |  API Gateway(4000)|
+-------------------+         +-------------------+
                                      |
        +-----------------------------+-----------------------------+
        |                             |                             |
        v                             v                             v
+-------------------+      +-----------------------+      +--------------------------+
| Auth Service      |      | Appointment Service   |      | Notification Service     |
| (5000)            |      | (5001)                |      | (5002)                   |
+-------------------+      +-----------------------+      +--------------------------+
        |                             |                             ^
        |                             |                             |
        v                             v                             |
   +-------------------+        +-------------------+               |
   |    MongoDB        |<-------+                   |               |
   +-------------------+        |      Kafka        +---------------+
                                +-------------------+
```

**What this shows:**
- Frontend calls **API Gateway**.  
- API Gateway routes to **Auth**, **Appointment**, and **Notification** services.  
- **Auth** and **Appointment** both connect to **MongoDB**.  
- **Appointment** publishes events to 

---

## 📂 Project Structure

```text
salone-booking-system/
├── api-gateway/             # API Gateway
├── auth-service/            # Authentication microservice
├── appointment-service/     # Appointment microservice
├── notification-service/    # Notification microservice
├── frontend/                # React frontend
├── k8s/                     # Kubernetes YAML files
├── docker-compose.yml       # Docker Compose config
└── README.md                # Documentation
```

---

## 📊 System Workflow

```text
1. User signs up/logs in → Auth Service validates & issues JWT
2. User books appointment → Appointment Service stores in MongoDB
3. Kafka publishes event → Notification Service sends alert
4. Frontend UI → Communicates via API Gateway
```

---

## 🔍 Health Checks

```text
API Gateway: http://localhost:4000/health
Appointment Service: http://localhost:5001/health
Auth Service: http://localhost:5000/health
Notification Service: http://localhost:5002/health
```

---

## 🐳 Docker Images

```text
nushan2000/saloneappointmentsystem-frontend:latest
nushan2000/saloneappointmentsystem-auth-service:latest
nushan2000/saloneappointmentsystem-appointment-service:latest
nushan2000/saloneappointmentsystem-api-gateway:latest
nushan2000/saloneappointmentsystem-notification-service:latest
```


---

## 📜 License

```text
This project is licensed under