const express = require('express');
const mongodb = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
mongodb.MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
  if (err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }
  console.log('Connected...');
  const db = client.db("test");
});

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from the server side!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
