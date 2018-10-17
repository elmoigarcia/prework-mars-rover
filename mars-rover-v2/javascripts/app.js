/* Para mover los rovers hay que llamar a la función command */


var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
  id: "R1",
  turn: true,
} ;

// este es el rover R1

var rover2 = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
  id:"R2",
  turn: false,
} ;

// este es el rover R2

var moveX=0;
var moveY=0;
var posY;
var posX;
var direction;
var nextMove = true;

// variables globales que utlizan varias funciones

var nasaGrid = [
  [0,0,1,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,1,0],
]

// nasaGrid es el tablero por donde se mueven los rovers

function turnLeft(rover){
  if (rover.turn == true){
    direction = rover.direction;
  }
  else {
    direction = rover2.direction;
  }
  switch (direction) {
    case "N":
    if (rover.turn == true){
      rover.direction = "W";
    }
    else {rover2.direction = "W"}
     break;
     case "E":
     if (rover.turn == true){
      rover.direction = "N";
    }
    else {rover2.direction = "N"}
     break; 
     case "S":
     if (rover.turn == true){
      rover.direction = "E";
    }
    else {rover2.direction = "E"}
     break;
     case "W":
     if (rover.turn == true){
      rover.direction = "S";
    }
    else {rover2.direction = "S"}
     break;  
  }
  console.log ("turnLeft was called! ");
 }


// La función turnLeft gira en su posición hacia la izq. los rovers


function turnRight(rover){
  if (rover.turn == true){
    direction = rover.direction;
  }
  else {
    direction = rover2.direction;
  }
  switch (direction) {
    case "N":
    if (rover.turn == true){
      rover.direction = "E";
    }
    else {rover2.direction = "E"}
     break;
     case "E":
     if (rover.turn == true){
      rover.direction = "S";
    }
    else {rover2.direction = "S"}
     break; 
     case "S":
     if (rover.turn == true){
      rover.direction = "W";
    }
    else {rover2.direction = "W"}
     break;
     case "W":
     if (rover.turn == true){
      rover.direction = "N";
    }
    else {rover2.direction = "N"}
     break;  
  }
  console.log ("turnRight was called! ");
 }
   
// La funcioón turnRight gira en su posición hacia la drch. los rovers

function moveForward(rover) {
  if (rover.turn == true){
    posX = rover.x;
    posY = rover.y;
    direction = rover.direction;
    }
  else {
    posX = rover2.x;
    posY = rover2.y;
    direction = rover2.direction;
  }
  switch (direction) {
    case "N": 
          if (posY > 0 && rover.turn == true){
       rover.y--;
       moveY = rover.y;
       checkMove(moveX, moveY);
       if (okMove === false){
        rover.y++;}
    } else if (posY > 0  && rover2.turn  == true){
      rover2.y--;
      moveY = rover2.y;
      checkMove(moveX, moveY);
       if (okMove === false){
        rover2.y++;}
    }
      else {console.log("You can´t advance")}
      break;
    case "S": 
    if (posY < 9 && rover.turn == true){
      rover.y++;
      moveY = rover.y;
      checkMove(moveX, moveY);
       if (okMove === false){
        rover.y--;
        }
   } else if (posY < 9  && rover2.turn  == true){
     rover2.y++;
     moveY = rover2.y;
     checkMove(moveX, moveY);
       if (okMove === false){
        rover2.y--;
        }
   }
     else {console.log("You can´t advance")}
      break;
    case "E": 
    if (posX < 9 && rover.turn == true){
      rover.x++;
      moveX = rover.x; 
      checkMove(moveX, moveY);
       if (okMove === false){
        rover.x--;
        }
   } else if (posX < 9  && rover2.turn  == true){
     rover2.x++;
     moveX = rover2.x;
     checkMove(moveX, moveY);
       if (okMove === false){
           rover2.x--;
           }
   }
     else {console.log("You can´t advance")}     
      break;
    case "W": 
    if (posX > 0 && rover.turn == true){
      rover.x--;
      moveX = rover.x;
      checkMove(moveX, moveY);
       if (okMove === false){   
       rover.x++;}
   } else if (posX > 0 && rover2.turn  == true){
     rover2.x--;
     moveX = rover2.x;
     checkMove(moveX, moveY);
       if (okMove === false){rover2.x++;       
       }
   }
     else {console.log("You can´t advance")};
      break;
  }
}

// La función moveForward es la que realiza los movimientos hacia delante de los rovers


