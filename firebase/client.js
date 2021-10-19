import * as firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCZt-063RmBLtRsizyzDsdaBqgDJgTkJUc",
  authDomain: "devter-df1b3.firebaseapp.com",
  projectId: "devter-df1b3",
  storageBucket: "devter-df1b3.appspot.com",
  messagingSenderId: "187535711576",
  appId: "1:187535711576:web:227fffb0747b7e3424192d",
  measurementId: "G-61YLPF1288",
};

// Inicializar la app
!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

const mapUserFromFirebaseAuth = (user) => {
  console.log(user);
  const { email, photoURL, displayName, uid } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

// se ejecutará cuando se modifique el estado
export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuth(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  return firebase.default.auth().signInWithPopup(provider);
  // Cuando se inicia sesión automaticamente se ejecuta el onAuthstateChanged
  // por lo que no hace falta llamarlo manualmente
  /* .then(mapUserFromFirebaseAuthToUser) */
};

export const addDevit = ({ avatar, img, content, userId, username }) => {
  return database.collection("devits").add({
    avatar,
    content,
    userId,
    username,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
    img,
  });
};

export const fetchLatestDevits = () => {
  return database
    .collection("devits")
    .orderBy("createdAt", "desc")
    .get()
    .then(({ docs }) => {
      // devuelve una Promesa
      /* el docs es la collecion de devits */
      return docs.map((doc) => {
        // extrae todos los campos, y lo tendremos como objeto
        const data = doc.data();
        const id = doc.id;
        const { createdAt } = data;
        return {
          ...data,
          id,
          createdAt:
            +createdAt.toDate() /*  (+) Nos lo transforma en un número */,
        };
      });
    });
};

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`);
  const task = ref.put(file);
  return task;
};
