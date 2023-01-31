const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

app.get('/', (req, res) => {
  res.send('Hello from the Express server!');
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
