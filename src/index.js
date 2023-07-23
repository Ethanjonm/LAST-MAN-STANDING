

import Player from "./scripts/player"
import Laser from "./scripts/laser"
import Zombie from "./scripts/zombie"

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const scoring = document.getElementById("score")
    const startGame = document.getElementById("startGame")
    const gameOverScreen = document.getElementById("gameOverScreen");
    const finalScore = document.getElementById("finalScore");
    const restartGame = document.getElementById("restartGame");



    //innerWidth
    //innerHeight

    canvas.width = 900;
    canvas.height = 650;
    
    canvas.style.background = "#00BFFF";

    const x = canvas.width / 2;
    const y = canvas.height / 2;

    let player = new Player(x, y, 15,[0,0], "Red", ctx);


    let laser = new Laser(
        player.x, 
        player.y, 
        5, 
        "Black", 
        [1,1], 
        ctx)

    
    let lasers = [];
    let zombies = [];
    let score = 0
    let animationId = 0;
    let zombieSpawnInterval = 0
    let bgImage = new Image();
    bgImage.src = "assets/tilemap.png";
    let gameStarted = false;


    function init() {
        if (zombieSpawnInterval) clearInterval(zombieSpawnInterval);
    
        zombies = [];
        lasers = [];
        score = 0;
        scoring.innerHTML = score; // Update score display
    
        player = new Player(x, y, 30, [0, 0], "Red", ctx); // Reset player position and velocity
    
        // Clear any ongoing animations
        if (animationId) cancelAnimationFrame(animationId);
    
        // Start animations and zombie spawning
        animate(); //npm run watch to start game
        spawnZombie();
    
        // Set game started flag to true
        gameStarted = true;
    }
    

    function animate() {
        animationId = requestAnimationFrame(animate)
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
        // player.draw();
        player.update()
        // console.log(player.y)
        lasers.forEach((laser, index) => {
            laser.update()
            // remove from edges of screen
            if (laser.x + laser.radius < 0 || 
                laser.x - laser.radius > canvas.width ||
                laser.y + laser.radius < 0 ||
                laser.y - laser.radius > canvas.height) {
                setTimeout(() => {
                    lasers.splice(index, 1) // remove laser when leave canvas
                    }, 0)
            }
        })

        if (player.x - canvas.width === 0 || 
            player.y - canvas.height === 0 ||
            player.x === 0 ||
            player.y === 0) {
            cancelAnimationFrame(animationId)
            gameOver()
            //game end if player touch edge
        }
        zombies.forEach((zombie, index) => {
            zombie.update()

            if (zombie.x + zombie.radius < 0 || 
                zombie.x - zombie.radius > canvas.width ||
                zombie.y + zombie.radius < 0 ||
                zombie.y - zombie.radius > canvas.height) {
                setTimeout(() => {
                    zombies.splice(index, 1) 
                    }, 0)
                    //remove zombies from game if out of canvas
            }

            const distP = Math.hypot(player.x - zombie.x, player.y - zombie.y)


            if (distP - zombie.radius - player.radius < 1) {
                cancelAnimationFrame(animationId)
                gameOver() 
                //end game if player touch zombie
            }
                
            lasers.forEach((laser, laserIdx) => {
                const distL = Math.hypot(laser.x - zombie.x, laser.y - zombie.y)
                
                if (distL - zombie.radius - laser.radius < 1) {
                    setTimeout(() => {
                    zombies.splice(index, 1)
                    lasers.splice(laserIdx, 1)
                    score += 100
                    scoring.innerHTML = score
                    // console.log(score)
                    }, 0)
                    
                }
            })
        })
    }

    addEventListener("click", (event) => {
        if (!gameStarted) return; // Prevent shooting if the game hasn't started

        // Get the bounding rectangle of the canvas
        const canvasRect = document.getElementById('canvas').getBoundingClientRect();
    
        // Adjust the click coordinates to be relative to the canvas
        const canvasX = event.clientX - canvasRect.left;
        const canvasY = event.clientY - canvasRect.top;
    
        // Calculate the angle
        const angle = Math.atan2(canvasY - player.y, canvasX - player.x);
    
        const velocity = [Math.cos(angle) * 5, Math.sin(angle) * 5]; // shot speed
    
        lasers.push(new Laser(player.x, player.y, 20, "Yellow", velocity, ctx)); // create laser 
    });

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
        zombieSpawnInterval = setInterval(() => {
            const radius = 40
            let x = 0
            let y = 0
            if (Math.random() < 0.5) {
                x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
                y = Math.random() * canvas.height;
            } else {
                x = Math.random() * canvas.width;
                y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
            }
            const color = "green"
            const angle = Math.atan2(player.y - y, player.x - x);
            const velocity = [Math.cos(angle) * 5, Math.sin(angle) * 5]; // zombie speed
            zombies.push(new Zombie(x, y, radius, color, velocity, ctx))
        }, 1000);
    }
    

    document.getElementById('startGame').addEventListener('click', function() {
        event.stopPropagation();  // prevent laser before game start
        document.getElementById('startScreen').style.display = 'none';  // hide the start screen
        document.querySelector('.container').style.display = 'block';  // show the game screen
        init();  //game start
        
    });


    // Show game over screen
    function gameOver() {
        finalScore.textContent = score; // score is the game score variable
        gameOverScreen.style.display = "block";

        // Set game started flag to false
        gameStarted = false;
    }

    // Restart game and hide game over screen
    restartGame.addEventListener("click", () => {
        event.stopPropagation();  // prevent laser before game start
        gameOverScreen.style.display = "none";
        init(); 
    });

    bgImage.onload = function() {
        // On image load start the animation
        animate();
    };

    // animate();
    // spawnZombie();

})  

