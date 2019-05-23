var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
})

app.get("/projects", function(req, res) {
    var projects = [
        {name: "Tribute Page", image: "https://dimensionless.in/wp-content/uploads/2018/12/projects-cover.jpg"},
        {name: "Technical Documentation", image: "https://i.udemycdn.com/course/750x422/418102_3c86_3.jpg"},
        {name: "Product Landing", image: "http://www.illuminationworksllc.com/wp-content/uploads/2017/04/ProjectManagement-1.jpg"}
    ];
    res.render("projects",{projects:projects});
})

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("Personal site server started!");
})