let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozila.png') {
        myImage.setAttribute('src','images/chrome.png');
    } else {
        myImage.setAttribute('set','images/mozila.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name. ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozila is Cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozila is Cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}