import './style.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAZwTNdqWVoq4FpI2yo8-hpRpe59uZkXH4",
    authDomain: "fireblog-54a52.firebaseapp.com",
    projectId: "fireblog-54a52",
    storageBucket: "fireblog-54a52.appspot.com",
    messagingSenderId: "967731319094",
    appId: "1:967731319094:web:538113921918548adf6397",
    measurementId: "G-Y0K614XZFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function hideAllPopUps() {
    // @ts-ignore
    if (!loginPopup.classList.contains('invisible')){
        // @ts-ignore
        loginPopup.classList.toggle('invisible')
    }
    // @ts-ignore
    if (!mailLoginPopup.classList.contains('invisible')){
        // @ts-ignore
        mailLoginPopup.classList.toggle('invisible')
    }
    // @ts-ignore
    if (!popupBlur.classList.contains('invisible')){
        // @ts-ignore
        popupBlur.classList.toggle('invisible')
    }
    // @ts-ignore
    if (!registerPopup.classList.contains('invisible')){
        // @ts-ignore
        registerPopup.classList.toggle('invisible')
    }
}

function showLoginPopup(){
    hideAllPopUps()
    // @ts-ignore
    loginPopup.classList.toggle('invisible')
    // @ts-ignore
    popupBlur.classList.toggle('invisible')
}

function showEmailLoginPopup(){
    hideAllPopUps()
    // @ts-ignore
    mailLoginPopup.classList.toggle('invisible')
    // @ts-ignore
    popupBlur.classList.toggle('invisible')
}

function showEmailRegisterPopup(){
    hideAllPopUps()
    // @ts-ignore
    registerPopup.classList.toggle('invisible')
    // @ts-ignore
    popupBlur.classList.toggle('invisible')
}

let loginPopup: HTMLElement | null = null
let loginButton: HTMLElement | null = null
let openRegisterButton: HTMLElement | null = null
let openLoginButton: HTMLElement | null = null
let registerPopup: HTMLElement | null = null
let popupBlur: HTMLElement | null = null
let mailLogin: HTMLElement | null = null
let mailLoginPopup: HTMLElement | null = null

window.onload = function () {
    loginPopup = document.getElementById("loginPopup")
    loginButton = document.getElementById("login-button")
    openRegisterButton = document.getElementById("open-register-button")
    openLoginButton = document.getElementById("open-login-button")
    registerPopup = document.getElementById("emailRegister")
    popupBlur = document.getElementById("popupBlur")
    mailLogin = document.getElementById("mail-login")
    mailLoginPopup = document.getElementById('emailLogin')
    // @ts-ignore
    loginButton.addEventListener("click", showLoginPopup)
    // @ts-ignore
    mailLogin.addEventListener("click", showEmailLoginPopup)
    // @ts-ignore
    openRegisterButton.addEventListener("click", showEmailRegisterPopup)
    // @ts-ignore
    openLoginButton.addEventListener("click", showEmailLoginPopup)

    let closeButtons = document.getElementsByClassName('close-button')

    for(let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", hideAllPopUps)
    }
}
