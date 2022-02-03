
import express from 'express';
import mongoose from 'mongoose';
import projects from './models/Projects.js';
import bodyParser from 'body-parser';
import fs from "fs";
import session from "express-session"
import db from "./config.js";


let french = JSON.parse(fs.readFileSync("./french.json", "utf8"));
let english = JSON.parse(fs.readFileSync("./english.json", "utf8"));

const app = express();

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) {
        console.error('error' + err);
    } else {
        console.log('connected at mongoDb');
    }
})

app.use(session({
    secret: 'keyboard cat',
    cookie: { maxAge: 100000000000000 },
    resave: false,
    saveUninitialized: true
}));
app.use(express.static('./assets'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, () => {
    console.log("le serveur marche!");
})

app.get('/', async (req, res) => {
    let trad;
    if(!req.session.language){
        req.session.language = "en";
    }

    if(req.session.language === "fr"){
        trad = french
    }else if (req.session.language === "en"){
        trad = english
    }

    res.render('index.twig',{
        data: trad
    })

})

app.get('/french', async (req, res) => {
    req.session.language = "fr";
    res.redirect('/')

})
app.get('/english', async (req, res) => {
    req.session.language = "en";
    res.redirect('/')

})

app.get('/projects', async (req, res) => {
    if(!req.session.language){
        req.session.language = "en";
    }
    let trad;
    if(req.session.language === "fr"){
        trad = french
    }else if (req.session.language === "en"){
        trad = english
    }

    projects.find(function (err, result,next) {
        if(result){
            res.render('projects.twig', {
                projects: result,
                data: trad
            });
        }else{
            console.log(err)
            res.status(200).send(err);
        }
    })
    
})

app.get('/contact', async (req, res) => {
    if(!req.session.language){
        req.session.language = "en";
    }
    let trad;
    if(req.session.language === "fr"){
        trad = french
    }else if (req.session.language === "en"){
        trad = english
    }

    res.render('contact.twig',{
        data: trad
    })
    
})

app.get('/about', async (req, res) => {
    if(!req.session.language){
        req.session.language = "en";
    }
    let trad;
    if(req.session.language === "fr"){
        trad = french
    }else if (req.session.language === "en"){
        trad = english
    }

    res.render('about.twig',{
        data: trad
    })
    
})

app.get('/skills', async (req, res) => {
    if(!req.session.language){
        req.session.language = "en";
    }
    let trad;
    if(req.session.language === "fr"){
        trad = french
    }else if (req.session.language === "en"){
        trad = english
    }

    res.render('skills.twig',{
        data: trad
    })
    
})

app.get('/addproject', async (req, res) => {

    res.render('formulaire.twig',{})
})

app.post('/addproject', async (req, res) => {

    let file= req.body.fichier
    console.log(file);

    res.redirect("/")
})
