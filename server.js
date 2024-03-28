// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port =  3000; // Set the port for the server

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World! This is the root endpoint.');
});

// Define additional endpoint(s) as needed
app.get('/api/data', (req, res) => {
  // Example data to send as response
  const data = {
    message: 'This is data from the /api/data endpoint.'
  };
  
  // Send JSON response
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
