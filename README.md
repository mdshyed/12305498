# URL Shortener Backend API

A simple backend API for shortening URLs, built with Node.js, Express, and MongoDB.

## Features
- Shorten long URLs to short, shareable links
- List all short URLs
- Redirect to the original URL
- Delete short URLs via API
- Simple request logging

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm
- MongoDB (local or cloud, e.g., MongoDB Atlas)

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd AFFORD_MEDICAL
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

4. Start the server:
   ```sh
   node server.js
   ```
   

## Project Structure
```
AFFORD_MEDICAL/
  models/
    db.js           # MongoDB connection logic
    shorturl.js     # Mongoose schema/model for URLs
  middleware/
    logger.js       # Simple request logger
  server.js         # Express server and routes
  package.json      # Project metadata and dependencies
```

## API Endpoints

### Create a Short URL
- **POST** `/shorturls`
- **Body (JSON):**
  ```json
  { "url": "https://example.com" }
  ```
- **Response:**
  ```json
  { "_id": "...", "full": "https://example.com", "short": "AbC123", "__v": 0 }
  ```

### List All Short URLs
- **GET** `/shorturls`
- **Response:** Array of short URL objects

### Redirect to Original URL
- **GET** `/:short`
- **Response:** Redirects to the original URL

### Delete a Short URL
- **DELETE** `/shorturls/:id`
- **Response:**
  ```json
  { "success": true }
  ```

## Data Model
- `full` (String): The original long URL
- `short` (String): The generated short ID

## License
ISC 
