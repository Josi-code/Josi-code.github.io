const paddle1 = {
x: 0,
y: 0,
w: 16,
h: 128
}

const paddle2 = {
    x: 0,
    y: 0,
    w: 16,
    h: 128
}

const ball = {
    x: 0,
    y: 0,
    r: 8
}

const canvas = document.createElement("canvas")
 canvas.style.position = "absolute"
 canvas.style.top = "0px"
 canvas.style.left = "0px"
 canvas.style.width = "100dvw"
 canvas.style.height = "100dvh"
 canvas.style.backgroundColor = "black"
document.body.appendChild(canvas)

function onResize() {
    canvas.width = canvas.getBoundingClientRect().width
    canvas.height = canvas.getBoundingClientRect().height
}

new ResizeObserver(onResize).observe(canvas)

const context = canvas.getContext("2d")

function render() {
 context.fillStyle = "red"
 context.fillRect(
    paddle1.x,
    paddle1.y,
    paddle1.w,
    paddle1.h
 )
}

function render() {
    context.fillStyle = "blue"
    context.fillRect(
       paddle2.x,
       paddle2.y,
       paddle2.w,
       paddle2.h
    )
   }

context.fillStyle = "red"
   context.beginPath()
   context.arc(
    ball.x,
    ball.y,
    ball.r,
    0.
    Math.PI * 2
   )

function animate() {
    render()
    requestAnimationFrame(animation)
}

animate()