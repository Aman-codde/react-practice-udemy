const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api',(req,res)=>{
    res.json('hello ')
})

app.listen(PORT,()=>{
    console.log('Server is running on Port ',PORT);
})