const express = require("express");
const Mongoose = require("./public/models/dpParser");
let routes = require("./routes");

var app = express();
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/static"));
app.use(express.json());



app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
let mongoose = new Mongoose();
mongoose.connect();

app.use("/",routes);



app.listen(process.env.PORT || 8080);