"use strict";

import * as Utils from "../scripts/utils.js";
import context from "../scripts/context.js";


let width = context.canvas.width;
let height = context.canvas.height;


draw();

function draw() {

    context.fillStyle = "#ADD8E6"
    context.fillRect(0, 0, width, height);


    drawRandomShapes(20);
}

function drawRandomShapes(dragonEye) {



    for (let i = 0; i < dragonEye; i++) {
        
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;

            
        
        let randomColor1 = Utils.rgb(Utils.randomNumber(0, 255), Utils.randomNumber(0, 255), Utils.randomNumber(0, 255));
        let randomColor2 = Utils.rgb(Utils.randomNumber(0, 255), Utils.randomNumber(0, 255), Utils.randomNumber(0, 255));
        let randomColor3 = Utils.rgb(Utils.randomNumber(0, 255), Utils.randomNumber(0, 255), Utils.randomNumber(0, 255));

             context.fillStyle = randomColor1;
             Utils.fillCircle(x, y, 50);
     
             context.fillStyle = randomColor2;
             Utils.fillEllipse(x, y, 25 * 2, 20);
     
             context.fillStyle = randomColor3;
             Utils.fillEllipse(x, y, 50 / 2, 20 * 2);

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





/*
    context.fillStyle="red";
    Utils.fillCircle(200,200,100);
    context.fillStyle="green"
    Utils.fillEllipse(200,200,50*2,50)
    context.fillStyle="black"
    Utils.fillEllipse(200,200,50/2,50*2) */
