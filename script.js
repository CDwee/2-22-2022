// Started at 5:59 2-22-2022

'use strict'; 

const btnPark1 = document.querySelector('.park-1');
const btnPark2 = document.querySelector('.park-2');
const btnPark3 = document.querySelector('.park-3');
const btnPark4 = document.querySelector('.park-4');
const btnPark5 = document.querySelector('.park-5');
const btnPark6 = document.querySelector('.park-6');

const parkEl = document.querySelector('.park');
const btnNew = document.querySelector('.btn--again');

const guess = document.querySelector('.park');   

let park = Math.trunc(Math.random() * 6 ) + 1;
console.log(park);

let score, playing;

const init = function() {
    score = [0];
    playing = true;

    parkEl.classList.remove('hidden');
    parkEl.src = `park-${park}.png`;

    // player0El.classList.remove('player--winner');
    // player1El.classList.remove('player--active');
};
init();

if (park === 1) {
    btnPark1.addEventListener('click', function () {
        if (guess === park) {
            document.querySelector('body').style.backgroundColor = '#60b347';
} if (park === 2) {
    btnPark1.addEventListener('click', function () {
        if (guess === park) {
            document.querySelector('body').style.backgroundColor = '#60b347';
} if (park === 3) {
    btnPark1.addEventListener('click', function () {
    if (guess === park) {
            document.querySelector('body').style.backgroundColor = '#60b347';
} if (park === 4) {
    btnPark1.addEventListener('click', function () {
        if (guess === park) {
            document.querySelector('body').style.backgroundColor = '#60b347';
} if (park === 5) {
    btnPark1.addEventListener('click', function () {
        if (guess === park) {
            document.querySelector('body').style.backgroundColor = '#60b347';
} if (park === 6) {
    btnPark1.addEventListener('click', function () {
        if (guess === park) {
            document.querySelector('body').style.backgroundColor = '#60b347';
};

btnPark1.addEventListener('click', function () {
    if (park === 1) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        console.log("CONGRATS YOU WON!")
    } if (park === 2) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        console.log("CONGRATS YOU WON!")
    { if (park === 3) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        console.log("CONGRATS YOU WON!")
    { if (park === 4) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        console.log("CONGRATS YOU WON!") 
    { if (park === 5) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        console.log("CONGRATS YOU WON!")
    { if (park === 6) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        console.log("CONGRATS YOU WON!")
    }}}}}}}}}})})}})}})}})}})}})};

// Ended at 7:14 2-22-2022
