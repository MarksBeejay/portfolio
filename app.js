require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose = require('mongoose');
const form = require('./src/routes/forms')

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

const app = express();
const port = process.env.PORT || 3000;

  // Add middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// app.use('portfolio/contact', cors({
//   origin: 'https://makanjuolabolaji.netlify.app/',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type']
// }));

// Define your routes here
app.use('/portfolio', form)

app.use((req, res, next)=>{
    const err = new Error('not found');
    err.status = 404;
    err.message = 'route not found';
    next(err)
  });

// app.get('/', (req, res) => {
//   res.send('https://makanjuolabolaji.netlify.app/');
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;