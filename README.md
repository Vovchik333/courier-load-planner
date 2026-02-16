# Courier Load Planner

A full-stack application for managing courier assignments and order scheduling. Built with NestJS (backend) and React + Vite (frontend).

## Project Structure

```
courier-load-planner/
├── server/          # NestJS backend API
└── client/          # React frontend application
```

## Prerequisites

- **Node.js** (v18 or higher)
- **npm** (v9 or higher)

## Getting Started

Clone project with command:

```bash
git clone 
```

### 1. Start the Server

The server runs on `http://localhost:3000` by default.

```bash
# From the server directory
cd server

# Install server dependencies
npm install

# Development mode (with hot reload)
npm run start:dev
```

The API will be available at `http://localhost:3000/api`

**Note:** The server uses in-memory storage by default. Data will be reset on each server restart.

### 2. Start the Client

The client runs on `http://localhost:5173` by default.

```bash
# From the client directory
cd client

# Install client dependencies
npm install

# Development mode
npm run dev
```

### 3. Access the Application

Open your browser and navigate to:
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:3000/api

## Environment Variables

### Server

The server uses the following environment variables (optional):

Create a `.env` file in the `server` directory:

```env
PORT=3000
```

### Client

The client uses the following environment variables (optional):

Create a `.env` file in the `client` directory:

```env
VITE_API_URL=http://localhost:3000
```

If not set, it defaults to `http://localhost:3000`.
