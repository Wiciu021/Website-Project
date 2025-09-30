# School Website Project

A cool **school website solution** with a content management system.  
It features a **public-facing portal** for school information and a secure **admin panel** for content management.

---

## Architecture & Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js, Express  
- **Database:** PostgreSQL  
- **Authentication:** Keycloak  
- **File Storage:** MinIO  
- **Containerization:** Docker  
- **Reverse Proxy:** Nginx  

---

## Features

### Public Portal
- News & Announcements  
- Teacher Profiles  
- Document Repository  
- Photo Gallery  
- Contact Form  

### Admin Panel
- Secure Authentication (via Keycloak)  
- Content Management  
- Document Upload  
- Image Management  

---

## Setup Instructions

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) and Docker Compose  
- [Node.js](https://nodejs.org/) (for local development only)  

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/your-org/school-website.git
   cd school-website
   ```
2. **Configure environment variables:**
  ```
  # Edit .env with your configuration skibidi
  ```
2. **Start services**
  ```
  docker compose up -d
  ```
  - This will start containers for the frontend, backend, database (Postgres), Keycloak, MinIO, and Nginx
  - Check running containers:
  ```
  docker compose ps
  ```
3. **Initialize the database**
  - Run your project's migration/seed script inside the backend container
  ```
  docker-compose exec backend npx prisma migrate deploy
  ```
4. **Configure Keycloak (first-time setup):**
  - Access Keycloak admin: http://localhost:8080/admin/
  - Login with admin/admin (or credentials from .env)
  - Create a new realm: school-realm
  - Create a client: school-admin
  - Create an admin role and user

--- 

## Authentication Flow

  - User navigates to /admin-panel
  - If not authenticated, redirect to Keycloak login
  - After successful login, Keycloak redirects back to admin panel
  - JWT token is used for API authorization

---

## Deployment
The project is designed to be deployed using Docker Compose. For production:

 1. Update environment variables for production settings
 2. Enable HTTPS in Nginx configuration
 3. Set up proper database backups
 4. Configure Keycloak for production use

--- 

## Troubleshooting

### Database Issues
  If tables are missing:
  ```
  docker-compose exec backend npx prisma migrate deploy
  ```
### Keycloak Authentication Issues
  should work

### File Upload Issues
Check MinIO bucket permissions and configuration:
  ```
  docker-compose exec backend node src/config/setupBuckets.js
  ```

---
**Note:** This project uses Docker for containerized deployment. Each component (frontend, backend, database, etc.)

