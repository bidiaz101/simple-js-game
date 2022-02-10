function clearFrame(){
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
}

function drawBackground(){
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
}

function update(){
    Player.all.forEach(player => player.update())
    Laserbeam.all.forEach(laserbeam => laserbeam.update())
}

function draw(){
    drawBackground()
    Player.all.forEach(player => player.draw())
    Laserbeam.all.forEach(laserbeam => laserbeam.draw())
}

function gameLoop(){
    clearFrame()
    update()
    draw()

    animate(gameLoop)
}

function setup(){
    player = new Player()
    player.addEventListeners()
    animate(gameLoop)
}

document.addEventListener("DOMContentLoaded", () => {
    setup()
})
