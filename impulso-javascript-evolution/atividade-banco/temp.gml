
// Get input
get_controls()

// verificação: se toco o chão e estou agachado
sc_crouching()

// x movement
//direction
moveDir = right - left

// get my face
if moveDir != 0 
{
    face = moveDir 
} 



// Get xspd
runType = runKey
xspd = moveDir * moveSpd[runType] 

if crouching xspd = 0
    

// x collision

var _subpixel = .5
if place_meeting(x + xspd, y,obj_wall)
{
    // first check if there is a slope to go up
    if !place_meeting(x + xspd , y - abs(xspd) - 1, obj_wall)
    {
        while place_meeting(x + xspd, y, obj_wall)
        {
            y -= _subpixel
        }
    }
    //Next, check for ceiling slopes, if there is no slope, regular collision
    //  if there is no slope, regular collision 
    else
    {
        
        // ceiling slopes
        if !place_meeting(x + xspd, y + abs(xspd)+1, obj_wall)
        {
            while place_meeting(x + xspd, y, obj_wall)
            {
                y += _subpixel 
            } 
            
        } 
        
        else
        
        // normal collision
        {
        

        
            // scoot up to wall precisely 
            var _pixelCheck = _subpixel * sign(xspd)
            while (!place_meeting(x + _pixelCheck, y, obj_wall))
            {
                x += _pixelCheck
            }
        }
        // set xspd to zero to collide
        xspd = 0

    }
}

// go down slopes
if yspd >= 0 and !place_meeting(x + xspd,y +1 , obj_wall) and place_meeting(x+xspd, y + abs(xspd) + 1, obj_wall ) 
{
    while !place_meeting(x + xspd, y + _subpixel, obj_wall)
    {
        y += _subpixel 
    } 
    

} 





// move
x += xspd



/// y movement
	// Gravity
	
	if coyoteHangTimer > 0
	{
		// count the timer down
	    coyoteHangTimer--
	} 
	
	else
	
	{
		// aply gravity to the player
	    yspd += grav 
		//We're no longer on the ground
		setOnground(false)
		
	} 
	

	
	//yspd += grav

// reset /  perpare jumping variables
if onGround 
{
    jumpCount = 0 
} 

else 

{	
	coyoteJumpTimer--
    // if the player is the air, make sure they can't do an extra jump
	if jumpCount == 0 and coyoteJumpTimer <= 0
	{
	    jumpCount = 1 
	} 

	coyoteHangTimer = 0
	

} 

// jump
// initiate the jump
if jumpKeyBuffered and jumpCount < jumpMax and cimaLivre()
{
	//reset the buffer
    jumpKeyBuffered = false
	jumpKeyBufferTimer = 0
	
	// increase the number of performed jumps
	jumpCount++
	
	// set the jump hold time
	jumpHoldTimer = jumpHoldFrames[jumpCount-1]
	
	// tell  ourself we're no longer on the ground
	setOnground(false)
	
	coyoteJumpTimer = 0
}

//cut off the jump by releasing the jump button
if !jump{
    jumpHoldTimer = 0 
} 

//jump based on the time/holding the jump
if jumpHoldTimer > 0
{
    // constanly set the yspd to be jumping speed
	yspd = jspd[jumpCount-1]
	
	//count down the timer
	jumpHoldTimer--
} 


// y collision and movement	
//cap falling speed

if yspd > termVel
{
    yspd = termVel 
} 

y += yspd

var _subpixel = .5
// upwards y collision (with ceiling slopes)

if yspd <0 and place_meeting(x ,y+yspd, obj_wall)
{
      // jump into slopes ceilings
	  
	  var _slopeSlide = false
	  
	  if moveDir == 0 and  !place_meeting(x - abs(yspd) - 1, y + yspd, obj_wall )
	  {
	      while place_meeting(x, y + yspd, obj_wall)
		  {
		      x -=1
		  } 
		  _slopeSlide = true
	  } 
	  
	  if moveDir == 0  and !place_meeting(x + abs(yspd) +1, y + yspd, obj_wall)
	  {
	       while place_meeting(x, y + yspd, obj_wall)
		   {
		       x+= 1 
		   } 
		   _slopeSlide = true 
	  } 
	  
	  if !_slopeSlide
	  {
		var _pixelCheck = _subpixel * sign(yspd)
		while !place_meeting(x, y + _pixelCheck, obj_wall)
		{
		    y += _pixelCheck 
		} 
	
		yspd = 0   
	  } 
} 

