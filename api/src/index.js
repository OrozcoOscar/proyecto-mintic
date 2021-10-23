const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors= require('cors')
const mongoose = require('mongoose');
const http = require("http").Server(app);
//Conecte dbs
mongoose.connect('mongodb+srv://Andres:a123@cluster0.csjti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(db=>{console.log('db is connected')})
    .catch(err => console.log(err));

app.set('port',process.env.PORT || 3001);
app.set("json spaces",2)
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'));
app.use(express.json());
app.use(cors()); // <---- use cors middleware
app.use("/",require("./routes/index")); 
http.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
})



