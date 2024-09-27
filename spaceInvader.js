"use strict";



let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");




tetrisLogo();


function tetrisLogo(){

context.fillStyle="Pink";
context.beginPath();
context.rect(186, 202, 234, 75);
context.fill();
context.save();

context.translate(360 + 23, 264 + 75 + 37.5);
context.rotate(Math.PI / 500);


context.fillStyle = "pink";
    context.beginPath();
    context.rect(-37, -100, 75, 200); // Plaats de blauwe rechthoek direct onder de roze
    context.fill();

    context.restore();
context.save();
context.translate(200 + 23, 264 + 75 + 37.5);
context.rotate(Math.PI / 500);


context.fillStyle = "pink";
    context.beginPath();
    context.rect(-38, -100, 75, 200); // Plaats de blauwe rechthoek direct onder de roze
    context.fill();
    context.restore();
    context.save();
context.translate(125 + 23, 264 + 75 + 37.5);
context.rotate(Math.PI / 500);





context.fillStyle = "pink";
    context.beginPath();
    context.rect(-37.5, -100, 75, 200); // Plaats de blauwe rechthoek direct onder de roze
    context.fill();
    context.restore();

context.save();
context.translate(435 + 23, 264 + 75 + 37.5);
context.rotate(Math.PI / 500);
    
    
    context.fillStyle = "pink";
        context.beginPath();
        context.rect(-37.5, -100, 75, 200); // Plaats de blauwe rechthoek direct onder de roze
        context.fill();
        context.restore();
    




        context.save();
    context.translate(150 +260,411+ 70 + 33);
    context.rotate(Math.PI /2);
    
    
    context.fillStyle = "pink";
        context.beginPath();
        context.rect(-38, -10, 75,239); // Plaats de blauwe rechthoek direct onder de roze
        context.fill();
        
    
       context.save();










       context.fillStyle = "pink";
    context.beginPath();
    context.rect(30, 100, 75, 200); // Plaats de blauwe rechthoek direct onder de roze
    context.fill();
    

    context.restore();




context.save();
context.translate(100, 250, + 75 + 37.5);
context.rotate(Math.PI / 500);












}