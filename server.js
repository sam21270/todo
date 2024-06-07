const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());



const databaseUrl =
  "mongodb+srv://sallu21270:sani212@sam212.msdlsxv.mongodb.net/";
  mongoose
  .connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
        console.log("Database Connection Successful!!");
    })
    .catch(err => {
        console.log('Could not connect to the database', err);
        process.exit();
    });

const todoRoute = require('./routes/todoRoutes.js');
app.use('/todo', todoRoute);

app.get('/', (req, res) => {
    res.json({"TODO App": "Welcome to TODO App!!"});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
