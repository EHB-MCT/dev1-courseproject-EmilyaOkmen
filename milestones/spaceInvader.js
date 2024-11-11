"use strict";

let size = 50
drawSpaceInvador();

function drawSpaceInvador() {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

    context.beginPath();
    context.rect(0, 0, 300, 300);
    context.fillStyle = "black"
    context.fill();

    context.beginPath();
    context.rect(75, 25, size, size);
    context.rect(75, 125, size, size);
    context.rect(175, 125, size, size);
    context.rect(175, 25, size, size);

    context.rect(25, 125, size, size);
    context.rect(225, 125, size, size);

    context.rect(125, 175, size, size);
    context.rect(125, 225, size, size);

    context.rect(75, 175, size, size);
    context.rect(175, 175, size, size);

    context.fillStyle = "violet"
    context.fill();

    context.strokeStyle = "violet"
    context.stroke();

}


