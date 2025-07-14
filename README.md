# URL Shortener

A simple Node.js, Express, and MongoDB-based URL shortener web application.

## Features
- Shorten long URLs to short, shareable links
- Track the number of clicks for each short URL
- Delete short URLs from the UI
- Responsive Bootstrap UI

## Tech Stack
- Node.js
- Express.js
- MongoDB (with Mongoose)
- EJS (Embedded JavaScript templates)


## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm
- MongoDB database (local or cloud, e.g., MongoDB Atlas)

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
3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   DB_URL=mongodb://localhost:27017/urlshortener
   PORT=3000
   ```
4. Start the server:
   ```sh
   npm run devStart
   ```
   The app will run on `http://localhost:3000` by default.

## Usage
- Enter a long URL in the input field and click **Shrink** to generate a short URL.
- Click the short URL to be redirected and increment the click count.
- Click **Delete** to remove a short URL from the list.

## Project Structure
```
AFFORD_MEDICAL/
  models/
    db.js           # MongoDB connection logic
    shorturl.js     # Mongoose schema/model for URLs
  views/
    index.ejs       # Main EJS template
  server.js         # Express server and routes
  package.json      # Project metadata and dependencies
```

## API Endpoints
- `GET /` - Home page, list all short URLs
- `POST /shorturls` - Create a new short URL
- `GET /:shorturl` - Redirect to the full URL and increment click count
- `DELETE /:id` - Delete a short URL by its MongoDB `_id`

## Data Model
**URL Schema:**
- `full` (String): The original long URL
- `short` (String): The generated short ID
- `clicks` (Number): Number of times the short URL was visited

## License
ISC
