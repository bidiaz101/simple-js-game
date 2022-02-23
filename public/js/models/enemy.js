class Enemy {
    static all = []

    constructor(){
        this.x = 0
        this.y = 0
        this.color = 'white'
        this.width = 20
        this.height = 20

        this.xSpeed = 0.5
        this.ySpeed = 0.5

        Enemy.all.push(this)
    }

    draw(){
        ctx.fillStyle= this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}