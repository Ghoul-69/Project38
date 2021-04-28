class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    ball1 = createSprite(100,200);
    ball1.addImage("ball1",ball1_img);
    ball2 = createSprite(300,200);
    ball2.addImage("ball2",ball2_img);
    ball3 = createSprite(500,200);
    ball3.addImage("ball3",ball3_img);
    ball4 = createSprite(700,200);
    ball4.addImage("ball4",ball4_img);
    balls = [ball1, ball2, ball3, ball4];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background="white"
      
      
      var index = 0;

      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        index = index + 1 ;

        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        balls[index-1].x = x;
        balls[index-1].y = y;

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          balls[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = balls[index-1].y;
        }
       
            }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    
   
    drawSprites();
  }


}
