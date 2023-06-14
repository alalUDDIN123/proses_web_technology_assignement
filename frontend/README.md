
## Proses Web Technology Assignment
### Tech Stack

The web application utilizes the following technologies in its stack:

- **Backend:**
  - Node.js - A JavaScript runtime environment for executing server-side code.
  - Express - A minimal and flexible web application framework for Node.js.
  - MongoDB - A NoSQL document database for storing and managing data.
  - Nodemon - A development tool that automatically restarts the server upon file changes.
  - Cors - A middleware for handling Cross-Origin Resource Sharing.
  - Dotenv - A module for loading environment variables from a `.env` file.

- **Frontend:**
  - React - A JavaScript library for building user interfaces.
  - Redux - A predictable state container for managing application state.
  - Redux-thunk - A middleware for handling asynchronous actions in Redux.

### Main Features

The web application includes the following main features:

1. Create user - Allows the creation of new user profiles.
2. Get user - Retrieves user information based on specified criteria.
3. Update user - Updates user details such as name, email, or other relevant information.
4. Delete user - Deletes a user profile from the system.

### Deployed Link

The application is deployed and can be accessed at: [https://unstop-train-reservation.netlify.app/](https://unstop-train-reservation.netlify.app/)

### How to Run Locally

To run the Seat Reservation System locally, follow these steps:

1. Clone or download the code repository.
2. Open the project folder in your preferred terminal or code editor, such as Visual Studio Code.
3. Install the required npm packages by running the following command in both the `client` and `server` directories:

   ```shell
   npm install
   ```

4. Start the backend server:

   - Navigate to the `backend` directory using the terminal.
   - Create a file called `.env` in the `backend` directory and add the following keys with the correct details:

     ```
     MONGO_URL=your_mongodb_url
     PORT=chosen_port_number
     ```

     Replace `your_mongodb_url` with your actual MongoDB URL or local MongoDB URL, and `chosen_port_number` with the desired port number (suggested: greater than 800).

   - Run the following command to start the server:

     ```shell
     npm run server
     ```

5. Start the frontend:

   - Open a new terminal instance.
   - Navigate to the `frontend` directory using the terminal.
   - Run the following command to start the frontend:

     ```shell
     npm run start
     ```

6. Once the server and frontend are up and running, you can access the Seat Reservation System locally by opening your web browser and visiting:

   [http://localhost:3000/](http://localhost:3000/)

### Contact Information

If you have any further inquiries or need additional information, please feel free to contact me via email or phone:

- Email: alalu75666@gmail.com
- Phone: +91 6002565574


