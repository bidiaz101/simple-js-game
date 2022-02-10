const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d') // used for drawing
const animate = window.requestAnimationFrame // use for animating

// game window details

const GAME_HEIGHT = 600
const GAME_WIDTH = 800

const UP_KEY = 'KeyW'
const DOWN_KEY = 'KeyS'
const LEFT_KEY = 'KeyA'
const RIGHT_KEY = 'KeyD'

const SPACE = 'Space'

let player
