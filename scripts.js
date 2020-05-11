var mapBorder = 50;
var screenWidth = document.documentElement.clientHeight;
var screenHeight = document.documentElement.clientHeight;
var mapWidth = screenWidth - (mapBorder * 2);
var mapHeight = screenHeight - (mapBorder * 2);

function displayWindowSize(){
    // Get width and height of the window excluding scrollbars
    screenWidth = document.documentElement.clientHeight;
    screenHeight = document.documentElement.clientHeight;
    mapWidth = screenWidth - (mapBorder * 2);
    mapHeight = screenHeight - (mapBorder * 2);
    // Display result inside a div element
    document.getElementById("result").innerHTML = "Map Width: " + mapWidth + ", " + "Map Height: " + mapHeight;
    drawmap();
}

window.addEventListener("resize", displayWindowSize);

displayWindowSize();
drawmap();

function drawmap(){
    var map = document.getElementById("map");
    var mapImg = document.getElementById("mapImg");
    if(map && mapImg){
        var ctx = map.getContext("2d");
        map.width = mapWidth;
        map.height = mapHeight;
        map.style.left = '' + mapBorder + 'px';
        map.style.top = '' + mapBorder + 'px';
        map.style.position = "absolute";

        mapImg.width = mapWidth;
        mapImg.height = mapHeight;
        mapImg.style.left = '' + mapBorder + 'px';
        mapImg.style.top = '' + mapBorder + 'px';
        mapImg.style.position = "absolute";
    
        //Draw map Fill mode
        //ctx.fillStyle = 'white';
        //ctx.fillRect(0,0,map.width, map.height);


        ctx.fillStyle = "#FF0000"; //red
        ctx.beginPath();
        ctx.arc(mapWidth / 4, mapWidth / 3.4, 10, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fill();
    }
}











