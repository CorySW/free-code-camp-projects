const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

class BrowserParser {
  static parseReq(req) {
    return {
      ipaddress: BrowserParser.getIP(req.connection.remoteAddress),
      language: BrowserParser.getLanguage(req.headers["accept-language"]),
      software: BrowserParser.getOS(req.headers["user-agent"])
    }
  }
 
  static getIP(IPAddress) {
    let isV6 = IPAddress.indexOf(':') >= 0;
    return isV6 ? IPAddress.split(':').reverse()[0] : IPAddress;
  }
 
  static getOS(userOS) {
    let osInfo = userOS.split(/[\(\)]/)[1];
    return osInfo.trim();
  }
 
  static getLanguage(MainLanguage) {
    return MainLanguage.split(',')[0].trim();
  }
}

app.get('/whoami/me', function(req,res){
  res.send(BrowserParser.parseReq(req));
});

app.listen(port);