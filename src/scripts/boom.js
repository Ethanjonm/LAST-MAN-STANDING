
class Boom {
    constructor(x, y, color, ctx, radius = 30) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.ctx = ctx;
        this.radius = radius; 
        this.image = new Image();
        this.image.src = "assets/boom.png"
    }

    draw() {
        this.ctx.drawImage(this.image, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }
}


export default Boom;