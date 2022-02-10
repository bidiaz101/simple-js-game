class Laserbeam {
    static all = []

    constructor({ x, y, width, height, direction }){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = 'green'
        this.direction = direction
        this.speed = 2
        Laserbeam.all.push(this)
    }

    update(){
        if(this.direction === 'up'){
            this.y = this.y - this.speed
        }
    }

    draw(){
        ctx.fillStyle= this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}