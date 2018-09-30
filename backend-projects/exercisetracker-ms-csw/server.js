const express = require('express');
const bodyParser = require("body-parser");
const Mongoose = require('mongoose');
const app = express();
const UserModel = require('./DB/UserDB');
const ExModel = require('./DB/ExDB');
const regex = /([a-z])\d([a-z])+|([a-z])+\d|([a-z])+/gi;

Mongoose.connect(process.env.MONGOLAB_URI, {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/exercise/generateUser', (req, res) => {
  
  let new_user=req.body.UserName;
  
  function makeid() {
  let text = Math.random().toString(36).substring(7);
  return text;
}
  
  let DBuser = new UserModel(
      {
        userNAME: new_user,
        userID: makeid()
      }
    );
  UserModel.findOne({userNAME: new_user}, (err, existing) => {
  if(existing == null) {
  DBuser.save()
  res.json({user:DBuser.userNAME, id: DBuser.userID})
  }
  else {
  res.send("this username has already been taken, sorry")
  }
  });
});

app.post('/exercise/addEx', (req, res) => {
  
  let user_id = req.body.UserId;
  let desc = req.body.Desc;
  let duration= req.body.Duration;
  
  let DBex = new ExModel(
      {
        userID: user_id,
        desc: desc,
        duration: duration
      }
    );
  
  if(regex.test(user_id)) {
    
    ExModel.findOne({userID: user_id}, (err, id) => {
      
      if(id == null) {
      DBex.save()
      res.json({userID:DBex.userID,desc:DBex.desc,duration:DBex.duration})
      }
    });
    
  res.json({userID:DBex.userID,desc:DBex.desc,duration:DBex.duration})
  }
  
  else {
  res.send("invalid id")
  }
  
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});