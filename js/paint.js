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
container.style.backgroundColor = "white";


container.addEventListener('mousemove', colorChange);


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
createColor("grey");
createColor("purple");
createColor("green");

var eraser = document.createElement("p");
eraser.textContent = "Eraser:";
leftmenu.appendChild(eraser);
createColor("white");

function selectColor(e){
    selectedColor = e.target.id;
    console.log(selectedColor)

}


var brushSizeTitle = document.createElement("p");
brushSizeTitle.textContent = "Brush Size:";
leftmenu.appendChild(brushSizeTitle);



var brushSize = 10;
var brushsizes = document.createElement("select");
var xsmall = document.createElement("option");
xsmall.textContent = "X-Small";
var small = document.createElement("option");
small.textContent = "Small";
small.selected = "selected";

var medium = document.createElement("option");
medium.textContent = "Medium";


var large = document.createElement("option");
large.textContent = "Large";
var xlarge = document.createElement("option");
xlarge.textContent = "X-Large";

brushsizes.add(small);
brushsizes.add(xsmall);
brushsizes.add(medium);
brushsizes.add(large);
brushsizes.add(xlarge);

brushsizes.classList.add("brushoptions");
brushsizes.addEventListener("change", setBrush);
leftmenu.appendChild(brushsizes);


var clearAllBtn = document.createElement("button");
clearAllBtn.textContent = "CLEAR ALL";
clearAllBtn.id = "clearbtn";
// clearAllBtn.addEventListener("click", clearAll);
clearAllBtn.onclick = clearAll;
leftmenu.appendChild(clearAllBtn);

function setBrush(e){
    if(e.target.value == "X-Small"){
        brushSize = 2;
    }

    else if(e.target.value == "Small"){
        brushSize = 5;

    }
    else if(e.target.value == "Medium"){
        brushSize = 10;
    }
    else if(e.target.value == "Large"){
        brushSize = 20;
    }
    else if(e.target.value == "X-Large"){
        brushSize = 40;
    }
    else{
        brushSize = 10;
    }

}


function colorChange(e){
    if (e.buttons==1){
        var container = document.getElementById("container");
        var newdiv = document.createElement('div');
        newdiv.style.backgroundColor = selectedColor;
        newdiv.style.left = (e.clientX-500) + "px";
        newdiv.style.top = e.clientY + "px";
        newdiv.style.width = brushSize + "px";
        newdiv.style.height = brushSize +  "px";
        newdiv.style.display = "inline-block";
        newdiv.style.position = "absolute";
        newdiv.classList.add("newdiv");
        container.appendChild(newdiv);
    }
}

function clearAll() {

    var container = document.getElementById("container");
    var newdiv = document.getElementsByClassName("newdiv");

    while (container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }
}