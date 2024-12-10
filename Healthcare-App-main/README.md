Healthcare Appointment Booking System
Project Overview
This project is a comprehensive healthcare appointment booking system designed to simplify the process of booking appointments with doctors and hospitals. Built using React for the frontend and Node.js with Express for the backend [MERN stack], this application provides users with a seamless experience in managing their healthcare appointments.
Features
•	User Authentication: Secure login and registration for users.
•	Doctor Selection: Users can search and select doctors based on specialty and location.
•	Appointment Booking: Users can book appointments by selecting available dates and times.
•	Appointment Preview: Users can view their booked appointments with details such as doctor name, date, time, specialty, and location.
•	Appointment Cancellation: Users have the ability to cancel their appointments.
•	Admin Panel: Admins can manage doctors, hospitals, users, and appointments.
•	Responsive Design: The application is fully responsive, ensuring a smooth experience on both desktop and mobile devices.
Technologies Used
Frontend: 
- React.js
- Material-UI (for styling and components)
- React Router (for routing)

Backend: 
- Node.js
- Express.js
- MongoDB (for database management)

Other: 
- CORS (for cross-origin resource sharing)
- dotenv (for environment variable management)

Installation
•	Clone the Repository:
   git clone https://github.com/yourusername/healthcare-appointment-booking.git
•	Navigate to the Project Directory:
  
 cd healthcare-appointment-booking

•	Install Dependencies:

   For the backend:

   cd backend
   npm install

   For the frontend:

   cd ../frontend
   npm install

•	Set Up Environment Variables:

   Create a .env file in the backend directory and add your MongoDB connection string and other necessary configurations.

•	Start the Server:

   From the backend directory:
   npm run start / node server.js

•	Start the Frontend:

   From the frontend directory:
   npm start

API Endpoints
Authentication
•	POST /api/auth/register - Register a new user
•	POST /api/auth/login - Log in an existing user
Appointments
•	POST /api/appointments/book - Book a new appointment
•	GET /api/appointments - Fetch all appointments for the user
•	DELETE /api/appointments/:id - Cancel an appointment by ID
Admin Management
•	GET /api/admin - Fetch all users (admin functionality)
Usage
1. Visit the homepage to view available options.
2. Register or log in to your account.
3. Select a doctor using the doctor selection feature.
4. Book an appointment by choosing a date and time.
5. View and manage your appointments in the appointments preview section.

