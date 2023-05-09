// import Example from './scripts/example';

// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Hello World");

//     const main = document.getElementById('main');
//     new Example(main)

// })
// //npm run watch


import Player from "./scripts/player"
import Laser from "./scripts/laser"
import Zombie from "./scripts/zombie"

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 800;
    canvas.height = 800;
        
    canvas.style.background = "#00BFFF";

    const x = canvas.width / 2;
    const y = canvas.height / 2;

    const player = new Player(x, y, 15,[0,0], "Red", ctx);


    const laser = new Laser(
        player.x, 
        player.y, 
        5, 
        "Black", 
        [1,1], 
        ctx)

    const lasers = [];
    const zombies = [];
    let animationId = 0;
    
    function animate() {
        animationId = requestAnimationFrame(animate)
        ctx.clearRect(0,0, canvas.width, canvas.height);
        // player.draw();
        player.update()
        lasers.forEach((laser, index) => {
            laser.update()
            // remove from edges of screen
            if (laser.x + laser.radius < 0 || 
                laser.x - laser.radius > canvas.width ||
                laser.y + laser.radius < 0 ||
                laser.y - laser.radius > canvas.height) {
                setTimeout(() => {
                    lasers.splice(index, 1) 
                    }, 0)
            }
        })
        zombies.forEach((zombie, index) => {
            zombie.update()

            if (zombie.x + zombie.radius < 0 || 
                zombie.x - zombie.radius > canvas.width ||
                zombie.y + zombie.radius < 0 ||
                zombie.y - zombie.radius > canvas.height) {
                setTimeout(() => {
                    zombies.splice(index, 1) 
                    }, 0)
            }

            const distP = Math.hypot(player.x - zombie.x, player.y - zombie.y)


            if (distP - zombie.radius - player.radius < 1) {
                cancelAnimationFrame(animationId) //end game
            }
                
            lasers.forEach((laser, laserIdx) => {
                const distL = Math.hypot(laser.x - zombie.x, laser.y - zombie.y)

                if (distL - zombie.radius - laser.radius < 1) {
                    setTimeout(() => {
                    zombies.splice(index, 1)
                    lasers.splice(laserIdx, 1) 
                    }, 0)
                    
                }
            })
        })
    }

    addEventListener("click", (event) => {
        // console.log(lasers)
        const angle = Math.atan2(event.clientY - player.y, event.clientX - player.x);
        const velocity = [Math.cos(angle), Math.sin(angle)];

        lasers.push(new Laser(player.x,player.y, 5, "Black", velocity,ctx));
    })

    addEventListener("keydown", ({ key }) => {
        switch (key) {
            case 'w':
                player.velocity[1] = -5
                break
            case 'a':
                player.velocity[0] = -5
                break
            case 's':
                player.velocity[1] = 5
                break
            case 'd':
                player.velocity[0] = 5
                break
        }
        // console.log(player.velocity)
    })

    addEventListener("keyup", ({ key }) => {
        switch (key) {
            case 'w':
                player.velocity[1] = 0
                break
            case 'a':
                player.velocity[0] = 0
                break
            case 's':
                player.velocity[1] = 0
                break
            case 'd':
                player.velocity[0] = 0
                break
        }
        // console.log(player.velocity)
    })

    function spawnZombie() {
        setInterval(() => {
            const radius = 25
            let x = 0
            let y = 0
            if (Math.random() < 0.5) {
                x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
                y = Math.random() * canvas.height;
            } else {
                x = Math.random() * canvas.width;
                y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
            }
            // x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
            // y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
            const color = "green"
            const angle = Math.atan2(player.y - y, player.x - x);
            const velocity = [Math.cos(angle), Math.sin(angle)];
            zombies.push(new Zombie(x, y, radius, color, velocity, ctx))
            // console.log(zombies.length)
        }, 1000)
    }
    
    animate();
    spawnZombie();
})  

