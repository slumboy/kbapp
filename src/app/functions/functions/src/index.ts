
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

// Import Place
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase First Time !");
});

export const adMin = functions.https.onRequest((request,response)=>{
    admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        databaseURL:"https://kbapp-94523.firebaseio.com"
    });
});