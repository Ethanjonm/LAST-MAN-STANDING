
class Player {
    constructor(x, y, radius,velocity, color, ctx) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity
        this.ctx = ctx;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    update() {
        this.draw()
        this.x += this.velocity[0]
        this.y += this.velocity[1]
    }

    
}

export default Player;