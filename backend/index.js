/* eslint-disable no-undef */
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is Running!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});