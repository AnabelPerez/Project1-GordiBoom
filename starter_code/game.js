window.onload = function (){
  document.getElementById("start-button").onclick = function(){
    startGame();
  };

  var canvas = document.getElementById("canvas").getContext("2d");
  canvas.width=1000;
  canvas.height=490;
  var gorditoScore = document.getElementById("gorditoScore");
  var retreteScore = document.getElementById("retreteScore");
  var obstacles = [];
  var obstacleCoord = [
    {x:153,y:160,type:"gordito"},
    {x:153,y:237,type:"retrete"},
    {x:153,y:318,type:"sano"},
    {x:203,y:148,type:"sano"},
    {x:203,y:280,type:"gordito"},
    {x:253,y:148,type:"retrete"},
    {x:253,y:288,type:"sano"},
    {x:278,y:188,type:"retrete"},
    {x:278,y:258,type:"gordito"},
    {x:278,y:348,type:"retrete"},
    {x:303,y:148,type:"gordito"},
    {x:303,y:228,type:"gordito"},
    {x:303,y:308,type:"sano"},
    {x:353,y:148,type:"sani"},
    {x:353,y:228,type:"retrete"},
    {x:353,y:308,type:"retrete"},
    {x:403,y:148,type:"gordito"},
    {x:403,y:228,type:"gordito"},
    {x:452,y:118,type:"retrete"},
    {x:452,y:228,type:"gordito"},
    {x:452,y:308,type:"sano"},
    {x:503,y:118,type:"sano"},
    {x:503,y:188,type:"gordito"},
    {x:503,y:228,type:"sano"},
    {x:503,y:310,type:"retrete"},
    {x:538,y:148,type:"retrete"},
    {x:552,y:308,type:"sano"},
    {x:577,y:193,type:"sano"},
    {x:577,y:268,type:"sano"},
    {x:601,y:108,type:"sano"},
    {x:601,y:230,type:"gordito"},
    {x:601,y:230,type:"gordito"},
    {x:652,y:135,type:"gordito"},
    {x:652,y:230,type:"gordito"},
    {x:652,y:308,type:"sano"},
    {x:652,y:348,type:"sano"},
    {x:702,y:148,type:"sano"},
    {x:702,y:228,type:"retrete"},
    {x:702,y:308,type:"sano"},
    {x:757,y:148,type:"gordito"},
    {x:757,y:230,type:"gordito"},
    {x:757,y:308,type:"sano"},
    {x:797,y:118,type:"retrete"},
    {x:797,y:358,type:"retrete"},
    {x:838,y:158,type:"retrete"},
    {x:838,y:238,type:"gordito"},
    {x:838,y:320,type:"gordito"},
    {x:888,y:158,type:"retrete"},
    {x:888,y:238,type:"gordito"},
    {x:888,y:320,type:"sano"},
    {x:938,y:120,type:"gordito"},
    {x:938,y:198,type:"gordito"},
    {x:938,y:278,type:"sano"},
    {x:938,y:358,type:"sano"},
    {x:988,y:120,type:"gordito"},
    {x:988,y:198,type:"sano"},
    {x:988,y:278,type:"gordito"},
    {x:988,y:358,type:"sano"},
    {x:1032,y:153,type:"sano"},
    {x:1032,y:232,type:"retrete"},
    {x:1032,y:313,type:"gordito"},
    {x:1082,y:153,type:"gordito"},
    {x:1082,y:232,type:"retrete"},
    {x:1082,y:313,type:"sano"},
    {x:1132,y:120,type:"gordito"},
    {x:1132,y:275,type:"gordito"},
    {x:1252,y:163,type:"sano"},
    {x:1252,y:243,type:"sano"},
    {x:1252,y:322,type:"retrete"},
    {x:1292,y:243,type:"gordito"},
    {x:1338,y:162,type:"retrete"},
    {x:1338,y:243,type:"gordito"},
    {x:1338,y:322,type:"retrete"},
    {x:1382,y:162,type:"gordito"},
    {x:1382,y:325,type:"gordito"},
    {x:1442,y:162,type:"sano"},
    {x:1442,y:242,type:"retrete"},
    {x:1502,y:162,type:"retrete"},
    {x:1502,y:242,type:"retrete"},
    {x:1502,y:325,type:"gordito"},
    {x:1552,y:162,type:"sano"},
    {x:1552,y:323,type:"sano"},
    {x:1601,y:178,type:"retrete"},
    {x:1601,y:362,type:"retrete"},
    {x:1622,y:273,type:"sano"},
    {x:1652,y:112,type:"retrete"},
    {x:1652,y:195,type:"gordito"},
    {x:1652,y:365,type:"gordito"},
    {x:1702,y:113,type:"sano"},
    {x:1702,y:194,type:"sano"},
    {x:1702,y:273,type:"sano"},
    {x:1752,y:114,type:"gordito"},
    {x:1752,y:194,type:"gordito"},
    {x:1752,y:362,type:"retrete"},
    {x:1802,y:113,type:"sano"},
    {x:1802,y:194,type:"sano"},
    {x:1802,y:365,type:"gordito"},
    {x:1852,y:114,type:"gordito"},
    {x:1852,y:285,type:"gordito"},
    {x:1902,y:112,type:"retrete"},
    {x:1902,y:155,type:"gordito"},
    {x:1902,y:193,type:"sano"},
    {x:1902,y:235,type:"sano"},
    {x:1902,y:278,type:"sano"},
    {x:1902,y:320,type:"sano"},
    {x:1902,y:362,type:"retrete"},
    {x:1952,y:192,type:"retrete"},
    {x:1952,y:364,type:"gordito"},
    {x:2002,y:158,type:"sano"},
    {x:2002,y:237,type:"retrete"},
    {x:2002,y:318,type:"sano"},
    {x:2052,y:158,type:"gordito"},
    {x:2052,y:237,type:"retrete"},
    {x:2052,y:318,type:"gordito"},
    {x:2102,y:158,type:"sano"},
    {x:2102,y:318,type:"sano"},
    {x:2152,y:198,type:"retrete"},
    {x:2152,y:277,type:"retrete"},
    {x:2152,y:357,type:"retrete"},
    {x:2202,y:198,type:"retrete"},
    {x:2202,y:277,type:"retrete"},
    {x:2202,y:357,type:"retrete"},
    {x:2252,y:108,type:"sano"},
    {x:2252,y:278,type:"sano"},
    {x:2252,y:358,type:"sano"},
    {x:2302,y:110,type:"gordito"},
    {x:2297,y:190,type:"gordito"},
    {x:2297,y:279,type:"gordito"},
    {x:2297,y:349,type:"gordito"},
    {x:2346,y:190,type:"gordito"},
    {x:2346,y:349,type:"gordito"},
    {x:2401,y:187,type:"sano"},
    {x:2401,y:268,type:"sano"},
    {x:2401,y:368,type:"retrete"},
    {x:2427,y:112,type:"retrete"},
    {x:2427,y:227,type:"retrete"},
    {x:2452,y:147,type:"retrete"},
    {x:2452,y:347,type:"retrete"},
    {x:2502,y:148,type:"sano"},
    {x:2502,y:348,type:"sano"},
    {x:2509,y:258,type:"sano"},
    {x:2552,y:147,type:"retrete"},
    {x:2552,y:258,type:"sano"},
    {x:2552,y:347,type:"retrete"},
    {x:2602,y:150,type:"gordito"},
    {x:2602,y:257,type:"sano"},
    {x:2602,y:350,type:"gordito"},
    {x:2607,y:207,type:"retrete"},
    {x:2652,y:178,type:"sano"},
    {x:2652,y:308,type:"sano"},
    {x:2652,y:370,type:"sano"},
    {x:2687,y:212,type:"retrete"},
    {x:2702,y:148,type:"sano"},
    {x:2702,y:279,type:"gordito"},
    {x:2702,y:338,type:"sano"},
    {x:2752,y:148,type:"sano"},
    {x:2752,y:279,type:"gordito"},
    {x:2752,y:338,type:"sano"},
    {x:2767,y:212,type:"retrete"},
    {x:2802,y:118,type:"retrete"},
    {x:2802,y:178,type:"sano"},
    {x:2802,y:239,type:"gordito"},
    {x:2802,y:297,type:"retrete"},
    {x:2802,y:360,type:"gordito"},    
  ];
  
  //clases

  function Maze(x){
    this.x = 130;
    this.y = 0;
    this.width = 2800;
    this.height = 490;
    this.coord =[
     {x:130,y:0,width:2660,height:80},     
     {x:130,y:100,width:30,height:10},
     {x:130,y:110,width:50,height:30},
     {x:130,y:190,width:100,height:30},
     {x:130,y:270,width:50,height:30},
     {x:130,y:350,width:100,height:30},
     {x:230,y:100,width:170,height:30},
     {x:230,y:180,width:30,height:90},
     {x:230,y:320,width:30,height:70},
     {x:310,y:180,width:140,height:30},
     {x:310,y:260,width:100,height:30},
     {x:310,y:340,width:50,height:40},
     {x:410,y:260,width:30,height:100},
     {x:440,y:340,width:50,height:30},
     {x:450,y:150,width:30,height:60},
     {x:490,y:260,width:70,height:30},
     {x:530,y:100,width:30,height:30},
     {x:530,y:180,width:30,height:80},
     {x:540,y:340,width:100,height:30},
     {x:610,y:130,width:30,height:80},
     {x:610,y:260,width:30,height:80},
     {x:640,y:180,width:100,height:30},
     {x:640,y:260,width:100,height:30},
     {x:690,y:100,width:50,height:30},
     {x:690,y:340,width:50,height:50},
     {x:790,y:150,width:30,height:60},
     {x:790,y:250,width:30,height:60},
     {x:870,y:110,width:50,height:30},
     {x:870,y:190,width:50,height:30},
     {x:870,y:270,width:50,height:30},
     {x:870,y:350,width:50,height:30},
     {x:970,y:150,width:50,height:30},
     {x:970,y:230,width:50,height:30},
     {x:970,y:310,width:50,height:30},
     {x:1060,y:100,width:60,height:40},
     {x:1060,y:180,width:60,height:40},
     {x:1060,y:260,width:60,height:40},
     {x:1060,y:340,width:60,height:40},
     {x:1160,y:140,width:40,height:120},
     {x:1160,y:300,width:40,height:90},
     {x:1200,y:190,width:40,height:40},
     {x:1200,y:350,width:50,height:40},
     {x:1240,y:110,width:120,height:40},
     {x:1240,y:270,width:50,height:40},
     {x:1280,y:150,width:40,height:80},
     {x:1290,y:270,width:40,height:80},
     {x:1370,y:190,width:40,height:120},
     {x:1370,y:350,width:80,height:40},
     {x:1400,y:100,width:40,height:50},
     {x:1450,y:190,width:80,height:40},
     {x:1450,y:270,width:40,height:120},
     {x:1480,y:110,width:40,height:40},
     {x:1530,y:190,width:40,height:120},
     {x:1530,y:350,width:40,height:40},
     {x:1560,y:100,width:40,height:50},
     {x:1610,y:220,width:40,height:130},
     {x:1640,y:140,width:170,height:40},
     {x:1690,y:220,width:80,height:40},
     {x:1690,y:300,width:40,height:90},
     {x:1770,y:300,width:40,height:90},
     {x:1850,y:140,width:40,height:130},
     {x:1850,y:310,width:40,height:80},
     {x:1930,y:100,width:40,height:80},
     {x:1930,y:220,width:40,height:130},
     {x:2000,y:100,width:50,height:50},
     {x:2000,y:180,width:50,height:50},
     {x:2000,y:260,width:50,height:50},
     {x:2000,y:340,width:50,height:50},
     {x:2080,y:100,width:50,height:50},
     {x:2080,y:180,width:50,height:130},
     {x:2080,y:340,width:50,height:50},
     {x:2130,y:220,width:110,height:50},
     {x:2160,y:100,width:50,height:90},
     {x:2160,y:300,width:130,height:50},
     {x:2160,y:380,width:130,height:50},
     {x:2240,y:130,width:50,height:140},
     {x:2290,y:130,width:50,height:50},
     {x:2320,y:210,width:50,height:130},
     {x:2320,y:370,width:50,height:20},
     {x:2370,y:100,width:50,height:80},
     {x:2370,y:210,width:50,height:50},
     {x:2400,y:290,width:50,height:70},
     {x:2450,y:100,width:150,height:40},
     {x:2450,y:170,width:50,height:170},
     {x:2480,y:370,width:120,height:20},
     {x:2500,y:170,width:50,height:50},
     {x:2530,y:280,width:70,height:60},
     {x:2550,y:170,width:50,height:80},
     {x:2630,y:100,width:50,height:10},
     {x:2630,y:140,width:50,height:30},
     {x:2630,y:200,width:50,height:100},
     {x:2630,y:330,width:50,height:30},
     {x:2710,y:110,width:50,height:30},
     {x:2710,y:170,width:50,height:100},
     {x:2710,y:300,width:50,height:30},
     {x:2710,y:360,width:50,height:30},
     {x:2790,y:100,width:30,height:10},
     {x:2790,y:140,width:30,height:30},
     {x:2790,y:200,width:30,height:30},
     {x:2790,y:260,width:30,height:30},
     {x:2790,y:320,width:30,height:30},
     {x:2790,y:380,width:30,height:10},
     {x:130,y:410,width:2660,height:80}, 
    ]

    this.draw = function (vel){ //parámetro para modificar la velocidad
      this.coord.forEach(function(rect){ //parámetro para dibujar cada elemento del arreglo de objetos
        rect.x = rect.x - vel;//parámetro de la posición x - la velocidad
        canvas.strokeRect(rect.x,rect.y,rect.width,rect.height); //salida del elemento dibujdo con la velocidad modificada en la posición x
      });
    }//cierre draw
  }//cierre Maze

  function GameBoard(){
    this.x = 0;
    this.y = 0;
    this.width = 2970;
    this.height = 490;
    this.img = new Image();
    this.img.src = "images/fondo.jpg";
    this.img.onload = function(){
      this.draw(-3);
    }.bind(this);

    this.draw = function (vel){
      this.x = this.x - vel;
      canvas.drawImage(this.img, this.x, this.y, this.width, this.height);
    } 
  }

  function Player(){
    this.x=50;
    this.y=230;
    this.width=20;
    this.height=20;
    this.gordito=0; //aumento de player, valor inicial 0
    this.retrete=0; //disminución de player, valor inicial 0
    this.scores=[]; //
    this.img = new Image();
    this.img.src = "images/player2.png"; //imagen inicial del jugador
    this.img.onload = function(){
      this.draw();
    }.bind(this);
    this.draw = function(){
      canvas.drawImage(this.img, this.x,this.y,this.width, this.height);
      if (this.y < 0 || this.y > 490 - this.height) gameOver(); //límites del canvas
      }
    this.moveUp = function(){
     this.y-=10;
    }
    this.moveDown = function(){
      this.y+=10;
    }
    this.moveRight = function(){
      this.x+=10; 
    }

    this.isTouching = function(wall){
      for (var i=0; i < wall.length ; i++){
      if (this.x < wall[i].x + wall[i].width //colisión pared izquierda
        && this.x + this.width > wall[i].x //colisión pared izquierda
        &&  this.y < wall[i].y + wall[i].height
        &&  this.y + this.height > wall[i].y)
        {
         gameOver();
        }
      } //cierre for
    } //cierre función isTouching maze

    this.isTouchingObstacle = function(){
      for (var i=0; i < obstacles.length ; i++){
      if (this.x+5 < obstacles[i].x + obstacles[i].width
        && this.x + this.width > obstacles[i].x
        &&  this.y-5 < obstacles[i].y + obstacles[i].height
        &&  this.y+5 + this.height > obstacles[i].y
        && obstacles[i].isVisible)
        {
          switch (obstacles[i].type){
            case "gordito":
            this.width +=2;
            this.height +=2;
            this.gordito +=2;
            this.scores.push("<img width='30' src='images/taco.png'/>");
            this.scores.push("<img width='30' src='images/taco.png'/>");
            break;
            case "sano":
            this.width +=1;
            this.height +=1;
            this.gordito +=1;
            this.scores.push("<img width='30'src='images/lettuce.png'/>");
            break;
            case "retrete":
            this.width -=1;
            this.height -=1;
              if (this.gordito==0){gameOver();}
            this.gordito -=1;
            this.retrete +=1;
            this.scores.pop();
          } 
        obstacles.splice(i, 1);
        this.updateScore();//borra objeto que colisiona
      }//cierre if
    }//cierre for
  }//cierre isTouchingObstacle
    
  this.updateScore = function(){  
    if (this.gordito == 6){
      gameOver();
    } if (this.retrete == 6)
    {
      win();
    }
   gorditoScore.innerHTML = "Gordito";
   retreteScore.innerHTML = "Gordito negativo";//para borrar info pasada
   for (i=1;i<=6;i++){
      if (i<=this.gordito){
        gorditoScore.innerHTML+= this.scores[i-1];//para que empiece en 0
      } else {
        gorditoScore.innerHTML+="<span class='circulos'></span>";
      }
      if (i<=this.retrete){
        retreteScore.innerHTML+="<img width='30'src='images/poo.png'/>";
      } else {
        retreteScore.innerHTML+="<span class='circulos'></span>";
      }
    }
  }//cierre updateScore
} // cierre player
 
  function Obstacle(type,x,y,isVisible){
    this.x=x;
    this.y=y;
    this.width=20;
    this.height=20;
    this.type=type;
    this.isVisible=isVisible;
    this.img = new Image();
    this.img.src = "images/taco.png"; //imagen de la comida gordita
    this.img2 = new Image();
    this.img2.src = "images/lettuce.png"; //imagen de la comida sana
    this.img3 = new Image();
    this.img3.src = "images/toilet.png"; //imagen del retrete    

    this.draw= function(vel){
      this.x = this.x - vel;
      switch(type){
        case "gordito":
        canvas.drawImage(this.img, this.x, this.y, this.width, this.height);
        break;
        case "sano":
        canvas.drawImage(this.img2, this.x, this.y, this.width, this.height);
        break;
        case "retrete":
        canvas.drawImage(this.img3, this.x, this.y, this.width, this.height);
      }
    }
  }

  //declaraciones

  var intervalo;
  var velocidad = 0;
  var maze = new Maze();
  maze.draw(0);
  var player = new Player();
  player.draw();
  player.updateScore();
  var gameBoard = new GameBoard();
  gameBoard.draw(0);   
  console.log(gameBoard);

  function startGame(){
    if (intervalo > 0) return;
    intervalo = setInterval(function(){
      upDate();
    },12000/60);
    generateObstacle();
  }
  
  function upDate(){
    velocidad=3;
    canvas.clearRect(0,0,1000,490);
    maze.draw(velocidad);
    gameBoard.draw(velocidad);
    player.draw();
    checkCollision();
    drawObscacles();
  }
  
  function stop(){
    clearInterval(intervalo);
    intervalo=0;
  }

  function gameOver(){
    stop();
    canvas.font = "30px Fredoka One";
    canvas.fillStyle="white";
    canvas.fillText("Game Over gordito :'(", 300, 60);
  }

  function win(){
    stop();
    canvas.font = "30px Fredoka One";
    canvas.fillStyle="white";
    canvas.fillText("Ganaste :D",300,60);
  }

  function checkCollision(){
    player.isTouching(maze.coord);
    player.isTouchingObstacle(obstacles);
  }

  function generateObstacle(){
      for (i=0;i<obstacleCoord.length;i++){
      var obstacle = new Obstacle(obstacleCoord[i].type,obstacleCoord[i].x,obstacleCoord[i].y,Math.random() >= 0.5);
      obstacles.push(obstacle);
    }
  }

  function drawObscacles(){
    obstacles.forEach(function(obstacle){
      if (obstacle.isVisible){
        obstacle.draw(velocidad);
      }      
    })
  }
  
  /*metodos    
  function youWin(){}*/

this.addEventListener("keydown", function(e){
  switch(e.keyCode){
    case 38:
    player.moveUp();
    console.log("up", player);
    break;
    case 39:
    player.moveRight();
    break
    case 40:
    player.moveDown();
    console.log("down", player);
  }
})
}
