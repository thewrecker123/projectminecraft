var canvas= new fabric.Canvas("canvasformc");

player_x= 10;
player_y=10;

block_width=30;
block_height=30;

var player_objects="";
var block_object="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_objects= Img;

        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(140);
        player_objects.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_objects);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_object= Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);

    if(e.shiftKey == true && key_pressed == "80"){
        console.log("shiftKey and p is pressed together");
        block_width= block_width+10;
        block_height= block_height+10;
        document.getElementById("current_height").innerHTML=block_height;
        document.getElementById("current_width").innerHTML=block_width;
    }
    if(e.shiftKey == true && key_pressed == "77"){
        console.log("shiftKey and m is pressed together");
        block_width= block_width-10;
        block_height= block_height-10;
        document.getElementById("current_height").innerHTML=block_height;
        document.getElementById("current_width").innerHTML=block_width;
    }

    if(key_pressed=="37"){
     left();
     console.log("left");
    }
    if(key_pressed=="38"){
        up();
        console.log("up");
       }
       if(key_pressed=="39"){
        right();
        console.log("right");
       }
       if(key_pressed=="40"){
        down();
        console.log("down");
       }

       if(key_pressed=="87"){
        new_image("wall.jpg");
        console.log("w");
       }

       if(key_pressed=="71"){
        new_image("ground.png");
        console.log("g");
       }
       if(key_pressed=="76"){
        new_image("light_green.png");
        console.log("l");
       }
       if(key_pressed=="84"){
        new_image("trunk.jpg");
        console.log("t");
       }
       if(key_pressed=="82"){
        new_image("roof.jpg");
        console.log("r");
       }
       if(key_pressed=="89"){
        new_image("yellow_wall.png");
        console.log("y");
       }
       if(key_pressed=="68"){
        new_image("dark_green.png");
        console.log("d");
       }
       if(key_pressed=="67"){
        new_image("cloud.jpg");
        console.log("c");
       }
       if(key_pressed=="85"){
        new_image("unique.png");
        console.log("u");
       }
}

function up(){
    if(player_y >= 0){
        player_y=player_y-block_height;
        console.log("block image height=" +block_height);
        console.log("when up arrow key is pressed , x="+player_x +", y="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}

function down(){
    if(player_y <= 260){
        player_y=player_y+block_height;
        console.log("block image height=" +block_height);
        console.log("when down arrow key is pressed , x="+player_x +", y="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}

function left(){
    if(player_x >= 0){
        player_x=player_x-block_width;
        console.log("block image width=" +block_width);
        console.log("when left arrow key is pressed , x="+player_x +", y="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}

function right(){
    if(player_x <= 550){
        player_x=player_x+block_width;
        console.log("block image width=" +block_width);
        console.log("when right arrow key is pressed , x="+player_x +", y="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}