var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;


player_x = 10;
player_y = 10;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img; 	//images are stored in canvas as object

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)		//get_image variable to store image as per keypress
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;		//object

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y, //images should be created according to player position
	left:player_x
	});
	canvas.add(block_image_object);

	});

} //end of c-86 here