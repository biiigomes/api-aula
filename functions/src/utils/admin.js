const admin = require('firebase-admin');
const serviceAccount = require('../../chave-acesso.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // databaseUrl: 'https://api-aulas.firebaseio.com'
});

const db = admin.firestore();

module.exports = {admin, db}