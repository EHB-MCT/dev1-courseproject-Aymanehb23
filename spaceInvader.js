"use strict";



let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");




tetrisLogo();


function tetrisLogo() {


    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();
    context.closePath();


    context.beginPath();
    context.fillStyle = "pink";
    context.rect(100, 275, 200, 50);
    context.rect(150, 250, 100, 50);
    context.rect(100, 150, 75, 100);
    context.rect(225, 150,75, 100);
    context.rect(128, 90,144, 60);
    

    context.fill();
    context.closePath();


    
}