
class Laser {
    constructor(x, y, radius, color, speed, ctx) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = "assets/banana.png"
    }

    draw() {
        this.ctx.drawImage(this.image, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);

    }

    update() {
        this.draw()
        this.x = this.x + this.speed[0]
        this.y = this.y + this.speed[1]
    }

}

export default Laser;