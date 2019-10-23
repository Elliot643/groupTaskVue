const express = require("express");
var app = express();
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/static"));

var path = require("path");

app.get("/user", (req, res) => {
	res.sendFile(path.join(__dirname+"/static/hinderdb.json"))
})

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname+"/public/index.html"));
});

app.listen(process.env.PORT || 8080);