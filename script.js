canvas = new fabric.Canvas("canvas");
x = 50
y = 50
var player_object = "";
var bloque_object = "";
var size = 50;
function dibujarSteve() {
  canvas.remove(player_object);
  fabric.Image.fromURL("steve.png", function(Img) {
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
      top: y,
      left: x
    });
    canvas.add(player_object);
  });
}
function dibujarBloque(bloque,ancho,alto) {
  fabric.Image.fromURL(bloque, function(Img) {
    bloque_object = Img;

    bloque_object.scaleToWidth(ancho);
    bloque_object.scaleToHeight(alto);
    bloque_object.set({
      top: y,
      left: x
    });
    canvas.add(bloque_object);
  });
}
function mover(tecla) {
  if (tecla.key == "ArrowUp" || tecla.key == "w") {
    y = y - size
    dibujarSteve()
  }
  if(tecla.key=="ArrowDown"|| tecla.key =="s" ) {
    y = y + size
    dibujarSteve()
  }
  if(tecla.key=="ArrowLeft"|| tecla.key =="a" ){
   x = x - size
  dibujarSteve()
  }
    if(tecla.key=="ArrowRight"|| tecla.key =="d" ){
     x = x + size
    dibujarSteve()
    }
  if (tecla.key == "t") {
    dibujarBloque("trunk.jpg", size, size)
  }
  if(tecla.key == "h") {
    dibujarBloque("hoja.png", size,size)
  }
  if (tecla.key == "0") {
    dibujarBloque("tnt.png", size,size)
  }
  if (tecla.key == "q") {
    dibujarBloque("magma.png", size,size)
  }
  if (tecla.key == "c") {
    dibujarBloque("chiken.png", size,size)
  }
  if(tecla.shiftKey == true  && tecla.key == "*"){
    size = size + 10
    document.getElementById("size").innerHTML = size
  }
  if(tecla.shiftKey == true  && tecla.key == "_"){
    size = size - 10
    document.getElementById("size").innerHTML = size
  }
  console.log(tecla);
}
window.addEventListener("keydown", mover)

var imageSaver = document.getElementById('lnkDownload');
imageSaver.addEventListener('click', saveImage, false);

function saveImage(e) {
    this.href = canvas.toDataURL({
        format: 'png',
        quality: 0.8
    });
    this.download = 'canvas.png'
}