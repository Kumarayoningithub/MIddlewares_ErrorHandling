# Middleware Error Handling in Express

This project demonstrates custom error handling and middleware usage in an Express.js application built with Node.js.

---

## Features

- Custom error class (`ExpressError`) for HTTP status and error messages.
- Middleware to check query tokens for protected routes.
- Centralized error handling middleware.
- 404 page not found handling.
- Example API endpoints to demonstrate middleware and error handling.

---

## Project Structure

├── app.js # Main Express application with routes and middleware
├── ExpressError.js # Custom error class for HTTP errors
└── README.md # Project documentation


## Setup and Usage

1. **Clone the repository**

```bash
git clone https://github.com/Kumarayoningithub/MIddlewares_ErrorHandling.git
cd MIddlewares_ErrorHandling


## API Endpoints


GET /
Response: "Hi, I am root"

GET /random
Response: "hi, i am random"

GET /api?token=giveaccess

If token query parameter equals "giveaccess", response is "data".

Otherwise, returns an access denied error.

GET /admin
Throws a 403 Forbidden error with message: "Access to admin is forbidden"

GET /err
Simulates an error to test error handling middleware.

## Middleware Details
checkToken: Validates that the request has a query parameter token with value "giveaccess".
Throws an ExpressError with status 401 if invalid or missing.

Error Handling Middleware:
Captures errors thrown in routes or middleware and sends a response with the status code and message.

404 Middleware:
Handles unknown routes by sending "page not found!" with status 404.


## Custom Error Class: ExpressError

class ExpressError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
}


## Notes
This app is designed for learning Express middleware and error handling.

Test /api endpoint with and without the correct token query parameter to observe middleware effects.

The project can be extended with additional middleware or routes as needed.
