# CampusCareerLink
HACKATHON PROJECT: Eventify - University Club Event Management Platform

## Team Members
| Name                | Roll Number   | Email                                   | Role                             |
|---------------------|---------------|-----------------------------------------|----------------------------------|
| Srabani Mitra      | 20220104111   |srabanimitra2222@gmail.com              | Lead,Backend          |
| Nusrat Adiba       | 20220104113   | nusratadiba06@gmail.com                | Backend, Frontend     |
| Israt Jahan Minm   | 20220104137   |  israt.cse.20220105137@aust.edu            | Backend, Frontend     |

## Project Overview
"Eventify" — an event management portal specially designed
for university clubs. It allows club admins to organize events and students to register and view them.

## Title
Eventi~fy

## Key Features
- **User Management:**
  - Role-based access. Admin, User
  - Secure authentication (login/register).

   
- **Event Management:**
  - Students can view upcoming events..
  - Admins can create, edit, and delete events.
  - Event details: title, description, date/time, location, category, and optional image.
    
 - **Profile Management:**
   - Users can upload name, email, and phone number.
    
- **Application Management:**
  - Users can apply to jobs.
  - Admin can review applications and shortlist candidates.
   
- **Dashboard:**
  - Student Dashboard: Shows registered events and participation history.
  - Admin Dashboard: Displays admin-created events, quick stats (total events, upcoming events,                           attendees), and management options.
    
- **Notifications:**
  -Email or in-app alerts for event updates and registrations
   
## Target Audience
CampusCareerLink is designed for:

- **University Students:** Browse, register, and manage event participation.
- **Admins:** Create, manage, and track events efficiently.

## User Interface
- **Home Page:**
-Navigation (Login/Signup)
-Featured/upcoming events in card/list view
-Call-to-action buttons.

- **Student Dash Board:**
My Events, All Events, Logout.List of registered events with unregister options.Optional profile section.

- **Admin Dashboard:**
Navigation (Dashboard, Create Event, Logout), Event list with Edit/Delete buttons, Quick stats (total events, upcoming events, total attendees).

- **Event Detail Page:**
Full event info, Register/Unregister button, Number of participants.
## Usage
1. Access the platform through your browser at the specified address (e.g., `yet to be added`).
2. Navigate through the platform to:
   -Browse and register for events (Students)

-Create, edit, and delete events (Club Admins)

-Download participation certificates

-Interact with the FAQ chatbot.


## Setup Instructions

### Prerequisites
Before setting up the project, ensure you have the following installed:
- **PHP** (8.0.3 recommended)
- **Composer** (2.8.4 recommended)
- **XAAMP**(version 8 recommended) 
- **Node.js** (16.x or later)
- **NPM** (latest version)
- **Laravel** (latest version)
- **MySQL** or any preferred database
- **React.js** 

### Backend Setup (Laravel)
1. Navigate to the backend directory:
   ```sh
   cd api-backend
   ```
2. Install dependencies:
   ```sh
   composer install
   ```
3. Configure the environment:
   - Copy the `.env.example` file and rename it to `.env`:
     ```sh
     cp .env.example .env
     ```
   - Update database credentials in the `.env` file.

5. Run database migrations:
   ```sh
   php artisan migrate
   ```
6. Start the backend server:
   ```sh
   php artisan serve
   ```
   - This will provide a link (e.g., `http://127.0.0.1:8000`) to access the backend.

### Frontend Setup (React + Vite)
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```
   - This will provide a link (e.g., `http://localhost:5173`) to access the frontend.

### Running the Project
To run the full project:
1. Start the backend using:
   ```sh
   php artisan serve
   ```
2. Start the frontend using:
   ```sh
   npm run dev
   ```
3. Access the platform through the frontend link provided by Vite.

Now, you can visit the frontend link in your browser to use the application.
