// import Example from './scripts/example';

// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Hello World");

//     const main = document.getElementById('main');
//     new Example(main)

// })
// //npm run watch


import Player from "./scripts/player"
import Laser from "./scripts/laser"

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = innerHeight;
        
    canvas.style.background = "#00BFFF";

    const x = canvas.width / 2;
    const y = canvas.height / 2;

    const player = new Player(x, y, 30, "Red", ctx);


    const laser = new Laser(
        player.x, 
        player.y, 
        5, 
        "Black", 
        [1,1], 
        ctx)

    const lasers = [];

    
    function animate() {
        requestAnimationFrame(animate)
        ctx.clearRect(0,0, canvas.width, canvas.height);
        player.draw();
        lasers.forEach(laser => {
            laser.update()
        })
    }

    addEventListener("click", (event) => {
        const angle = Math.atan2(event.clientY - player.y, event.clientX - player.x);
        const velocity = [Math.cos(angle), Math.sin(angle)];

        lasers.push(new Laser(player.x,player.y, 5, "Black", velocity,ctx));
    })

    animate();

})  

