const express = require('express');
const app = express(); 

app.use((req , res ,next) => {
    res.setHeader('Access-Control-Allow-Headers' , 'Content-Type , Authorization')
    res.setHeader('Access-Control-Allow-Methods' , 'GET , ṔOST ,PUT , PATCH ,DELETE , OPTIONS')
    res.setHeader('Access-Control-Allow-Origin' , '*')
    next()
})
 
app.use(express.json());

module.exports = app; 