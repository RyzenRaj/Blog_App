const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());


const blog = require('./routes/blog')
//mount
app.use('/api/v1',blog)

app.get('/',(req,res)=>{
    res.send("this is homepage baby")
})

const connectWithDb = require('./config/database')
connectWithDb();

app.listen(PORT,()=>{
    console.log(`app is started at port ${PORT}`)
})

