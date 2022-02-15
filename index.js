const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

const app = express();
const PORT = 3000;

app.listen(PORT, (req, res) => {
    console.log(`Server started on ${PORT} - port`);
});

