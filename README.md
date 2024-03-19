# waldo
Where's Waldo (A Photo Tagging App)

Waldo is a Node.js web application that provides an API for managing coordinates and users. It allows users to interact with coordinates and track users' game progress.

## Features

- **Coordinate Management**: Allows retrieval of coordinate lists and information about specific coordinates.
- **User Management**: Supports user creation, listing, and updating user information.
- **Game Tracking**: Tracks user progress in the game, including start date, duration, and completion status.
- **Cross-Origin Resource Sharing (CORS)**: Supports CORS to enable communication with the API from any origin.

## Getting Started

To get started with Waldo, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Ismat-Samadov/waldo.git
   ```

2. Install dependencies:

   ```bash
   cd waldo
   npm install
   ```

3. Set up environment variables:
   
   Create a `.env` file in the root directory and define the following variables:

   ```plaintext
   MONGODB_URL=<your_mongodb_connection_string>
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will start at `http://localhost:3000` by default.

## API Endpoints

- **GET /coordinates**: Retrieve a list of all coordinates.
- **GET /coordinates/:name&:x&:y**: Retrieve information about a specific coordinate.
- **GET /users**: Retrieve a list of all users who have completed the game.
- **POST /users**: Create a new user.
- **POST /users/:id**: Update information about an existing user.

For detailed usage and request/response examples, refer to the [API documentation](API.md).

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements, bug fixes, or feature requests.
