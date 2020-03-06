const express = require('express');
const shortID = require('shortid');
const connectDB = require('./config/db');

const routes = require('./routes/');
const urlRoutes = require('./routes/url');

const PORT = process.env.PORT || 5000;

// Set up the express app
const app = express();

//connect to database
connectDB();

app.use(express.json({ extended: true }));

// Define routes
app.use('/', routes);
app.use('/api/url', urlRoutes);

// Make our db accessible to our router
app.use(function(req, res, next) {
    req.db = db;
    next();
});

app.get('*', (req, res) => {
    res.send({
        message: 'hello world'
    });
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));