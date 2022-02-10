function clearFrame(){
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
}

function drawBackground(){
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
}

function update(){
    player.update()
}

function draw(){
    drawBackground()
    player.draw()
}

function gameLoop(){
    clearFrame()
    update()
    draw()

    animate(gameLoop)
}

function setup(){
    player = new Player()
    player.controls()
    animate(gameLoop)
}

document.addEventListener("DOMContentLoaded", () => {
    setup()
})
