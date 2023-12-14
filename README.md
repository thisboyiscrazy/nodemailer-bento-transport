
Transport for nodemailer for bento

nodemailer-bento-transport
============================

## What is this?
This is the transport plugin that goes with nodemailer to send email using [Bento](https://bentonow.com/).

## Example
```js
const nodemailer = require('nodemailer');
const bento = require('nodemailer-bento-transport');

// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails)
const options = {
    publishablekey: 'pk-123', //Your Publishable Key
    secretkey: 'sk-123', //Your Secret Key
    siteuuid: '1234-12434', //Your Site UUID        
}

const nodemailerBento = nodemailer.createTransport(bento(options));
```