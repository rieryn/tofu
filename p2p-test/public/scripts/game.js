//following tutorial from https://lodev.org/cgtutor/raycasting.html 
//short summary:
//DDA is basically search along grid line intersections
//the wall is at the intersection
//then the wall height is calculated from the distance to the camera plane
//individual strips are rendered with drawImage
//sprites are sized, sorted by order, then if size<wall or if it's offscreen it's not shown
var mapX = 24;		
var mapY = 24;	
var screenX = 640;
var screenY =480;
var map =  document.getElementById('map');
var objects = document.getElementById("objects");
var render = document.getElementById("render");
map.width = screenX;
map.height = screenY;
objects.width = screenX;
objects.height = screenY;
render.width = screenX;
render.height = screenY;
var mapctx = map.getContext('2d');
var objctx = objects.getContext('2d');
var renderctx = render.getContext('2d');
var unit = screenY/mapY;
var gameMap = [
	  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,2,2,2,2,0,0,0,0,3,0,3,0,3,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,3,0,0,0,3,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,2,0,2,2,0,0,0,0,3,0,3,0,3,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,0,0,0,5,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var player = {
  //coordinate
  position:{
	x : 2,
	y : 2,
  },
  //vectors
  direction:{
    x: 1,
    y: 0,
  },
  plane:{
    x:1,
    y:1,
  },

	speed : 0,
	moveSpeed : 0.18,
  strafeSpeed:0,
	rotSpeed : 6 * Math.PI / 180
}
player.plane.x = rotateVector(player.direction.x, player.direction.y, -Math.PI/2).x * 120;
player.plane.y = rotateVector(player.direction.x, player.direction.y, -Math.PI/2).y * 120;
function drawMap() {
	for (var y=0; y < mapY; y++) {
		for (var x=0; x < mapX; x++) {
			var wall = gameMap[x][y];
			if (wall > 0) {
				mapctx.fillStyle = '#7fd5eb';
				mapctx.fillRect(
					x*unit,
					y*unit,
					unit,
					unit
				);
			}
		}
	}
}
function drawObj(){
  objctx.clearRect(0,0,screenX,screenY);
  objctx.fillStyle  = "black";
  objctx.fillRect(player.position.x*unit,
                  player.position.y*unit,
                  unit/5,unit/5);
  //direction visualization
  objctx.fillRect(
    player.position.x*unit+2*player.direction.x*unit,
    player.position.y*unit+player.direction.y*unit, 
    unit/5,unit/5);
  objctx.fillRect(
    4*unit,4*unit, 
    unit/5,unit/5);
  //0.01 is the rotationspeed and actually i still don't get it
  //camera plane visualization
  objctx.beginPath();
  objctx.moveTo(
    player.position.x*unit+0.01*player.plane.x*unit,
    player.position.y*unit+0.01*player.plane.y*unit);
  objctx.lineTo(
    player.position.x*unit-0.01*player.plane.x*unit,
    player.position.y*unit-0.01*player.plane.y*unit);
  objctx.stroke();
  //fov visuallization;
  objctx.beginPath();
  objctx.moveTo(
    player.position.x*unit,
    player.position.y*unit);
  objctx.lineTo(
    player.position.x*unit+player.direction.x*unit+0.01*player.plane.x*unit,
    player.position.y*unit+player.direction.y*unit+0.01*player.plane.y*unit);
  objctx.stroke();
  objctx.closePath();
  objctx.beginPath();
  objctx.moveTo(
    player.position.x*unit,
    player.position.y*unit);
  objctx.lineTo(
    player.position.x*unit+player.direction.x*unit-0.01*player.plane.x*unit,
    player.position.y*unit+player.direction.y*unit-0.01*player.plane.y*unit);
  objctx.stroke();

}
/*While there is some uncertainty on this point, a recent case from the Ninth Circuit Court of Appeals concluded that inline linking does not directly infringe copyright because no copy is made on the site providing the link; the link is just HTML code pointing to the image or other material.
anyway it's watermarked*/
var sprites = [];
var myImage = new Image();
myImage.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c19ad38c-91d3-4e59-8600-391630fa8871/dd3dfb3-2043cbd7-637b-41a0-92f6-31978a1b4e03.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYzE5YWQzOGMtOTFkMy00ZTU5LTg2MDAtMzkxNjMwZmE4ODcxXC9kZDNkZmIzLTIwNDNjYmQ3LTYzN2ItNDFhMC05MmY2LTMxOTc4YTFiNGUwMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.LqD6VKEJBF9t3rAZHpbZ55MtOzZK6zyJ-3jmJjAUnk0';
var testsprite = {
  img: myImage,
  y: 4,
  x: 4,
  height:200,
  width:100,
  
  
  
}
sprites.push(testsprite);



drawMap();
drawObj();
function rotateVector (vx, vy, angle) {
    
    return  { x: vx * Math.cos(angle) - vy * Math.sin(angle),
              y: vx * Math.sin(angle) + vy * Math.cos(angle)
            }
}
function rotate(obj, angle) {
    let dir = rotateVector(obj.direction.x, obj.direction.y, angle);
    obj.direction.x = dir.x;
    obj.direction.y = dir.y;

    let plane = rotateVector(obj.plane.x, obj.plane.y, angle);
    obj.plane.x = plane.x;
    obj.plane.y = plane.y;
}
function update(){
 move();
    Raycast();

  drawObj();
  setTimeout(update,1000/30); //1000ms/fps
}
update();
function move() {
  let strafeSpeed = player.strafeSpeed * player.moveSpeed;
	let speed = player.speed * player.moveSpeed; 
  //calc direction vector
	var newX = player.position.x + player.direction.x*speed;
	var newY = player.position.y + player.direction.y*speed;
  newX += player.plane.x*strafeSpeed;
	newY += player.plane.y*strafeSpeed;
  //check for wall
  let parsedX = parseInt(newX);
  let parsedY = parseInt(newY);
  if((gameMap[parsedX][parsedY] == 0)){
	player.position.x = newX;
	player.position.y = newY;}
}
function bindKeys() {
	document.onkeydown = function(e) {
		e = e || window.event;
    
    switch (e.keyCode) {
			//up
			case 38, 87:
				player.speed = 1; break;
			//down
			case 40, 83:
				player.speed = -1; break;
			//left
			case 37, 65:
				player.strafeSpeed = -0.01; break;
			//right
			case 39, 68:
				player.strafeSpeed = 0.01; break;
      //Q strafe sorry arrow keys
      case 81:
        rotate(player,0.1); break;
      //E strafe 
      case 69:
        rotate(player,-0.1); break;
		}
	}

	document.onkeyup = function(e) {
		e = e || window.event;
		switch (e.keyCode) {
			case 38, 87:
			case 40, 83:
				player.speed = 0; break;
			case 37, 65:
			case 39, 68:
				player.strafeSpeed = 0; break;
		}
	}
}
 bindKeys();