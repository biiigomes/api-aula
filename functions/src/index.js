const functions = require('firebase-functions');
admin = require('firebase-admin');
express = require('express');
cors = require('cors');

app = express();
app.use(cors({ origin: true }));

const principal = require('./routers/principalRouter');
const user = require('./routers/usersRouter');

app.use('/', principal);
app.use('/create', user);

exports.app = functions.https.onRequest(app);
