class Friend {
    constructor() {
        this.xpos = 0
        this.ypos = Math.floor(Math.random() * (600 - 100) + 100)
        this.radius = 50
        this.speed = 50
        this.color = "Black"
        this.dx = 100
    }
    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.xpos, this.ypos, this.radius, 0, 2 * Math.PI, false)
        ctx.stroke()
    } 

    update() {
        
        this.xpos += this.speed
        
    }


    updateFriend() {
        requestAnimationFrame(this.updateFriend);
        this.update()
    }

    

}
// let rangeX = 200
// let p = 0

// function clearCanvas() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }
  
// function animate() {
//     const x = rangeX * p 
//     p = p + 0.02

//     clearCanvas()
//     newFriend.xpos = x 
//     newFriend.draw(ctx)
    
//     requestAnimationFrame(animate)
// }

// // animate()


export default Friend;