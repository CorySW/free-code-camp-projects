const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
 
app.use(express.static('public'));
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname + 'index.html'));
});

app.get('/:timestamp', function(req, res) {
	res.json(TimeJSON(req.params.timestamp));
});
 
app.listen(port);
 
function TimeJSON(timestamp) {
	let fulltime = {
		"unix": null,
		"natural": null
	};
 
	let date;
  const month = new Array(11);
    month[0] =  "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April ";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
  
  if (!isNaN(parseInt(timestamp))) {
		date = new Date(parseInt(timestamp) * 1000);
	} else {
		date = new Date(timestamp);
	}
  
  if (!isNaN(date.getTime())) {
		fulltime.unix = `${date.getTime() / 1000}`;
		fulltime.natural = `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}` ;
	}
 
	return fulltime;
}
 