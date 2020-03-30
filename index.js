const express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const CryptoJS = require('crypto-js');

app.listen(8080, () => {
    console.log("Server running on port 8080");
})

app.post("/message", (req, res) => {
    const id = req.headers.id;
    const requestMessage = req.body.message;
    const requestSecret = req.body.secret;
    const hash = CryptoJS.HmacSHA256(requestMessage,requestSecret);
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);     
    res.send("id="+id+"&Signature="+hashInBase64);
   });
