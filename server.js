
var express=require('express');
var app=express();

app.get("/",(req, res)=>{
    res.send(
            "<h1>Docker Demo </h1>"
            +"<hr/>"
            +"<h3>Steps</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>AWS Account</li>"
            +"<li>Git installation</li>"
            +"<li>Node Installation on AWS</li>"
            +"<li>Pull</li>"
            +"<li>Push</li>"
            + "</ol>"
    );
});

app.get("/aboutus",(req, res)=>{
    res.send(
            "<h1>Docker Demo </h1>"
            +"<hr/>"
            +"<h3>Output</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Test Readymade Docker Images</li>"
            +"<li>Create own Docker Images</li>"
            +"<li>Test using IP</li>"
            + "</ol>"
    );
});

app.get("/login",(req, res)=>{
    res.send(
            "<h1>Docker Demo </h1>"
            + "<h3>Login</h3>"
            +"<hr/>"
            +"<form>"
            + "<input/>"
            + "<br/>"
            +"<input/> "
            +"<button>login</button>"
            + "</form>"
    );
});

var server=app.listen(4000);
console.log("Puri Sales Online shopping running on port 4000");