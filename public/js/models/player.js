class Player {
    constructor(){
        this.x = (GAME_WIDTH / 2) - 10
        this.y = (GAME_HEIGHT / 2) - 10
        this.color = 'red'
        this.width = 20
        this.height = 20

        this.direction = {
            up: false,
            down: false,
            left: false,
            right: false
        }

        this.xSpeed = 0
        this.ySpeed = 0

        this.addMovement = this.addMovement.bind(this)
        this.stopMovement = this.stopMovement.bind(this)
    }

    controls(){
        this.setupMovement()
    }

    setupMovement(){
        document.addEventListener('keydown', this.addMovement)
        document.addEventListener('keyup', this.stopMovement)
    }

    addMovement(e){
        switch(e.code){
            case UP_KEY:
                this.ySpeed = -1
                this.resetDirections()
                this.direction.up = true
                this.xSpeed = 0
                break;
            case DOWN_KEY:
                this.ySpeed = 1
                this.resetDirections()
                this.direction.down = true
                this.xSpeed = 0
                break;
            case LEFT_KEY:
                this.xSpeed = -1
                this.resetDirections()
                this.direction.left = true
                this.ySpeed = 0
                break;
            case RIGHT_KEY:
                this.xSpeed = 1
                this.resetDirections()
                this.direction.right = true
                this.ySpeed = 0
                break;
        }
    }

    stopMovement(e){
        switch(e.code){
            case UP_KEY:
                this.ySpeed = 0
                break;
            case DOWN_KEY:
                this.ySpeed = 0
                break;
            case LEFT_KEY:
                this.xSpeed = 0
                break;
            case RIGHT_KEY:
                this.xSpeed = 0
                break;
        }
    }

    resetDirections(){
        this.direction = {
            up: false,
            down: false,
            left: false,
            right: false
        }
    }

    // used for updating the player position
    update(){
        this.x += this.xSpeed
        this.y += this.ySpeed
    }

    // used for drawing the player to the canvas
    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
