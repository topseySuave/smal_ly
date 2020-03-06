const express = require('express');
const connectDB = require('../config/db');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const routes = require('./routes/');
const urlRoutes = require('./routes/url');

const PORT = parseInt(process.env.PORT, 10) || 5000;

app.prepare().then(() => {
    // Set up the express app
    const server = express();
    
    //connect to database
    connectDB();
    
    server.use(express.json({ extended: true }));
    
    // Define routes
    server.use('/', routes);
    server.use('/api/url', urlRoutes);
    
    server.get('*', (req, res, next) => handle(req, res), (req, res) => {
        res.send({
            message: 'Welcome to smal.ly URL shortner'
        });
    });
    
    server.listen(PORT, () => console.log(`listening on ${PORT}`));
});
