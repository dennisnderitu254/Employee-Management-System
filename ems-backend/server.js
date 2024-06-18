const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/departments', require('./routes/departments'));
app.use('/api/employees', require('./routes/employees'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

//ems-backend/server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

// // Routes
// const usersRouter = require('./routes/users');
// app.use('/api/users', usersRouter);

// const tasksRouter = require('./routes/tasks');
// app.use('/api/tasks', tasksRouter);


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
