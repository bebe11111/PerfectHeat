"use strict"

document.querySelector('#nav-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('closed');
});

document.querySelector('#ul').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('closed');
});

document.querySelector('#nav-home').addEventListener('click', () => {
    document.querySelector('nav').classList.add('closed');
});