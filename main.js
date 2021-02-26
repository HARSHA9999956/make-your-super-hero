var canvas=new fabric.canvas("myCanvas");
var block_image_width=30;
var block_image_height=30;
player_x=10;
player_y=10;
player_object="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        Canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
if(e.shiftKey==true&&keypressed=='80')
{
    console.log("p & shift Keypressed together");
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;

}

if(e.shiftKey==true&&keypressed=='77')
{
    console.log("m & shift Keypressed together");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if(keypressed=='38'){
    Up();
    console.log("Up")
}
if(keypressed=='40'){
    down();
    console.log("down")
}
if(keypressed=='37'){
    left();
    console.log("left")
}
if(keypressed=='39'){
    right();
    console.log("right")
}
}

function Up(){

    if(player_y >=0){

        player_y=player_y-block_image_height;
        console.log("block_image_height=" +block_image_height);
        console.log("when up arrow is pressed, x="+player_x+",y="+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}

function down(){

    if(player_y <=350){

        player_y=player_y+block_image_height;
        console.log("block_image_height=" +block_image_height);
        console.log("when down arrow is pressed, x="+player_x+",y="+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}

function left(){

    if(player_x >=0){

        player_x=player_x-block_image_height;
        console.log("block_image_height=" +block_image_height);
        console.log("when left arrow is pressed, x="+player_x+",x="+player_x);
        Canvas.remove(player_object);
        player_update();
    }
}

function right(){

    if(player_x <=750){

        player_x=player_x+block_image_height;
        console.log("block_image_height=" +block_image_height);
        console.log("when right arrow is pressed, x="+player_x+",y="+player_y);
        Canvas.remove(player_object);
        player_update();
    }
}
