import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config =  {
  apiKey: "AIzaSyCaPa1fWpI1HhLX8PmDy3M8-V2NXX04ylM",
    authDomain: "crown-db-c3c71.firebaseapp.com",
    databaseURL: "https://crown-db-c3c71.firebaseio.com",
    projectId: "crown-db-c3c71",
    storageBucket: "crown-db-c3c71.appspot.com",
    messagingSenderId: "988081618828",
    appId: "1:988081618828:web:6a0aa53c860f158c82a0a9"
  };

  firebase.initializeApp(config);


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName , email } = userAuth;
      const createdAt = new Date();  
      
      try {
             await userRef.set( { 
               displayName,
               email,
               createdAt,
               ...additionalData
             });
      }
      catch ( error) {

        console.log('error creating a user', error.message);

      }
    }

    return userRef;
  };



  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

