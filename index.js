const Analytics = require('@bentonow/bento-node-sdk').Analytics;
const packageData = require('./package.json');

module.exports = function (options) {
    return new BentoTransport(options);
};

class BentoTransport {

    name = 'Bento'
    version = packageData.version

    constructor(options) {
        this._bento = new Analytics({
            authentication: {
              publishableKey: options['publishableKey'],
              secretKey: options['secretKey'], 
            },
            logErrors: false, // Set to true to see the HTTP errors logged
            siteUuid: options['siteuuid'],
        });
    }

    send(mail, callback) {

        const from = mail.data.from.replace(/^[^<]*<(.*)>/,'$1')
        const to = mail.data.to
        const subject = mail.data.subject
        const html_body = mail.data.html
        const transactional = true

        console.log("D",{to, from, subject, html_body, transactional})
    
        this._bento.V1.Batch.sendTransactionalEmails(
            {emails: [{to, from, subject, html_body, transactional}]}
        )
        .then(r =>  callback(null,r))
        .catch(e => callback(e))

    }

}


