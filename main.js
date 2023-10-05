canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["shrek.car.png"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;

background_image = shrek.car.jng[random_number];
console.log("background_image = " + background_image);
rover_image = "shrek.car.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //define una variable con una nueva imagen
	background_imgTag.onload = uploadBackground; // establece una función para cargar esta variable
	background_imgTag.src = background_image;   //carga la imagen

	rover_imgTag = new Image(); //define una variable con una nueva imagen
	rover_imgTag.onload = uploadrover; // establece una función para cargar esta variable
	rover_imgTag.src = rover_image;   // carga la imagen
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("Cuando se presione la flecha arriba,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("Cuando se presione la flecha abajo,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}

function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("Cuando se presione la flecha derecha,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
//Actividad adicional
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("Cuando se presione la flecha izquierda,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
//La actividad adicional termina aquí.
	