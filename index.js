const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const account = require('./routes/account');

//add config
const config = require('./config/db');

const app = express();
const PORT = 3000;

//add cors
app.use(cors());

//add bodyparser
app.use(bodyParser.json());

//mongoose connection
mongoose.connect(config.db, { useNewUrlParser: true});
mongoose.connection.on('connected', () => {
    console.log(`Successfull conection to the DB`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Not Successfull conection to the DB + ${err}`);
});

//route
app.get('/', (req, res) => {
    res.send(`Home page`)
});

app.use('/account', account);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT} - port`);
});

