const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const app = express();

console.log("Server Started");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'glowkart',
    resave: false,
    saveUninitialized: true
}));

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use('/', authRoutes);
app.use('/', productRoutes);
app.use('/', cartRoutes);

app.listen(3000);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});