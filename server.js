const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')

dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 4000;
const app = express();

// Server logs invocation
app.use(logger('combined'));

// Set body parser for requests
app.use(bodyParser.urlencoded({extended: true}));

// Set view engine
app.set('view engine', 'ejs')

// Load all assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {console.log(`Sever is listening on port ${PORT}`)})