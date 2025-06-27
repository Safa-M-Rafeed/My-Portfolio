const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('MongoDB connected!'));

app.get('/', (req, res) => {
  res.send('Backend is running');
});

const projectsRouter = require('./routes/projects');
app.use('/api/projects', projectsRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