function moveBackward(rover) {
  if (rover.turn == true){
    posX = rover.x;
    posY = rover.y;
    direction = rover.direction;
    }
  else {
    posX = rover2.x;
    posY = rover2.y;
    direction = rover2.direction;
  }
  switch (direction) {
    case "N": 
          if (posY < 9 && rover.turn == true){
       rover.y++;
       moveY = rover.y;
       checkMove(moveX, moveY);
       if (okMove === false){
        rover.y--;}
    } else if (posY < 09 && rover2.turn  == true){
      rover2.y++;
      moveY = rover2.y;
      checkMove(moveX, moveY);
       if (okMove === false){
        rover2.y--;}
    }
      else {console.log("You can´t advance")}
      break;
    case "S": 
    if (posY > 0 && rover.turn == true){
      rover.y--;
      moveY = rover.y;
      checkMove(moveX, moveY);
       if (okMove === false){
        rover.y++;
        }
   } else if (posY > 0  && rover2.turn  == true){
     rover2.y--;
     moveY = rover2.y;
     checkMove(moveX, moveY);
       if (okMove === false){
        rover2.y++;
        }
   }
     else {console.log("You can´t advance")}
      break;
    case "E": 
    if (posX > 0 && rover.turn == true){
      rover.x--;
      moveX = rover.x; 
      checkMove(moveX, moveY);
       if (okMove === false){
        rover.x++;
        }
   } else if (posX > 0  && rover2.turn  == true){
     rover2.x--;
     moveX = rover2.x;
     checkMove(moveX, moveY);
       if (okMove === false){
           rover2.x++;
           }
   }
     else {console.log("You can´t advance")}     
      break;
    case "W": 
    if (posX < 9 && rover.turn == true){
      rover.x++;
      moveX = rover.x;
      checkMove(moveX, moveY);
       if (okMove === false){   
       rover.x--;}
   } else if (posX < 9 && rover2.turn  == true){
     rover2.x++;
     moveX = rover2.x;
     checkMove(moveX, moveY);
       if (okMove === false){
           rover2.x--;}
   }
     else {console.log("You can´t advance")};
      break;
  }
}

// La funcion moveBackward mueve hacia atrás los rovers


function command(test){
 //nextMove = true;
  var test;
  for (i=0; i < test.length; i++){
    switch(test[i]){
      case "r": 
      if (nextMove === true){
      turnRight(rover);
      }
      break;
      case "f":
      if (nextMove === true){
      moveForward(rover); 
      }
      break;
      case "l":
      if (nextMove === true){
      turnLeft(rover); 
      }
      break;
      case "b":
      if (nextMove === true){
      moveBackward(rover); 
      }
      break;
  }
}    
    if (rover.turn === true){
        console.log(rover.travelLog);
        turnR2();
    }
    else {
        console.log(rover2.travelLog);
        turnR1();}
}

//La funcion command es la encargada de dirigir a los rovers y también gestiona los turnos de movimiento


function checkMove(moveX, moveY){    
    switch (nasaGrid[moveY][moveX]){
       case 0:  
       nextMove = true;
       okMove = true;
       if (rover.turn === true){
           nasaGrid[posY][posX]=0;
           console.log("moveForward is called " + rover.x + "," + rover.y);
           rover.travelLog.push({posX,posY});
           nasaGrid[rover.y][rover.x]="R1";
       }
       else {console.log("moveForward is called " + rover2.x + "," + rover2.y);
       nasaGrid[posY][posX]=0;
       rover2.travelLog.push({posX,posY});
       nasaGrid[rover2.y][rover2.x]="R2";
      }
      break;
      case 1: console.log("obstacule");
      nextMove = false;
      okMove = false;
      nasaGrid[moveY][moveX]=1;
         break;
      case "R1":  if (rover.turn === false){
          nasaGrid[posY][posX]=0;
        console.log("Stop!!! The Rover1 in front!!!");  
        nasaGrid[rover.y][rover.x]="R1";
        }
      case "R2":  if (rover2.turn === false){
          nasaGrid[posY][posX]=0;
        console.log("Stop!!! The Rover2 in front!!!");
        nasaGrid[rover2.y][rover2.x]="R2";
    }
      break;
    }
    }

    // La función checkMove chequea que el movimiento se pueda realizar

    function turnR1(){
      nextMove = true;
      rover.turn = true;
      rover2.turn = false;
      console.log("The turn of rover R1");
  }
  
      // La función turnR1 cambia el turno al rover


function turnR2(){
    nextMove = true;
    rover.turn = false;
    rover2.turn = true;
    console.log("The turn of rover R2");
}
 
    // La función turnR2 cambia el turno al rover2


 