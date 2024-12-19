"use strict";

// Portions of this project were developed using suggestions generated by ChatGPT (OpenAI)
// 19/12/2024: https://chatgpt.com/share/67443146-ed00-8013-908d-be68f38569a6Koppelingen naar een externe site.
// Modifications made by Emilya Okmen

import * as Utils from "../scripts/utils.js";
import context from "../scripts/context.js";


let ufos = []; //Array voor Ufos

let width = context.canvas.width;
let height = context.canvas.height;
let wind = 2;
let sat = 0;


setup();
Update();

function setup() {
    window.onmousemove = mouseMove;
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
        y: 0 - size,
        size: size,
        speed: Math.random() * 4 + 1,
        randomColor1: Utils.rgb(Utils.randomNumber(100, 160), Utils.randomNumber(140, 190), Utils.randomNumber(200, 240)), // Blouwe kleur
        randomColor2: Utils.rgb(Utils.randomNumber(200, 255), Utils.randomNumber(150, 200), Utils.randomNumber(150, 200)), // Rose kleur

    };
}

function drawUfo(x, y, size, color1, color2) {
    //grote ellipse
    context.fillStyle = color1;
    context.beginPath();
    context.ellipse(x, y, size, size / 2, 0, 0, Math.PI * 2);
    context.fill();

    // kleinere ellips in de grote ellipse (vorm van ufo)
    context.fillStyle = color2;
    context.beginPath();
    context.ellipse(x, y - size / 6, size / 2, size / 3, 0, 0, Math.PI * 2);
    context.fill();
}


// This code was partially generated with ChatGPT (OpenAI) on 19/12/2024
function Update() {

    // Add new UFOs if needed but limit the total number of UFOs
    if (ufos.length < 250) {
        ufos.push(createUfo());
    }

    //achtergrondkleur
    context.fillStyle = "#fff981";
    context.fillRect(0, 0, width, height);

    //posities van de ufos
    for (let i = ufos.length - 1; i >= 0; i--) {
        let ufo = ufos[i];


        // Remove UFOs that have gone off-screen
        if (ufo.y > height + ufo.size) {
            ufos.splice(i, 1);
            continue; // Skip further processing for this UFO
        }

        // UFOs shrink over time but not too much
        ufo.size -= 0.02;
        if (ufo.size < 5) ufo.size = 5; // Don't allow size to get too small

        // Move UFOs downwards and with wind
        ufo.y += ufo.speed;
        ufo.x += Math.random() * 2 - 1 + wind;

        // Draw the UFO
        drawUfo(ufo.x, ufo.y, ufo.size, ufo.randomColor1, ufo.randomColor2);
    }


    requestAnimationFrame(Update);

}