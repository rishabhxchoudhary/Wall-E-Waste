const express = require("express");
const app = express();
const path = require('path');
const bodyparser = require("body-parser");
const session = require("express-session");
const { v4:uuidv4 } = require("uuid");
const router = require("./router")
const port = 3000;

app.set("view engine","ejs");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

// Load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}));
app.use("/route",router);

// Home route
app.get("/",(req,res) => {
    res.render("LandingPage",{title : "Login System"});
})

app.get("/loginCitizen",(req,res) =>{
    res.render("login")
})
app.get("/about",(req,res) => {
    res.render("about");
})

app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.get("/signupCollector",(req,res)=>{
    res.render("signupCollector");
})

app.get("/admin",(req,res)=>{
    res.render("adminLogin");
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
} )