/*Copyright (c) 2004-2020, Lode Vandevenne

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

the following modifications were made:
convert to js syntax
use drawImage instead of drawing textures
add rotation matrix
""fixed"" random janky math because the orignal example had no camera rotation
modifications Copyright (c) 2021, rieryn :D
*/
function Raycast(){
  renderctx.clearRect(0,0,screenX,screenY);
  let ZBuffer=[];
  for(var x = 0; x < screenX; x++)
    {ZBuffer[x]=0;
      //calculate ray position and direction
      
      let dirX = player.direction.x;
      let dirY = player.direction.y;
      let planeX = player.plane.x*0.01;
      let planeY = player.plane.y*0.01;
      let cameraX = 2 * x / screenX - 1; //x-coordinate in camera space
      let rayDirX = dirX + planeX * cameraX;
      let rayDirY = dirY + planeY * cameraX;
      //deltaDistX = sqrt(1 + (rayDirY * rayDirY) / (rayDirX * rayDirX))
      // sqrt(rayDirX * rayDirX + rayDirY * rayDirY) simplifies to 1
      //
      //why is an exercise for the reader
      let deltaDistX = Math.abs(1 / rayDirX)
      let deltaDistY = Math.abs(1 / rayDirY)
      let blockX = Math.floor(player.position.x);
      let blockY = Math.floor(player.position.y);
      let posX = player.position.x;
      let posY = player.position.y;
      let sideDistX;
      let sideDistY;
      //wall height
      let perpWallDist;
      //ray step
      let stepX;
      let stepY;
      let hit = 0; //was there a wall hit?
      let side; //was a NS or a EW wall hit?
      
      
      //calculate step and initial sideDist
      if (rayDirX < 0)
      {
        stepX = -1;
        sideDistX = (player.position.x - blockX) * deltaDistX;
      }
      else
      {
        stepX = 1;
        sideDistX = (blockX + 1.0 - player.position.x) * deltaDistX;
      }
      if (rayDirY < 0)
      {
        stepY = -1;
        sideDistY = (player.position.y - blockY) * deltaDistY;
      }
      else
      {
        stepY = 1;
        sideDistY = (blockY + 1.0 - player.position.y) * deltaDistY;
      }
      while (hit == 0)
      {
        //jump to next map square, OR in x-direction, OR in y-direction
        if (sideDistX < sideDistY)
        {
          sideDistX += deltaDistX;
          blockX += stepX;
          side = 0;
        }
        else
        {
          sideDistY += deltaDistY;
          blockY += stepY;
          side = 1;
        }
        //Check if ray has hit a wall
        if (gameMap[blockX][blockY] > 0) hit = 1;
        //still don't know why this is faster than directly solving for intersections
        //Calculate distance projected on camera plane (Euclidean distance will give fisheye effect!) btw i still don't know what the camera plane is
       //end while loop
      } 
       let hh = screenY/2;
        if (side == 0) perpWallDist = (blockX - posX + (1 - stepX) / 2) / rayDirX;
        else perpWallDist = (blockY - posY + (1 - stepY) / 2) / rayDirY;
        let lineHeight = Math.round(hh / perpWallDist);
        let drawStart = -lineHeight / 2 + hh;
	      let drawEnd = drawStart + lineHeight;
        

        //x from 1-24
        renderctx.fillRect(x, drawStart, 10, lineHeight);
        ZBuffer[x] = perpWallDist;
    }
        castSprites(ZBuffer);
}
function castSprites(zBuffer){
    let h = screenY/2;
    let spriteOrder =[];
    let spriteDistance =[];
  for(let i = 0; i < sprites.length; i++)
    {
      spriteOrder[i] = i;
      spriteDistance[i] = ((player.position.x - sprites[i].x) * (player.position.x - sprites[i].x) + (player.position.y - sprites[i].y) * (player.position.y  - sprites[i].y)); //sqrt not taken, unneeded
    }
    //sortSprites(spriteOrder, spriteDistance, sprites.length);

    //after sorting the sprites, do the projection and draw them
    for(let i = 0; i < sprites.length; i++)
    {
      //translate sprite position to relative to camera
      let spriteX = sprites[spriteOrder[i]].x - player.position.x;
      let spriteY = sprites[spriteOrder[i]].y - player.position.y;

      //transform sprite with the inverse camera matrix
      // [ planeX   dirX ] -1                                       [ dirY      -dirX ]
      // [               ]       =  1/(planeX*dirY-dirX*planeY) *   [                 ]
      // [ planeY   dirY ]                                          [ -planeY  planeX ]

      let invDet = 1.0 / (player.plane.x*0.01 * player.direction.y - player.direction.x * player.plane.y*0.01); //required for correct matrix multiplication

      let transformX = invDet * ( player.direction.y * spriteX - player.direction.x * spriteY);
      let transformY = invDet * (-player.plane.y*0.01 * spriteX + player.plane.x*0.01 * spriteY); //this is actually the depth inside the screen, that what Z is in 3D

      let spriteScreenX = Math.floor((screenX / 2) * (1 + transformX / transformY));

      //calculate height of the sprite on screen
      let spriteHeight = Math.abs((h / (transformY))); //using 'transformY' instead of the real distance prevents fisheye
      //calculate lowest and highest pixel to fill in current stripe
      let drawStartY = -spriteHeight / 2 + h ;
      if(drawStartY < 0) drawStartY = 0;
      let drawEndY = spriteHeight/2 + h;
      if(drawEndY >= h) drawEndY = h - 1;

      //calculate width of the sprite
      let spriteWidth = Math.abs( screenY/2 / (transformY));
      let drawStartX = -spriteWidth + spriteScreenX;
      let drawEndX = spriteWidth + drawStartX;

      if(drawEndX >= screenX) drawEndX = screenX - 1;
      let scale = sprites[spriteOrder[i]].img.width /spriteWidth;
      let imgStart = drawStartX;
      let imgEnd = drawEndX;
      //loop through every vertical stripe of the sprite on screen
      if (drawStartX<0) drawStartX = 0;
      for(let stripe = drawStartX; stripe <= drawEndX; stripe++){

      if (transformY > zBuffer[Math.round(stripe)]) {
        					if (stripe - imgStart <= 1) { 
						imgStart = stripe;
					} else {
						imgEnd = stripe; 
						break;
					}
				}	
			}
      let imgWidth = imgEnd-imgStart;

        //the conditions in the if are:
        //1) it's in front of camera plane so you don't see things behind you
        //2) it's on the screen 
      drawStartX = Math.round((imgStart - drawStartX) * scale);
				if (drawStartX < 0) {
					drawStartX = 0;
				}
        if(transformY > 0 && imgEnd>0 && imgStart< screenX &&imgWidth > 0){ 
            renderctx.drawImage(sprites[spriteOrder[i]].img, drawStartX, 0, imgWidth*scale, sprites[spriteOrder[i]].img.height, imgStart, drawStartY, imgWidth, spriteHeight);
          
        
      }
    }
}
/*end copyright block*/