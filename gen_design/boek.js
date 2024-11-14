"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawBook();

function drawBook() {
    // Teken eerste rechthoek (linker boek)
    context.beginPath();
    context.rect(130, 150, 180, 300);
    context.fillStyle = "black";
    context.fill();
    context.closePath();

    // Voeg willekeurige cirkels toe in de eerste rechthoek
    drawRandomCircles(130, 150, 180, 300,);


    context.beginPath();
    context.rect(370, 150, 180, 300);
    context.fillStyle = "black";
    context.fill();
    context.closePath();

    // Voeg willekeurige cirkels toe in de tweede rechthoek
    drawRandomCircles(370, 150, 180, 300);
}

function drawRandomCircles(x, y, width, height) {
    let circleRadius = 20; // Straal van de cirkels

    for (let i = 0; i < 5; i++) {
        // Willekeurige positie voor elke cirkel
        let randomX = Math.random() * (width - 2 * circleRadius) + x + circleRadius;
        let randomY = Math.random() * (height - 2 * circleRadius) + y + circleRadius;

        // Kies een willekeurige kleur voor de cirkel
        let randomColor = getRandomColor();

        // Teken de cirkel
        context.beginPath();
        context.arc(randomX, randomY, circleRadius, 0, Math.PI * 2);
        context.fillStyle = randomColor;
        context.fill();
        context.closePath();
    }
}

// Functie om een willekeurige kleur te genereren
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
