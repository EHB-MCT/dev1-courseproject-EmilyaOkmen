"use strict";

import * as Utils from "../scripts/utils.js";
import context from "../scripts/context.js";


let width = context.canvas.width;
let height = context.canvas.height;


draw();

function draw() {

    context.fillStyle = "#ADD8E6"
    context.fillRect(0, 0, width, height);


    drawRandomShapes();
}

function drawRandomShapes() {

    const columns = 10; 
    const rows = 10;    
    const shapeWidth = width / columns;
    const shapeHeight = height / rows;

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * shapeWidth + shapeWidth / 2;
            let y = j * shapeHeight + shapeHeight / 2;
 
    /*for (let i = 0; i < dragonEye; i++) {*/

        /*let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;*/



let randomColor1= Utils.rgb(Utils.randomNumber(180, 255), Utils.randomNumber(0, 100), Utils.randomNumber(0, 50));
let randomColor2= Utils.rgb(Utils.randomNumber(180, 255), Utils.randomNumber(120,200), Utils.randomNumber(150,220));
let randomColor3= Utils.rgb(Utils.randomNumber(50,120), Utils.randomNumber(180,255), Utils.randomNumber(0,100));

context.fillStyle = randomColor1;
Utils.fillCircle(x, y, shapeWidth / 4);

// Draw ellipse with random color
context.fillStyle = randomColor2;
Utils.fillEllipse(x, y, shapeWidth / 2, shapeHeight / 4);

// Draw other ellipse with random color
context.fillStyle = randomColor3;
Utils.fillEllipse(x, y, shapeWidth / 4, shapeHeight / 2);



        /*context.fillStyle = randomColor1;
        Utils.fillCircle(x, y, 50);

        context.fillStyle = randomColor2;
        Utils.fillEllipse(x, y, 25 * 2, 20);

        context.fillStyle = randomColor3;
        Utils.fillEllipse(x, y, 50 / 2, 20 * 2);*/

        /*let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;



        // Draw circle
        context.fillStyle = "#E55451";
        Utils.fillCircle(x, y, 50);

        // Draw ellipse
        context.fillStyle = "#F2D4D7";
        Utils.fillEllipse(x, y, 25 * 2, 20);

        // Draw other ellipse
        context.fillStyle = "#000000";
        Utils.fillEllipse(x, y, 50 / 2, 20 * 2);*/

    }
 }
 }





/*
    context.fillStyle="red";
    Utils.fillCircle(200,200,100);
    context.fillStyle="green"
    Utils.fillEllipse(200,200,50*2,50)
    context.fillStyle="black"
    Utils.fillEllipse(200,200,50/2,50*2) */
