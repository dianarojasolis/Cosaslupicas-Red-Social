export const saveRegister = (saveEmail,savePass) => {
  firebase.auth().createUserWithEmailAndPassword(saveEmail,savePass)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

}

