const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
})

app.get("/success", function(req, res){
    res.render("success")
})

app.get("/about", function(req, res){
    res.render("about");
})

app.get("/contact", function(req, res){
    res.render("contact");
})

app.post("/contact", function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const number = req.body.number;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.user,
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret,
            refreshToken: process.env.refreshToken,
            accessToken: process.env.accessToken,
        }
    });

    var mailOptions = {
        from : process.env.user,
        to: process.env.sendTo,
        subject:"contact form enquiry",
        text: "Name : " + name + "\nEmail : " + email + "\nPhone Number : " + number + "\nMessage : " + message 
    }

    transporter.sendMail(mailOptions);
    
    res.redirect("/success");
})

const port = process.env.PORT || 3000;

app.listen(port, function(){ 
    console.log(`server started on port ${port}`);
})