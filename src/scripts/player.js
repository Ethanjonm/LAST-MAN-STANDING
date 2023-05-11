
class Player {
    constructor(x, y, radius,velocity, color, ctx) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = "assets/player.png";
    }

    draw() {
        this.ctx.drawImage(this.image, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }

    update() {
        this.draw()
        this.x += this.velocity[0]
        this.y += this.velocity[1]
    }

    
}

export default Player;