import express from "express"
import bodyParser from "body-parser"
import Mongoose from "mongoose";
import ejs from "ejs"

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/resume", (req, res) => {
    res.render("resume")
});

app.get("/allprojects", (req, res) => {
    res.render("allprojects")
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => {
    console.log("Connected")
});