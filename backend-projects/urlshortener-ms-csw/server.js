const express = require('express');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const Model = require('./UrlDB/Url_short');
const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/gi;
const UniqID = Math.floor(Math.random() * 100000);
const db = Mongoose.connection;

db.once("open", () => console.log("yay"))
db.on("err", (err) => console.log(err))
Mongoose.connect(process.env.MONGOLAB_URI,{ useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.post("/lilurl/shortenURL", function(req,res){
  const urlToShorten = req.body.url;
  let DBdata = new Model(
      {
        urlInput: urlToShorten,
        shortened: UniqID
      }
    );
  
  if(regex.test(urlToShorten)=== true){
    Model.findOne({urlInput: urlToShorten}, (err, url) => {
    if(err) res.send('There was an error while reading through the database');
    if(url == null) {
       DBdata.save()
       res.json({url: DBdata.urlInput, shortened: DBdata.shortened})
       }
    else {
      console.log("already saved")
      res.json({url: DBdata.urlInput, shortened: DBdata.shortened})
    }
    });
  }
});

app.get('/url/:shorter',(req,res)=> {
let { shorter } = req.params;
let urlrgx = new RegExp("^(http|https)://","i");
  
Model.findOne({shortened: shorter}, (err, data) => {
if(err) res.send('There was an error while reading through the database');
var str = data.urlInput;
  if(urlrgx.test(str)){
  res.redirect(301, data.urlInput)
  }
  else {
  res.redirect(301, 'http://' + data.urlInput)
  }
  }
);
});


app.listen(port);