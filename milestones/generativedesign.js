"use strict";

import * as Utils from "../scripts/utils.js";
import context from "../scripts/context.js";


let width = context.canvas.width;
let height = context.canvas.height;


draw();

function draw() {

    context.fillStyle = "#fff981"
    context.fillRect(0, 0, width, height);


    drawRandomUfos();
}

function drawRandomUfos() {

        //kolom maken met rijen, horizontaal en verticaal 
    const columns = 15; 
    const rows = 15;
    const shapeWidth = width / columns;
    const shapeHeight = height / rows;

    //loop die kleuren gaat veranderen voor kolom en rijen
    // j is voor de rijen en i is voor de kolommen
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
        let x = i * shapeWidth + shapeWidth / 2;
        let y = j * shapeHeight + shapeHeight / 2;  //even gepositioneerd

            //random pastel kleuren
            let randomColor2 = Utils.rgb(Utils.randomNumber(200, 255),
                Utils.randomNumber(150, 200), Utils.randomNumber(150, 200));//rose kleur

            let randomColor1 = Utils.rgb(Utils.randomNumber(100, 160),
                Utils.randomNumber(140, 190), Utils.randomNumber(200, 240));//blauwe kleur

            //ELLIPSE
            context.fillStyle = randomColor1;
            Utils.fillEllipse(x, y, shapeWidth / 2, shapeHeight / 4);

            //ELLIPSE/CIRKEL
            context.fillStyle = randomColor2;
            Utils.fillEllipse(x, y, shapeWidth / 4, shapeHeight / 2);

        }
    }
}

