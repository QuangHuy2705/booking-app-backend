var admin = require("firebase-admin");

var serviceAccount = require("../third_party/hellovietnam223-6be0d-firebase-adminsdk-88n7p-64aa007c97.json");
 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let db = admin.firestore();

export default db