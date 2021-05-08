import firebase from "firebase/app";
import "firebase/firestore";



firebase.initializeApp({
    apiKey: "AIzaSyDSrOR6Z656K7DhA5SAsI_Jp4tOa6BuBwo",
    authDomain: "myclassictodos.firebaseapp.com",
    projectId: "myclassictodos",
    storageBucket: "myclassictodos.appspot.com",
    messagingSenderId: "842765309069",
    appId: "1:842765309069:web:27fab5f9eebe3916d77ec4"
})

const db = firebase.firestore();


// getData = async () => {
//     const res = await db.collection("inProcess")
//     await .get()
//     .then(snap => {
//       console.log(todos)
//         todos = snap.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data()
//         }));
//       return res;
//   }


export { db };