const express = require('express');
const dotenv = require('dotenv');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();
const port = process.env.PORT || 3000;
const Model = require('./UrlDB/Url_short');
const regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
const db = Mongoose.connection;

db.once("open", () => console.log("yay"))
db.on("err", (err) => console.log(err))
Mongoose.connect(process.env.MONGOLAB_URI,{ useNewUrlParser: true });

app.use(bodyParser.json());
app.use(express.static('public'));

app.get("/lilurl/:MyURL(*)", function(req,res){
  let { MyURL } = req.params;
  
  if(regex.test(MyURL)=== true){
    let UniqID = Math.floor(Math.random() * 100000).toString();

    let DBdata = new Model(
      {
        urlInput: MyURL,
        shortened: UniqID
      }
    );
    Model.findOne({urlInput: MyURL}, (err, url) => {
    if(err) res.send('There was an error while reading through the database');
    if(url == null) {
       DBdata.save()
       res.json({url: DBdata.urlInput, shortened: DBdata.shortened})
       }
    else {
      res.send("no lol")
    }
    });
  }
  res.json({urlInput: 'Invalid Input'});
});

app.get('/:shorter',(req,res)=> {
let shorter = req.params;

Model.findOne({shortened: shorter}, (err, data) => {
if(err) res.send('There was an error while reading through the database');
let rgx = new RegExp("^(http|https)://","i");
console.log(data)
//let checker = data.urlInput;
//rgx.test(checker) ? res.redirect(302, data.urlInput) : res.redirect(302, 'http://' + data.urlInput);
});
});


app.listen(port);