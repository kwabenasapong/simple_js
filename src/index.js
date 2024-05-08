// Import the Express module
//const express = require("express");
import express from 'express'

// Create an Express application
const app = express();

// Define a route for the home page
app.get("/", (_, res) => {
  res.send("<h1>Hello World!</h1><p>Your Node.js environment is set up!</p>");
});

// Listen on port 3000 for incoming HTTP requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Node version: ${process.version}`);
});

//config port to deploy on vercel
export default app;