// downwards y collision

// check for solid and semisolid plataform under me 
var _clampYspd = max(0, yspd)

var _list = ds_list_create()
var _array = array_create(0)
array_push(_array, obj_wall, obj_semiSolidWall)

var _listsize = instance_place_list(x, y+ 1 + _clampYspd + movePlatMaxYspd, _array, _list, false)

for( var i = 0; i < _listsize; i++)
{	
	var _listInst = _list[|i] 
	
	if (
	    (_listInst.yspd <= yspd || instance_exists(myFloorPlat))
	    && (_listInst.yspd > 0 || place_meeting(x, y + 1 + _clampYspd, _listInst))
	)
	{	
		if _listInst.object_index == obj_wall
		or object_is_ancestor(_listInst.object_index, obj_wall)
		or floor(bbox_bottom) <= ceil(_listInst.bbox_top - _listInst.yspd)
		{
		    if !instance_exists(myFloorPlat)
			or _listInst.bbox_top + _listInst.yspd <= myFloorPlat.bbox_top + myFloorPlat.yspd
			or _listInst.bbox_top + _listInst.yspd <= bbox_bottom
			{
			    myFloorPlat = _listInst 
			} 	
		}	
	}
}

ds_list_destroy(_list)

if instance_exists(myFloorPlat) and !place_meeting(x, y + movePlatMaxYspd, myFloorPlat)
{
    myFloorPlat = noone 
}

// land on ground plataform precisely 
if instance_exists(myFloorPlat)
{
    var _subpixel = .5
	while !place_meeting(x, y + _subpixel, myFloorPlat) and !place_meeting(x, y, obj_wall)
	{
	    y +=_subpixel 
	} 
	
	// make sure we don't end up bellow the top a semisolid 
	if myFloorPlat.object_index == obj_semiSolidWall 
	or object_is_ancestor(myFloorPlat.object_index, obj_semiSolidWall)
	{
	    while place_meeting(x, y,myFloorPlat )
		{
		    y -= _subpixel 
		} 

		y = floor(y)
		yspd = 0
		setOnground(true)
	} 
	else 
	{
	    y = floor(y)
	    yspd = 0
	    setOnground(true)
	}
}

// Final moving plataform collisions and moviment
// y snap	 myself to my plataform
if instance_exists(myFloorPlat)
&& (myFloorPlat.yspd != 0
|| myFloorPlat.object_index == obj_movePlat
|| object_is_ancestor(myFloorPlat.object_index, obj_movePlat)
|| myFloorPlat.object_index == obj_semiSolidMoveWall
|| object_is_ancestor(myFloorPlat.object_index, obj_semiSolidMoveWall) )
{
    if !place_meeting(x, myFloorPlat.bbox_top, obj_wall) 
	and myFloorPlat.bbox_top >=bbox_bottom-movePlatMaxYspd
	{
	      y = myFloorPlat.bbox_top
	} 
	

} 





function cimaLivre()
{
    var h_player   = bbox_bottom - bbox_top;
    var check_dist = h_player / playerDividoEmQuantasPartes;
    var step_x     = 4;

    for (var xx = bbox_left + 2; xx <= bbox_right - 2; xx += step_x)
    {
        if (collision_line(
            xx,
            bbox_top,
            xx,
            bbox_top - check_dist,
            obj_wall,
            false,
            true
        )) {
            return false;
        }
    }

    return true;
}



// sprite control

// walking
if abs(xspd) > 0 
{
	sprite_index = walkSpr
} 

// running

if abs(xspd) >= moveSpd[1] {sprite_index = runSpr}


// not moving
if xspd == 0 
{
    sprite_index = idleSpr 
} 


// in the air

if !onGround 
{
    sprite_index = jumpSpr
} 

if crouching {
    sprite_index = crouchSpr 
} 



// set the colision mask
mask_index = maskSpr
if crouching 
{
	mask_index = crouchSpr      
} 






