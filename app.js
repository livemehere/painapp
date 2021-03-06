const canvas = document.querySelector('#jsCanvas');
const range = document.querySelector('#myrange');
const colors = document.querySelector('.controls__colors');

let ctx = canvas.getContext("2d");
let painting = false;
let drawingColor = 'black';


colors.addEventListener('click',(e)=>{
    drawingColor = e.target.style.backgroundColor
})


function getRange(){
    return range.value;
}


function mousemove(e){
    const x = e.offsetX;
    const y = e.offsetY;

    if(!painting){
        ctx.lineWidth = getRange();
        ctx.strokeStyle = drawingColor;
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function start(){
    painting = true;
}

function stop(){
    painting = false;
}

canvas.addEventListener('mousemove',mousemove)

canvas.addEventListener('mousedown',start)
canvas.addEventListener('mouseup',stop)
canvas.addEventListener('mouseleave',stop)