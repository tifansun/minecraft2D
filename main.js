var x = 50;
var y = 50;
var player_object = "";
var bloque_object = "";
var size = 50;
function preload() {
    steveImg = loadImage("./steve.png");
    tntImg = loadImage("./tnt.png");
    magmaImg = loadImage("./magma.png");
    maderaImg = loadImage("./madera.jpg");
    chikenImg = loadImage("./chiken.png");
    hojaImg = loadImage("./hoja.png");
}

function setup() {
    canvas = createCanvas(800, 500);
    canvas.parent("#canvas");

}

function draw() {
    drawSprites()
}
function keyPressed() {
    clear();
    if (key == "ArrowUp" || key == "w") {
        y = y - size
        dibujarSteve()
    }
    if (key == "ArrowDown" || key == "s") {
        y = y + size
        dibujarSteve()
    }
    if (key == "ArrowLeft" || key == "a") {
        x = x - size
        dibujarSteve()
    }
    if (key == "ArrowRight" || key == "d") {
        x = x + size
        dibujarSteve()
    }
    if (key == "t") {
        dibujarBloque(maderaImg, size, size)
    }
    if (key == "h") {
        dibujarBloque(hojaImg, size, size)
    }
    if (key == "0") {
        dibujarBloque(tntImg, size, size)
    }
    if (key == "q") {
        dibujarBloque(magmaImg, size, size)
    }
    if (key == "c") {
        dibujarBloque(chikenImg, size, size)
    }
    /*if (tecla.shiftKey == true && key == "*") {
        size = size + 10
        document.getElementById("size").innerHTML = size
    }
    if (tecla.shiftKey == true && key == "_") {
        size = size - 10
        document.getElementById("size").innerHTML = size
    }*/
    //console.log(tecla);
}

var imageSaver = document.getElementById('lnkDownload');
imageSaver.addEventListener('click', saveImage, false);

function saveImage(e) {
    this.href = canvas.toDataURL({
        format: 'png',
        quality: 0.8
    });
    this.download = 'canvas.png'
}
function dibujarBloque(bloque,ancho,alto) {
    bloque.resize(ancho,alto)
    sprite = createSprite(x,y,ancho, alto);
    sprite.addImage(bloque)
}