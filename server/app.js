// imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./DB/Connection')

const app = express();
const prot = process.env.PORT  // 8081; 

// middlewares
app.use(cors());
app.use(express.json({extended: false}));
app.use(express.urlencoded({extended: true}));
app.use(express.static("uploads"));

// database connection
 connectDB();
//Route prefix
app.use('/api/post', require('./routes/routes'));

// start server
app.listen(prot , ()=> console.log(`Server running at http://localhost:${prot}`));