const express = require('express');
require('dotenv').config();
const path = require('path');
const app = express();
const port = 12000;
app.get('/',function(req,res){
     res.send("<h1>Hello World</h1>");
});
app.get('/twitter',(req,res)=>{
     res.send("index.html");
})
app.get('/abc', function(req, res) {
     res.sendFile(path.join(__dirname, '/index.html'));
   });
app.listen(process.env.PORT,function(){
     console.log(`${process.env.PORT} is all set`);
});