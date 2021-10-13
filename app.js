const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/projects", (req, res) => {
    res.render("projects.ejs");
});

app.get("/certifications", (req, res) => {
    res.render("certifications.ejs");
});

app.get("/work_exp", (req, res) => {
    res.render("work_exp.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("App is Working!!!");
});