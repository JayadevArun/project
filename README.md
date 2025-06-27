# WanderSnap

WanderSnap is a full-stack social platform built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to share travel memories by posting places with descriptions, geolocations, and images. With secure authentication and real-time geolocation using Google Maps API, users can easily create, update, and explore places across the globe.

## Key Features:

- User registration and authentication using JWT for secure login and access control.
- Create and manage places with title, description, location, and uploaded images.
- Google Maps API integration for accurate address-to-location conversion.
- View all places created by a specific user and enable role-based permissions to restrict editing/deletion to only the creator, 
- Image upload functionality using Multer with backend validation.
- Responsive design for optimal user experience across devices.

## Technologies Used:

- React.js: Frontend library for building the user interface.
- Node.js: JavaScript runtime for backend operations.
- Express.js: Web framework for building RESTful APIs.
- MongoDB: NoSQL database for user and place data storage.
- Mongoose: ODM for MongoDB with schema validation.
- JSON Web Tokens (JWT): For secure and stateless user authentication.
- Multer: Middleware for handling image uploads.
- Google Maps API: For geocoding and map-related features.

## Run Locally:

To run WanderSnap on your local machine, follow these steps:

#### Clone the repository
```bash
git clone https://github.com/YourUsername/WanderSnap
```

#### Navigate to the Backend Directory
```bash
cd WanderSnap/backend
```

#### Install Backend Dependencies
```bash
npm install
```

#### Start the Backend Server
```bash
npm start
```

#### Return to the Root Directory
```bash
cd ..
```

#### Navigate to the Frontend Directory
```bash
cd frontend
```

#### Install Frontend Dependencies
```bash
npm install
```

#### Start the Frontend Server
```bash
npm start
```

#### The WanderSnap website should now be running locally, open your browser and visit:
```bash
http://localhost:3000
```
