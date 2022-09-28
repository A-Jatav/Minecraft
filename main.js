
// Create the reference variable of the canvas using fabric.Canvas()
var canvas = new fabric.Canvas("myCanvas");
// Define the starting width and height of the block images
var block_image_width = 30;
var block_image_height = 30;

// Define the starting x and y coordinates for the player
var player_x = 10;
player_y = 10;

// Define a variable named player_object to store object of the player image
var player_object = "";
var block_image_object = "";

// Add a function named player_update() to add the player image
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object);
    });
};

player_update()





// Add a function named new_image() to add the different images as per the specific keys pressed

function new_image(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_image_object);
    });
};

window.addEventListener("keydown", keypresstriggered);

function keypresstriggered(e){
    ascii_value = e.keyCode;
    if(ascii_value == '80' && e.shiftKey){
        console.log("Shift + p pressed");
        if(block_image_height <= 90 && block_image_width <= 100){
            block_image_width = block_image_width + 10;
            block_image_height = block_image_height + 10;
        };
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    };
    if(ascii_value == '77' && e.shiftKey){
        console.log("Shift + m pressed");
        if(block_image_height >= 40 && block_image_width >= 30){
            block_image_width = block_image_width - 10;
            block_image_height = block_image_height - 10;
        };
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    };
    if(ascii_value == '84'){
        new_image("trunk.jpg");
        console.log("t pressed");
    };
    if(ascii_value == '67'){
        new_image("cloud.jpg");
        console.log("c pressed");
    };
    if(ascii_value == '68'){
        new_image("dark_green.png");
        console.log("d pressed");
    };
    if(ascii_value == '71'){
        new_image("ground.png");
        console.log("g pressed");
    };
    if(ascii_value == '76'){
        new_image("light_green.png");
        console.log("l pressed");
    };
    if(ascii_value == '82'){
        new_image("roof.jpg");
        console.log("r pressed");
    };
    if(ascii_value == '85'){
        new_image("unique.png");
        console.log("u pressed");
    };
    if(ascii_value == '87'){
        new_image("wall.jpg");
        console.log("w pressed");
    };
    if(ascii_value == '89'){
        new_image("yellow_wall.png");
        console.log("y pressed");
    };
    if(ascii_value == '37'){
        left();
        console.log("left arrow pressed");
    };
    if(ascii_value == '38'){
        up();
        console.log("up arrow pressed");
    };
    if(ascii_value == '39'){
        right();
        console.log("right arrow pressed");
    };
    if(ascii_value == '40'){
        down();
        console.log("down arrow pressed");
    };
    if(ascii_value == '32'){
        blockdelete();
        console.log("spacebar pressed")
    };
};

function down(){
    if(player_y <= 440){
        player_y = player_y + block_image_height;
        console.log("x = "+player_x+" y = "+player_y);
        canvas.remove(player_object);
        player_update();
    };
};

function left(){
    if(player_x >= 0){
        player_x = player_x - block_image_width;
        console.log("x = "+player_x+" y = "+player_y);
        canvas.remove(player_object);
        player_update();
    };
};

function right(){
    if(player_x <= 820){
        player_x = player_x + block_image_width;
        console.log("x = "+player_x+" y = "+player_y);
        canvas.remove(player_object);
        player_update();
    };
};

function up(){
    if(player_y >= 30){
        player_y = player_y - block_image_height;
        console.log("x = "+player_x+" y = "+player_y);
        canvas.remove(player_object);
        player_update();
    };
};

function blockdelete(){
    canvas.remove(block_image_object);
};