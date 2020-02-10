// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as firebase from 'firebase/app';
export const environment = {
  production: false,
  // Config Firebase
  firebaseConfig: {
    apiKey: "AIzaSyCCTK_LsXN4AXziWuQmZ_CeFHIa9grpEOM",
    authDomain: "kbapp-94523.firebaseapp.com",
    databaseURL: "https://kbapp-94523.firebaseio.com",
    projectId: "kbapp-94523",
    storageBucket: "kbapp-94523.appspot.com",
    messagingSenderId: "337133645878",
    appId: "1:337133645878:web:66fe253d059e44c1bca897"
    // measurementId: "G-BTM8CF0EZQ"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
