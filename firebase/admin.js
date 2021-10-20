const admin = require("firebase-admin");

const serviceAccount = require("./firebase-keys.json");
try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} catch (er) {}

export const firestore = admin.firestore();
