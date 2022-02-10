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

        this.canFire = true

        this.playerAction = this.playerAction.bind(this)
        this.stopMovement = this.stopMovement.bind(this)
    }

    setupControls(){
        this.setupMovement()
    }

    setupMovement(){
        document.addEventListener('keydown', this.playerAction)
        document.addEventListener('keyup', this.stopMovement)
    }

    playerAction(e){
        switch(e.code){
            case UP_KEY:
                if(this.y > 0){
                    this.ySpeed = -1
                } else {
                    this.ySpeed = 0
                    this.y = 0
                }
                this.resetDirections()
                this.direction.up = true
                this.xSpeed = 0
                break;
            case DOWN_KEY:
                if(this.y < (GAME_HEIGHT - this.height)){
                    this.ySpeed = 1
                } else {
                    this.ySpeed = 0
                    this.y = GAME_HEIGHT - this.height
                }
                this.resetDirections()
                this.direction.down = true
                this.xSpeed = 0
                break;
            case LEFT_KEY:
                if(this.x > 0){
                    this.xSpeed = -1
                } else {
                    this.xSpeed = 0
                    this.x = 0
                }
                this.resetDirections()
                this.direction.left = true
                this.ySpeed = 0
                break;
            case RIGHT_KEY:
                if(this.x < (GAME_WIDTH - this.height)){
                    this.xSpeed = 1
                } else {
                    this.xSpeed = 0
                    this.x = GAME_WIDTH - this.height
                }
                this.resetDirections()
                this.direction.right = true
                this.ySpeed = 0
                break;
            case SPACE:
                if(this.canFire){
                    this.canFire = false
                    let laserAttr = {}
                    if(this.direction.up){
                        laserAttr.height = 25
                        laserAttr.width = 5
                        laserAttr.y = this.y - laserAttr.height - 5
                        laserAttr.x = this.x + 7.5
                        laserAttr.direction = 'up'
                    } else if (this.direction.down){
                        laserAttr.height = 25
                        laserAttr.width = 5
                        laserAttr.y = this.y + laserAttr.height + 5
                        laserAttr.x = this.x + 7.5
                        laserAttr.direction = 'down'
                    } else if (this.direction.left){
                        laserAttr.height = 5
                        laserAttr.width = 25
                        laserAttr.y = this.y + 7.5
                        laserAttr.x = this.x - laserAttr.width - 5
                        laserAttr.direction = 'left'
                    } else if (this.direction.right){
                        laserAttr.height = 5
                        laserAttr.width = 25
                        laserAttr.y = this.y + 7.5
                        laserAttr.x = this.x + laserAttr.width + 5
                        laserAttr.direction = 'right'
                    }
                    new Laserbeam(laserAttr)
                    setTimeout(() => this.canFire = true, 300)
                }
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
