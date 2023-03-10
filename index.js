const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

//import routes
const routes= require('./routes/routes');

// Define the port number
const port = process.env.PORT || 3000;
const databaseUrl =process.env.DATABASE_URL ||'';


//Connecting to the database
mongoose.connect(databaseUrl);
const database=mongoose.connection;

//Error event
database.on('error',(error)=>{
    console.error(error);
})
database.once('connected',()=>{
    console.log('Database connected');
})


// Create an express app,Initialize express
const app = express();
//ensure application that comes from DB only uses data in json format
app.use(express.json());
app.use('/', routes);
app.listen(3000, () => {
    console.log(`Server is running on PORT ${3000}`);
});
