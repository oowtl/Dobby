const admin = rqeuire("firebase-admin");

const serviceAccount = require("./demoapi-45f29-firebase-adminsdk-goypf-84097b1552.json");

const firebaseConfig = {
  apiKey: "AIzaSyD-M7RKNkB-Mr0tz0uJR7IhcJewTwFBBmc",
  authDomain: "demoapi-45f29.firebaseapp.com",
  projectId: "demoapi-45f29",
  storageBucket: "demoapi-45f29.appspot.com",
  messagingSenderId: "1079554322988",
  appId: "1:1079554322988:web:16908fb736d5abbce1d789",
  measurementId: "G-HHR0X4SSYL",
  //credential: admin.credential.applicationDefault(),
  databaseURL: "https://demoapi-45f29.firebaseio.com",
  credential: admin.credential.cert(serviceAccount),
};

admin.initializeApp(firebaseConfig);
const database = admin.firestore();

module.exports = database;
