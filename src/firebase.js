import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseApp=firebase.initializeApp({
   
        apiKey: "AIzaSyAJQ7m8idtvczQQ0TAxiWqOyWtbhE1auSQ",
        authDomain: "my-port-4d3ff.firebaseapp.com",
        projectId: "my-port-4d3ff",
        storageBucket: "my-port-4d3ff.appspot.com",
        messagingSenderId: "103093370175",
        appId: "1:103093370175:web:27c846b2af53a040c3278a"
     
});

var db=firebaseApp.firestore();
export{db};