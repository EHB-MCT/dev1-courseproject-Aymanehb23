"use strict";


let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");


const CIRCLE_RADIUS = 20; // radius van elke cirkels
const NUM_CIRCLES = 60; // aantal cirkels per rechthoek
const RECTANGLE_WIDTH = 400; // Breedte rechthoek
const RECTANGLE_HEIGHT = 400; // Hoogte rechthoek

//  posities van de 2 rechthoeken
const LEFT_RECT_X = canvas.width / 2 - RECTANGLE_WIDTH - 20;
const LEFT_RECT_Y = canvas.height / 2 - RECTANGLE_HEIGHT / 2; // Verticaal gecentreerd
const RIGHT_RECT_X = canvas.width / 2 + 20; // Rechts van het midden
const RIGHT_RECT_Y = canvas.height / 2 - RECTANGLE_HEIGHT / 2; // Verticaal gecentreerd

// Maak arrays met cirkelgegevens voor beide rechthoeken
let leftCircles = createCircles(LEFT_RECT_X, LEFT_RECT_Y, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
let rightCircles = createCircles(RIGHT_RECT_X, RIGHT_RECT_Y, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);

animate();


function animate() {

    context.clearRect(0, 0, canvas.width, canvas.height);

    // Teken de rechthoeken
    drawRectangle(LEFT_RECT_X, LEFT_RECT_Y, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
    drawRectangle(RIGHT_RECT_X, RIGHT_RECT_Y, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);

    // Bewegen en cirkels tekenen
    moveCircles(leftCircles, LEFT_RECT_X, LEFT_RECT_Y, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);
    moveCircles(rightCircles, RIGHT_RECT_X, RIGHT_RECT_Y, RECTANGLE_WIDTH, RECTANGLE_HEIGHT);

    // animatie voor mijn cirkels
    requestAnimationFrame(animate);
}


function createCircles(rectX, rectY, rectWidth, rectHeight) {
    let circles = [];
    for (let i = 0; i < NUM_CIRCLES; i++) {
        circles.push({
            x: Math.random() * (rectWidth - 2 * CIRCLE_RADIUS) + rectX + CIRCLE_RADIUS, // Willekeurige X binnen rechthoek
            y: Math.random() * (rectHeight - 2 * CIRCLE_RADIUS) + rectY + CIRCLE_RADIUS, // Willekeurige Y binnen rechthoek
            dx: (Math.random() - 0.5) * 7, // snelheid in X-richting
            dy: (Math.random() - 0.5) * 4, //  snelheid in Y-richting
            color: getRandomColor() // kleur 
        });
    }
    return circles;
}

function drawRectangle(x, y, width, height) {
    context.beginPath();
    context.rect(x, y, width, height);
    context.fillStyle = "#714D40";
    context.fill();
    context.closePath();
}



function moveCircles(circles, rectX, rectY, rectWidth, rectHeight) {
    for (let circle of circles) {
        // Beweeg de cirkels
        circle.x += circle.dx;
        circle.y += circle.dy;

        // code om de cirkeltjes naar links en rechts botsen
        if (circle.x - CIRCLE_RADIUS < rectX || circle.x + CIRCLE_RADIUS > rectX + rectWidth) {
            circle.dx *= -1; // Keer de richting in X om
        }

        // code om de cirkeltjes tegen het rand laten botsen
        if (circle.y - CIRCLE_RADIUS < rectY || circle.y + CIRCLE_RADIUS > rectY + rectHeight) {
            circle.dy *= -1; // Keer de richting in Y om
        }


        context.beginPath();
        context.arc(circle.x, circle.y, CIRCLE_RADIUS, 0, Math.PI * 2);
        context.fillStyle = circle.color;
        context.fill();
        context.closePath();
    }
}

//een random kleur instellen voor elke cirkeltjes.
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
