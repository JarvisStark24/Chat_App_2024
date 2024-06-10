# Chat_App_24

Welcome to Chat_App_24, a real-time chat application built using modern web technologies. This README file provides an overview of the project, installation instructions, and key features.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features
- Real-time messaging with Socket.io
- User authentication using JWT
- Secure password hashing with bcryptjs
- Responsive and modern UI with React and Tailwind CSS
- State management using Zustand
- Notifications with React Hot Toast

## Technologies Used

### Backend
- **Express**: Web framework for Node.js
- **Mongoose**: MongoDB object modeling for Node.js
- **Socket.io**: Real-time, bidirectional event-based communication
- **jsonwebtoken**: JWT implementation for Node.js
- **bcryptjs**: Password hashing
- **cookie-parser**: Parse cookies
- **dotenv**: Environment variable management

### Frontend
- **React**: JavaScript library for building user interfaces
- **React DOM**: Entry point for React in the web
- **React Hot Toast**: Notification library
- **React Icons**: Icon library
- **React Router DOM**: Declarative routing for React
- **Socket.io Client**: Socket.io client library
- **Zustand**: State management library

### Development Tools
- **Vite**: Next generation frontend tooling
- **ESLint**: Linting utility for JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **DaisyUI**: Tailwind CSS component library
- **PostCSS**: Tool for transforming CSS with JavaScript plugins
- **Autoprefixer**: PostCSS plugin to parse CSS and add vendor prefixes
- **TypeScript Types**: Type definitions for React and React DOM

## Installation

### Prerequisites
- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)
- MongoDB

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/Chat_App_24.git
    cd Chat_App_24/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the `backend` directory and add the following variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the `frontend` directory:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and go to `http://localhost:3000` to view the application.
2. Register a new account or log in with existing credentials.
3. Start chatting in real-time with other users.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Thank you for using Chat_App_24! If you have any questions or feedback, please feel free to reach out.
