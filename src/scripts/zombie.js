class Zombie {
    constructor(x, y, radius, color, speed, ctx) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
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
        this.x = this.x + this.speed[0]
        this.y = this.y + this.speed[1]
    }

}


export default Zombie;