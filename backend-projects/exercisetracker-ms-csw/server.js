const express = require('express');
const bodyParser = require("body-parser");
const Mongoose = require('mongoose');
const shortid = require('shortid')
const app = express();
const UserModel = require('./DB/UserDB');
const ExModel = require('./DB/ExerciseDB');
const db = Mongoose.connection;

Mongoose.connect(process.env.MONGOLAB_URI, {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

db.once("open", () => console.log("connected !"))
db.on("error", (err) => console.log(err))

app.post('/exercise/generateUser', (req, res) => {
  
  let new_user=req.body.UserName;
  
  let DBuser = new UserModel(
      {
        userNAME: new_user
      }
    );
  UserModel.findOne({userNAME: new_user}, (err, existing) => {
  if(existing == null) {
  DBuser.save()
  res.json(DBuser)
  }
  else {
  res.send("this username has already been taken, sorry")
  }
  });
});

app.post('/exercise/addEx', (req, res) => {
  const user_id = req.body.UserId;
  const desc = req.body.Desc;
  const duration= req.body.Duration;
  
  const DBex = new ExModel(
      {
        desc: desc,
        duration: duration
      }
    );
    
    UserModel.findById(user_id, (err, users) => {
      if(!users) {
      res.send("invalid id")
      }
  else {
    DBex.save()
    res.json({user: user_id, desc: DBex.desc, duration: DBex.duration})
  }
  });
  
});

app.get('/app/exercises/:id', (req, res) => {
  let { id } = req.params;
   UserModel.findById(id, (err, userId) => {
      if(userId) {
      ExModel.find({}, (err, exercises) => {
      var Map = {};
      exercises.forEach(function(user) {
      Map[user._id] = user;
    });
        res.send(Map);
      });
      }
  else {
    res.send("invalid id")
  }
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT);