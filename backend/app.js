// import express module

const express = require("express");

// import express module

const bcrypt = require("bcrypt");

// import multer Module

const multer = require("multer");

const path = require("path")

// import body-parser module

const bodyParser = require("body-parser");

// import mongoose module

const mongoose = require('mongoose');
const { ObjectId } = require("mongodb");
// import axios module

const axios = require('axios');

// connect app with DB server
mongoose.connect('mongodb://127.0.0.1:27017/la7ninDB');

// create express application 

const app = express();


// Configure Body-parser

// Send JSON responses

app.use(bodyParser.json());

// Get objects from Request

app.use(bodyParser.urlencoded({ extended: true }));


// Security configuration

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(

        "Access-Control-Allow-Headers",

        "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"

    );

    res.setHeader(

        "Access-Control-Allow-Methods",

        "GET, POST, DELETE, OPTIONS, PATCH, PUT"

    );

    next();

});

// upload files config

app.use('/images', express.static(path.join('backend/images')))

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;

        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});

// Models Importation 

const Match = require("./models/match");
const Team = require("./models/team");
const Player = require("./models/player");
const User = require("./models/user");
const Reclamation = require("./models/reclamation");
const Comment = require("./models/comment");



// Business Logic : Get All Matches

app.get("/matches", (req, res) => {

    console.log("here into BL: get all matches");
    Match.find().then((docs) => {

        console.log("here is docs", docs);
        res.json({ matchesArray: docs, message: "Done" });
    });

});

// Business Logic : get match by Id

app.get("/matches/:id", (req, res) => {

    console.log("here into BL: get match by Id");
    // equivalent a activatedRoute
    let id = req.params.id;
    Match.findOne({ _id: id }).then((doc) => {
        res.json({ match: doc });
    });

});

// Business Logic : Delete Match

app.delete("/matches/:id", (req, res) => {
    console.log("here into BL: Match Deletd");
    let id = req.params.id
    Match.deleteOne({ _id: id }).then((response) => {

        console.log("Here Response", response);

        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }
    });

});

// Business Logic : add Match

app.post("/matches", (req, res) => {

    console.log("here into BL: Match Added");

    let match = new Match(req.body);

    match.save();
    res.json({ message: "Match Added Successfully" });
});

// Business Logic : Edit Match

app.put("/matches", (req, res) => {

    let newMatch = req.body;

    Match.updateOne({ _id: newMatch._id }, newMatch).then((response) => {

        console.log("Here is Response", response);

        if (response.nModified == 1) {
            res.json({ isEdited: true });
        } else {
            res.json({ isEdited: false });
        }
    });

});

//Business Logic : get match by Score

app.post("/matches/search", (req, res) => {

});


// Business Logic : Get All Teams

app.get("/teams", (req, res) => {


    Team.find().then((docs) => {

        res.json({ teamsTab: docs });

    });
});

// Business Logic : get team by Id

app.get("/teams/:id", (req, res) => {

    let teamId = req.params.id;

    Team.findOne({ _id: teamId }).then((doc) => {
        res.json({ displayedTeam: doc });
    });

});

// Business Logic : Delete team

app.delete("/teams/:id", (req, res) => {

    let teamId = req.params.id;

    Team.deleteOne({ _id: teamId }).then((response) => {

        if (response.deletedCount == 1) {
            res.json({ isDeleted: true });
        } else {
            res.json({ isDeleted: false });
        }

    });

});

// Business Logic : add team

app.post("/teams", (req, res) => {

    let team = new Team(req.body);

    team.save();
    res.json({ message: "Team Added Successfully" });


});

// Business Logic : Edit team

app.put("/teams", (req, res) => {

    // traitement 
});


// Business Logic : Get All Players

app.get("/players", (req, res) => {

    // traitement 
});

// Business Logic : get Player by Id

app.get("/players/:id", (req, res) => {

});

// Business Logic : Delete Player

app.delete("/players/:id", (req, res) => {

});

// Business Logic : add Player

