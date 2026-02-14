# Profile Project

A full-stack application for viewing and editing user profiles, built with React and Spring Boot.

## Project Structure

- **frontend**: React application built with Vite and Tailwind CSS.
- **backend**: Spring Boot application with Spring Data JPA and PostgreSQL.

## Technologies Used

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- Lucide React (Icons)

### Backend
- Java 17
- Spring Boot 3.2.2
- Spring Data JPA
- PostgreSQL
- Lombok

## Prerequisites

- Node.js (v18+ recommended)
- Java Development Kit (JDK) 17
- Maven
- PostgreSQL Database

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Configure your database settings in `src/main/resources/application.properties`.
3. Build and run the application:
   ```bash
   mvn spring-boot:run
   ```
   The backend server will start at `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   The frontend application will be available at `http://localhost:5173`.




