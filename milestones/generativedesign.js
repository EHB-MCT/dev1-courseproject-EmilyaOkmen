"use strict";

import * as Utils from "../scripts/utils.js";
import context from "../scripts/context.js";


let width = context.canvas.width;
let height = context.canvas.height;


draw();

function draw(){

    context.fillStyle="black"
    context.fillRect(0, 0, width, height);
    

    drawRandomShapes(20); 
}

function drawRandomShapes(dragonEye) {



    for (let i = 0; i < dragonEye; i++) {
    
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        
        // Draw circle
        context.fillStyle = "red";
        Utils.fillCircle(x, y, 50);
        
        // Draw ellipse
        context.fillStyle = "green";
        Utils.fillEllipse(x, y, 25 * 2, 20);
        
        // Draw other ellipse
        context.fillStyle = "black";
        Utils.fillEllipse(x, y, 50 / 2, 20 * 2);
    }
}




/*
    context.fillStyle="red";
    Utils.fillCircle(200,200,100);
    context.fillStyle="green"
    Utils.fillEllipse(200,200,50*2,50)
    context.fillStyle="black"
    Utils.fillEllipse(200,200,50/2,50*2) */
