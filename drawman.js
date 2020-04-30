var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d"); 
context.strokeStyle = "black";

function drawLine(x,y,start,end)
{
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(start, end);  
    context.lineWidth= 2;
    context.stroke();
    context.closePath();
}
// Draw a vertical line
drawLine(150,255,150,20);
//draw a horizontal line
drawLine(150,20,73,20)
//draw a vertical line again
drawLine(73,20,73,46);
// draw a horizontal line again
drawLine(35,46,120,46);

//body parts
function head()
{
    context.beginPath();
    drawLine(73,46,73,50);
    context.arc(73, 60, 10,0, 2*Math.PI);
    context.stroke(); 
}

function rightHand()
{
    drawLine(73,69,43,98);
}

function leftHand()
{
    drawLine(73,69,103,98);
}

function body()
{
    drawLine(73,69,73,133);
}

function rightFeet()
{
    drawLine(73,133,46,179);
}

function leftFeet()
{
    drawLine(73,133,92,179);
}

function drawMan()
{     
   
    switch(numGuess)
    {
        case 1:
            head();
            break;
        case 2:
            rightHand();
            break;
        case 3: 
            leftHand();
            break;
        case 4:
            body();
            break;
        case 5:
            rightFeet();
            break;
        case 6:   
            leftFeet();
            setTimeout(function() {
                    var image = document.getElementById("hangman");
                    context.drawImage(image, 0, 0);       
                }, 1000)
            break;              
    }


}

/* //get coordinates of canvas
function getMousePos(canvas, evt) {
var rect = canvas.getBoundingClientRect();
const  x = Math.floor(evt.clientX - rect.left);
const  y = Math.floor(evt.clientY - rect.top);
document.getElementById("check").innerHTML = "x: " + x + " y: " + y;
}
canvas.addEventListener('mousemove', function(evt) {
    getMousePos(canvas, evt);
}) */
