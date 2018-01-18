var express = require('express');
var app = express();
var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get("/", (req, res)=>{
    res.send("No");
});

//Listen on the port 
app.listen(port, e=>{
    console.log("Server is running on port " + port);
});