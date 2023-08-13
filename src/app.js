const express = require("express");
const hbs = require("hbs");
const port = process.env.PORT || 8000;
const path = require("path");
const app = express();


const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

// console.log(path.join(__dirname,"../public"));
app.set('view engine', 'hbs');
app.set('views', template_path)
app.use(express.static(static_path));
hbs.registerPartials(partials_path)




app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404error");
})


app.listen(port,()=>{
    console.log(`listning to the port ${port}`);
})