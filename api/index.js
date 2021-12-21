const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 5000;



app.get('/' , (req , res)=>{

    res.sendFile(__dirname+'/views/index.html');
    console.log(__dirname+'/index.html')
 
 });

 app.get('/login' , (req , res)=>{

    res.sendFile(__dirname+'/views/login.html');
    console.log(__dirname+'/login.html')
 });

 app.get('/ingreso' , (req , res)=>{
    res.sendFile(__dirname+'/views/ingresoCliente.html');
 });
 
 app.get('/registro' , (req , res)=>{
    res.sendFile(__dirname+'/views/ingresoDatos.html');
   // console.log(__dirname+'/login.html')
 });

 app.get('/proces' , (req , res)=>{
    res.sendFile(__dirname+'/js/proces.js');
   
 });

 app.get('/add-estudio' , (req , res)=>{
   res.sendFile(__dirname+'/views/add-estudio.html');
   
});


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))