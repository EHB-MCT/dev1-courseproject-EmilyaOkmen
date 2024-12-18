"use strict";

import * as Utils from "../scripts/utils.js";
import context from "../scripts/context.js";


let ufos = []; //Array voor Ufos

let width = context.canvas.width;
let height = context.canvas.height;
let wind = 2
let sat = 0

draw();
setup();
Update();

function setup() {
    winow.onmousemove = mouseMove;
    context.textAlign = "center"
    for (let i = 0; i < 50; i++) {
        ufos.push(createUfo());
    }
}

/**
 * 
 * @param {MouseEvent} eventData
 */
function mouseMove(eventData) {
    let xOffset = width / 2 - eventData.pageX;
    wind = xOffset = width / 100;
    sat = eventData.pageX / 2;

}

function createUfo() {
    let size = Math.random() * 50 + 20;
    return {
        x: Math.random() * (width + 600) - 600,
        y: 0 - size
        size: size,
        speed: Math.random() * 4 + 1,
        randomColor1: Utils.rgb(Utils.randomNumber(100, 160), Utils.randomNumber(140, 190), Utils.randomNumber(200, 240)), // Blouwe kleur
        randomColor2: Utils.rgb(Utils.randomNumber(200, 255), Utils.randomNumber(150, 200), Utils.randomNumber(150, 200)), // Rose kleur

    };
}

//achtergrondkleur
context.fillStyle = "#fff981";
context.fillRect(0, 0, width, height);




