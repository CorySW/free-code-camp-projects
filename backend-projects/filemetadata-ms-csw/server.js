const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest:'chkbytes/'});
const port = 3000 || process.env.PORT;
var app = express();

app.use(express.static('public'));

app.post('/chkbytes', upload.single('BytesFile'), (req,res) => {
return res.json({"size":`${req.file.size} bytes`});
});

app.listen(port);