/**
 * Created by itc_user1 on 12/20/2016.
 */

//creating left menu for colors and buttons
var selectedColor = "white";

var leftmenu = document.createElement('div');
leftmenu.id = "leftmenu";

document.body.appendChild(leftmenu);

//right side div
var container = document.createElement('div');
container.id = "container";

document.body.appendChild(container);



//creating color button
function createColor(color){
    var colorBtn = document.createElement('p');
    colorBtn.classList.add("colorbtn");
    colorBtn.id = color;
    colorBtn.style.backgroundColor = color;
    colorBtn.addEventListener("click", selectColor);

    leftmenu.appendChild(colorBtn);
}

createColor("red");
createColor("blue");
createColor("aqua");
createColor("yellow");
createColor("black");
createColor("white");
createColor("grey");
createColor("purple");


//creating CANVAS !

for(var i=0; i<50; i++){
    var line = document.createElement('div');
    line.classList.add("line");

    for(var j=0; j<50; j++){
        var pixel = document.createElement('div');
        pixel.classList.add("pixeldiv");
        pixel.style.backgroundColor = "white";
        pixel.addEventListener('mouseover', colorChange);
        pixel.addEventListener('mousedown', mouseDown);
        pixel.addEventListener('mouseup', mouseUp);
        line.appendChild(pixel);
    }
    container.appendChild(line);

}


function selectColor(e){
    selectedColor = e.target.id;
    console.log(selectedColor)

}
var paint = false;

function mouseDown(){
    paint = true;
}

function mouseUp() {
    paint = false;
}

function colorChange(e){
    if (paint){
        var clicked = e.target;
        clicked.style.backgroundColor = selectedColor;
    }
}

