var port = 1337;

module.exports = {
    port: port,
    db: 'mongodb://localhost/todos',
    facebook: {
        clientID: '983642691677652',
        clientSecret: 'a4003111e19d7b9828b7d7fbcdc4da6d',
        callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
  	},
  	twitter: {
    clientID: '9ahs6gSX7ChZ4EhFFqSt0RTYQ',
    clientSecret: 'GdiJH5liyj7ZZFTJv4rQrJbZcJYdmKOTW19F8aqGvtoGEoE6Br',
    callbackURL: 'http://localhost:1337/oauth/twitter/callback'
}
};