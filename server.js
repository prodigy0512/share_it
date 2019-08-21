const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      path = require('path'),
      Routes = require('./routes/routes.js');

//=======================
// MIDDLEWARE
//=======================

app.use(express.static(path.resolve(__dirname,"client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//=======================
// DATABASE CONFIG
//=======================

// for development
const db = 'mongodb://localhost/copyPaste';
// for production
// const db = require('./config/keys').mongoURI;
// for heroku using congfig vars
// const db = process.env.COPY_DATABASE_URL;
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("Database connected"))
    .catch(console.log);

//=======================
// ALLOW-CORS
//=======================
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
  });

//=======================
// ROUTES
//=======================

app.use("/", Routes);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,"client","public","index.html"));
});

//=======================
// STARTING THE SERVER
//=======================

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('App listening on port ' + port);
});