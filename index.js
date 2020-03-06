const express = require('express');
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

app.get('*', (req, res) => {
    res.send({
        message: 'Welcome to smal.ly URL shortner'
    });
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));