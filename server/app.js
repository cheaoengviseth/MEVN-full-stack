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

if(process.env.NODE_ENV === "production") {
    app.use(express.static(__dirname+'/dist/'));
    app.get('*',(req,res) => {
        res.sendFile(__dirname+'/dist/index.html');
    });
}

// start server
app.listen(prot , ()=> console.log(`Server running at http://localhost:${prot}`));