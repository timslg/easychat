# EasyChat

This is a simple chat application built with Angular, Express, and Socket.io.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Production Usage](#production-usage)

## Features

- Real-time chat with Socket.io
- User leaderboard with message count

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- Angular CLI installed (`npm install -g @angular/cli`)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/timslg/easychat.git
   cd easychat
   ```
   
2. **Install server dependencies and run server:**

   ```bash
   cd easychat-backend
   npm install
   npm run dev
   ```
   The server is available at http://localhost:3000

3. **Install server dependencies and run server:**

   ```bash
   cd ../easychat-frontend
   npm install
   npm run start
   ```
   The client is available at http://localhost:4200

## Usage
- Open your browser and navigate to http://localhost:4200.
- Enter a username in the user profile section.
- Start chatting in the chat section.

## Production Usage
- After the deployment, the app is also available at: https://easychat.chatnroll.org
