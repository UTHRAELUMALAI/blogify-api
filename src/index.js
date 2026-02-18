const express = require('express');
const app = express();
const PORT = 3000;

// Import posts router
const postRouter = require('./routes/posts.routes');

// Mount posts router first
app.use('/api/v1/posts', postRouter);

// Main welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});