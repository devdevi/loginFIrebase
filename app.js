// Initialize Firebase
var config = {
  apiKey: "AIzaSyBsC13CJQEQlwC8iOdn8KBfFkx4Pc-TjCk",
  authDomain: "findme-visidevi.firebaseapp.com",
  databaseURL: "https://findme-visidevi.firebaseio.com",
  projectId: "findme-visidevi",
  storageBucket: "findme-visidevi.appspot.com",
  messagingSenderId: "529097403432"
};
firebase.initializeApp(config);

const singIn = document.getElementById('signIn');
singIn.addEventListener('click', login);

const newLocal = 'singOut';
const getOut = document.getElementById(newLocal);
getOut.addEventListener('click', logout);


// Obtener el usuario con la seccion Activa
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.getElementById('user_div').classList.remove('hide');
    document.getElementById('login_div').classList.add('hide')
    //document.getElementById('login_div').clas
    var user = firebase.auth().currentUser;

    if (user != null) {

      var email_id = user.email;
      document.getElementById('user_para').innerHTML = 'welcome user: ' + email_id + ' Actually, i  have to work in my portfolio but I\'m  here practice firebase because I think that this is was very important  for my future .. I really don\'t know write in English but is my practice who cares,i\' m really can do where i want :P';

    }
  } else {

    // No user is signed in.
    document.getElementById('user_div').classList.add('hide');
    document.getElementById('login_div').classList.remove('hide')
  }
});


function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  //  window.alert(email +'' + password)
  //funcion firebase
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    alert('Error:' + errorMessage);
    // ...
  });

};

function logout() {

  firebase.auth().signOut().then(function () {
    document.getElementById('ciao').innerHTML = 'Gracias por haber  estar aqui!'

    // Sign-out successful.
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    alert('Error:' + errorMessage);
    // An error happened.
  });
}