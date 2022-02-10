class Laserbeam {
    static all = []
    
    constructor({ x, y, width, height }){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.color = 'green'
        this.draw()
        Laserbeam.all.push(this)
    }

    update(){

    }

    draw(){
        ctx.fillStyle= this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}