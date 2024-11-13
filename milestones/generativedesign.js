"use strict";

import * as Utils from "../scripts/utils.js";
import context from "../scripts/context.js";


let width = context.canvas.width;
let height = context.canvas.height;


draw();

function draw() {

    context.fillStyle = "#fff981"
    context.fillRect(0, 0, width, height);


    drawRandomShapes();
}

function drawRandomShapes() {

    const columns = 15; 
    const rows = 15;    
    const shapeWidth = width / columns;
    const shapeHeight = height / rows;

    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * shapeWidth + shapeWidth / 2;
            let y = j * shapeHeight + shapeHeight / 2;


/*let randomColor2= Utils.rgb(Utils.randomNumber(180, 255), Utils.randomNumber(120,200), Utils.randomNumber(150,220));
let randomColor1 = Utils.rgb(Utils.randomNumber(100, 200), Utils.randomNumber(0, 100), Utils.randomNumber(100, 200));*/
let randomColor2 = Utils.rgb(Utils.randomNumber(200, 255), Utils.randomNumber(150, 200), Utils.randomNumber(150, 200));
let randomColor1 = Utils.rgb(Utils.randomNumber(100, 160), Utils.randomNumber(140, 190), Utils.randomNumber(200, 240)); 

context.fillStyle = randomColor1;
Utils.fillEllipse(x, y, shapeWidth / 2, shapeHeight / 4);


context.fillStyle = randomColor2;
Utils.fillEllipse(x, y, shapeWidth / 4, shapeHeight / 2);

        }
    }
 }