app.post("/players", (req, res) => {

    console.log("here into BL : Add Player")

    let player = new Player(req.body);

    player.save();

    res.json({ message: "Added with success" });
});

// Business Logic : Edit Player

app.put("/players", (req, res) => {

    // traitement 
});

// Business Logic : Signup

app.post("/users/signup", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log("here into business logic", req.body);
    bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {

        console.log("here is crypted PWD", cryptedPwd);

        let imgPath = (req.file) ? ("http://localhost:3000/images/" + req.file.filename) :
            ("http://localhost:3000/images/avatar.jpg");

        // if (req.file) {
        //     imgPath = req.file.filename;
        // } else {
        //     imgPath = null;
        // }

        // nrmlment mrigl

        let user = new User({

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            pwd: cryptedPwd,
            role: req.body.role,
            img: imgPath,

        });
        user.save((err, doc) => {
            if (err) {
                res.json({ message: false });
            } else {
                res.json({ message: true });

            }

        });

    });


});

// Business Logic : Login

app.post("/users/login", (req, res) => {

    let user = req.body;
    let userToSend;
    User.findOne({ email: user.email }).then((response) => {
        if (!response) {
            res.json({ message: "0" });
        }
        userToSend = response;
        return bcrypt.compare(user.pwd, response.pwd);

    }).then((pwdResponse) => {

        console.log("Here PwdResponse", pwdResponse);
        if (!pwdResponse) {
            res.json({ message: "1" });

        }
        else {

            // object{FN ,LN ,Role,Id}

            let user = {
                id: userToSend._id,
                FN: userToSend.firstName,
                LN: userToSend.lastName,
                role: userToSend.role,
                img: userToSend.img,
            };

            res.json({ message: "2", user: user });
        }

    });

});


app.get("/users/:id", (req, res) => {

    let cherchedUser = req.params.id;

    User.findOne({ _id: cherchedUser }).then((doc) => {

        res.json({ findedUser: doc });
    })

});

app.post("/weather", (req, res) => {

    const country = req.body.city;

    console.log("Here Is city Searched For weather", country);

    const apiKey = "62ee756a34835483299877a61961cafb";
    const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        country +
        "&appid=" +
        apiKey + "&units=metric";
    axios
        .get(apiUrl)
        .then((response) => {
            console.log('Here response', response);

            console.log("here", response.data.weather)
            const weather = response.data.main;
            console.log('Here weather main', weather);
            const result = {
                temp: weather.temp,
                pressure: weather.pressure,
                humidity: weather.humidity,
                feels_like: weather.feels_like,
                icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
            }
            res.status(200).json({
                result: result
            })
            console.log("result", result);
        });


});


// requet pour ajouter une reclamation

app.post("/reclamation", (req, res) => {

    let reclamation = req.body;

    let rec = new Reclamation(reclamation);
    rec.save((err, doc) => {
        console.log("here save", err, doc)
        if (err) {
            res.json({ message: false });
        } else {
            res.json({ message: true });

        }
    })


});

// BL : Add Comment

app.post("/matches/comment", (req, res) => {

    console.log("here comment", req.body);

    let comment = new Comment({

        comment: req.body.comment,
        userId: ObjectId(req.body.userId),
        matchId: ObjectId(req.body.matchId),

    });

    comment.save((err, doc) => {

        if (err) {
            res.json({ isdAdded: false });
        } else {
            res.json({ isdAdded: true });

        }
    });

    console.log("here", comment);

});

// BL : Get All Matches with comments

app.get("/matches/comments/getAll", (req, res) => {

    console.log("here to get all matches with comments");

    Match.aggregate(
        [
            {
                $lookup: {
                    from: "comments", // collection to join
                    localField: "_id", //field from the input documents
                    foreignField: "matchId", //field from the documents of the "from" collection
                    as: "comments", // output array field
                },
            },
        ],
        (error, docs) => {
            res.json({
                matches: docs,
            });
        }
    );

});



// make app importable

module.exports = app;

