class Enemy {
    static all = []

    constructor(){
        this.x = (Math.random() * GAME_WIDTH)
        this.y = (Math.random() * GAME_HEIGHT)
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