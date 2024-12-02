"use strict";

// Haal het canvas-element op en stel de afmetingen in
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

// Constants voor de rechthoeken en cirkels
const CIRCLE_RADIUS = 20; // De straal van elke cirkel
const NUM_CIRCLES = 20; // Aantal cirkels per rechthoek
const RECTANGLE_WIDTH = 250; // Breedte van de rechthoeken
const RECTANGLE_HEIGHT = 400; // Hoogte van de rechthoeken

// Dynamische posities van de rechthoeken
const LEFT_RECT_X = canvas.width / 2 - RECTANGLE_WIDTH - 20; // Links van het midden
const LEFT_RECT_Y = canvas.height / 2 - RECTANGLE_HEIGHT / 2; // Verticaal gecentreerd
const RIGHT_RECT_X = canvas.width / 2 + 20; // Rechts van het midden
const RIGHT_RECT_Y = canvas.height / 2 - RECTANGLE_HEIGHT / 2; // Verticaal gecentreerd

// Maak arrays met cirkelgegevens voor beide rechthoeken
let leftCircles = createCircles(LEFT_RECT_X, LEFT_RECT_Y, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
let rightCircles = createCircles(RIGHT_RECT_X, RIGHT_RECT_Y, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);

// Start de animatie
animate();

/**
 * Animatiefunctie die continu cirkels beweegt en tekent.
 */
function animate() {
    // Wis het canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Teken de rechthoeken
    drawRectangle(LEFT_RECT_X, LEFT_RECT_Y, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
    drawRectangle(RIGHT_RECT_X, RIGHT_RECT_Y, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);

    // Beweeg en teken de cirkels
    moveCircles(leftCircles, LEFT_RECT_X, LEFT_RECT_Y, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
    moveCircles(rightCircles, RIGHT_RECT_X, RIGHT_RECT_Y, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);

    // Vraag het volgende frame aan
    requestAnimationFrame(animate);
}

/**
 * Maak een array van cirkels met willekeurige startposities, snelheden en kleuren.
 */
function createCircles(rectX, rectY, rectWidth, rectHeight) {
    let circles = [];
    for (let i = 0; i < NUM_CIRCLES; i++) {
        circles.push({
            x: Math.random() * (rectWidth - 2 * CIRCLE_RADIUS) + rectX + CIRCLE_RADIUS, // Willekeurige X binnen rechthoek
            y: Math.random() * (rectHeight - 2 * CIRCLE_RADIUS) + rectY + CIRCLE_RADIUS, // Willekeurige Y binnen rechthoek
            dx: (Math.random() - 0.5) * 4, // Willekeurige snelheid in X-richting
            dy: (Math.random() - 0.5) * 4, // Willekeurige snelheid in Y-richting
            color: getRandomColor() // Willekeurige kleur
        });
    }
    return circles;
}

/**
 * Teken een rechthoek op het canvas.
 */
function drawRectangle(x, y, width, height) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.fillStyle = "black";
    context.fill();
    context.closePath();
}

/**
 * Beweeg de cirkels en laat ze botsen tegen de randen van de rechthoek.
 */
function moveCircles(circles, rectX, rectY, rectWidth, rectHeight) {
    for (let circle of circles) {
        // Beweeg de cirkel
        circle.x += circle.dx;
        circle.y += circle.dy;

        // Bots tegen de linker- of rechterrand
        if (circle.x - CIRCLE_RADIUS < rectX || circle.x + CIRCLE_RADIUS > rectX + rectWidth) {
            circle.dx *= -1; // Keer de richting in X om
        }

        // Bots tegen de boven- of onderrand
        if (circle.y - CIRCLE_RADIUS < rectY || circle.y + CIRCLE_RADIUS > rectY + rectHeight) {
            circle.dy *= -1; // Keer de richting in Y om
        }

        // Teken de cirkel
        context.beginPath();
        context.arc(circle.x, circle.y, CIRCLE_RADIUS, 0, Math.PI * 2);
        context.fillStyle = circle.color;
        context.fill();
        context.closePath();
    }
}

/**
 * Genereer een willekeurige kleur in hexadecimale notatie.
 */
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
