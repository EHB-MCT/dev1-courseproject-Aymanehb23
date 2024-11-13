"use strict";




let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");



drawBook();

function drawBook() {




    context.beginPath();
    context.rect(130, 150, 180, 300);
    context.fill();
    context.closePath();



    context.beginPath();
    context.rect(370, 150, 180, 300);

    context.fill();
    context.closePath();








}