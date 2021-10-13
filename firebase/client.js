import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZt-063RmBLtRsizyzDsdaBqgDJgTkJUc",
    authDomain: "devter-df1b3.firebaseapp.com",
    projectId: "devter-df1b3",
    storageBucket: "devter-df1b3.appspot.com",
    messagingSenderId: "187535711576",
    appId: "1:187535711576:web:227fffb0747b7e3424192d",
    measurementId: "G-61YLPF1288"
};


//Inicializar la app
!firebase.apps.length &&
    firebase.initializeApp(firebaseConfig);


const mapUserFromFirebaseAuth = (user) => {
    console.log(user);
    const { email, photoURL, displayName } = user
    return {
        avatar: photoURL,
        username: displayName,
        email

    }
}

// se ejecutará cuando se modifique el estado
export const onAuthStateChanged = (onChange) => {
    return firebase
        .auth()
        .onAuthStateChanged(user => {
            const normalizedUser =
                mapUserFromFirebaseAuth(user)
            onChange(normalizedUser)

        })
}

export const loginWithGitHub = () => {
    var provider = new firebase.auth.GithubAuthProvider();
    return firebase.default
        .auth()
        .signInWithPopup(provider)
        //Cuando se inicia sesión automaticamente se ejecuta el onAuthstateChanged 
        //por lo que no hace falta llamarlo manualmente
        /* .then(mapUserFromFirebaseAuthToUser)*/
}