# Healthcare Appointment Booking System

## Project Overview
The **Healthcare Appointment Booking System** is a comprehensive platform designed to streamline the process of booking appointments with doctors and hospitals. Built using the **MERN stack** (MongoDB, Express, React, Node.js), this application provides users with a user-friendly experience for managing their healthcare appointments while allowing administrators to manage doctors, users, and appointments efficiently.

---

## Features

### User Features
- **User Authentication**: Secure login and registration for users.
- **Forgot Password**: Users can reset their password securely through email verification.
- **Doctor Selection**: Search and select doctors based on specialty and location.
- **Appointment Booking**: Book appointments by selecting available dates and times.
- **Appointment Preview**: View booked appointments with details such as doctor name, date, time, specialty, and location.
- **Appointment Cancellation**: Cancel appointments if needed.

### Admin Features
- **Admin Panel**: Admins can manage doctors, hospitals, users, and appointments.
- **View User Data**: Fetch and view a list of registered users.
- **Manage Appointments**: Monitor and update the appointment statuses.

### General Features
- **Forgot Password & Reset Password**:
  - Users can request a password reset by providing their email address.
  - A reset link is sent to the user’s email for securely updating their password.
- **Secure Backend**: All sensitive operations are secured with JWT-based authentication and environment-specific configurations.

---

## Technologies Used

### Frontend
- **React.js**: Component-based library for building user interfaces.
- **Material-UI**: For styling and reusable components.
- **React Router**: Enables seamless navigation and routing.

### Backend
- **Node.js**: JavaScript runtime for backend development.
- **Express.js**: Lightweight framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for managing data efficiently.

### Other Technologies
- **CORS**: For cross-origin resource sharing.
- **dotenv**: Manage environment variables.
- **Nodemailer**: Send emails for password reset functionality.

---

## Installation

### Clone the Repository
```bash
$ git clone https://github.com/yourusername/healthcare-appointment-booking.git
```

### Navigate to the Project Directory
```bash
$ cd Healthcare-App-main
```

### Install Dependencies

#### Backend
```bash
$ cd backend
$ npm install

```

#### Frontend
```bash
$ cd frontend
$ npm install

```

### Set Up Environment Variables
1. Create a `.env` file in the `backend` directory.
2. Add the following configurations:
   ```
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret-key>
   SMTP_HOST=<your-email-smtp-host>
   SMTP_PORT=<your-email-smtp-port>
   SMTP_USER=<your-email-address>
   SMTP_PASSWORD=<your-email-password>
   FRONTEND_URL=<frontend-url>
   ```

### Start the Application

#### Backend
```bash
$ cd backend
$ npm run start  # or node server.js
```

#### Frontend
```bash
$ cd frontend
$ npm start
```

---

## API Endpoints

### Authentication
- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Log in an existing user.
- **POST** `/api/auth/forgot-password`: Request a password reset link.
- **POST** `/api/auth/reset-password/:token`: Reset the password using the token sent to the email.

### Appointments
- **POST** `/api/appointments/book`: Book a new appointment.
- **GET** `/api/appointments`: Fetch all appointments for the user.
- **DELETE** `/api/appointments/:id`: Cancel an appointment by ID.

### Admin Management
- **GET** `/api/admin/users`: Fetch all users (admin functionality).
- **GET** `/api/admin/appointments`: Fetch all appointments.

---

## Usage

### User Instructions
1. Visit the homepage to view available options.
2. Register or log in to your account.
3. Select a doctor using the search feature (filter by specialty or location).
4. Book an appointment by choosing an available date and time.
5. View and manage your appointments in the "Appointments" section.
6. If needed, reset your password using the "Forgot Password" feature.

### Admin Instructions
1. Log in as an admin.
2. Access the admin panel to manage users, doctors, and appointments.

---

## Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

