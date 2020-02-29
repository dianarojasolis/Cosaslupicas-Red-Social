// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();


//REGISTRO//

document.getElementById('registerMe').addEventListener('click', registerMe)

function registerMe() {
  const emailRegister = document.getElementById('registerEmail').value;
  const passwordRegister = document.getElementById('registerPassword').value;
  console.log(emailRegister);

  firebase.auth().createUserWithEmailAndPassword(emailRegister, passwordRegister)
  .then(function(){
    check()
  })
  .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });    
};

