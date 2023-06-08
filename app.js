const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,"/public")));

app.get("/", (req,res)=>{
    res.sendFile((__dirname + "/views/home.html"));
}) ;

app.get("/", (req,res)=>{
    res.sendFile((__dirname + "/views/login.html"));
}) ;

app.get("/register", (req,res)=>{
    res.sendFile((__dirname + "/views/register.html"));
}) ;

app.get("*", (req,res)=>{
    res.send("Ruta restringida, hemos localizado la direccion de su computador");
});

app.listen(3002, function () {
    console.log("Servidor corriendo");
});
