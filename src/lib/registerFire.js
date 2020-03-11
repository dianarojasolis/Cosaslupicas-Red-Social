import { saveRegister } from '../index.js'
export function createAccount() {
    let formAccount = document.getElementById('root');
    formAccount.innerHTML = '';
    const showRegister = `
        <div class="containerData">
        <input id="name" type="text" placeholder="Ingresa tu nombre">
        <input id="email" type="email" placeholder="Ingresa email">
        <input id="password" type="password" placeholder=" Ingresa contraseña">
        </div>
        <div>
        <button id="btnRegister">Registrarme</button></div>
        `

    formAccount.innerHTML = showRegister;

    const btn_Register = document.getElementById('btnRegister')
    btn_Register.addEventListener('click', () => {
        const saveName = document.getElementById('name').value;
        const saveEmail = document.getElementById('email').value;
        const savePass = document.getElementById('password').value;
        console.log('dime algo ')
        saveRegister(saveEmail, savePass);
    }
    )
};
