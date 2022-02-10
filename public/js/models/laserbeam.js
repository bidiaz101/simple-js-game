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
            this.y -= this.speed
        } else if (this.direction === 'down'){
            this.y += this.speed
        } else if (this.direction === 'left'){
            this.x -= this.speed
        } else if (this.direction === 'right'){
            this.x += this.speed
        }

        if(this.y <= 0 || this.y >= GAME_HEIGHT || this.x + this.width <= 0 || this.x >= GAME_WIDTH) {
            let index = Laserbeam.all.indexOf(this);
            Laserbeam.all.splice(index, 1);
        }
    }

    draw(){
        ctx.fillStyle= this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}