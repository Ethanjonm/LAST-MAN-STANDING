class Target {
    constructor() {
        this.xpos = Math.floor(Math.random() * (750 - 50) + 50)
        this.ypos = Math.floor(Math.random() * (600 - 100) + 100)
        this.radius = 50
        this.speed = 0
        this.color = "Black"
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI, false)
        ctx.fillStyle = 'Red'; 
        ctx.fill();
        ctx.stroke()
    } 

}

function targetSpawn() {

}
export default Target;