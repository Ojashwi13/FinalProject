class Level2{
    constructor(){

    }
    display(){
      obstacle1.x = -1000;
      obstacle1.y = -1000;
      obstacle2.x = -1000;
      obstacle2.y = -1000;
      obstacle3.x = -1000;
      obstacle3.y = -1000;
      obstacle4.x = -1000;
      obstacle4.y = -1000;
      obstacle5.x = -1000;
      obstacle5.y = -1000;
      obstacle6.x = -1000;
      obstacle6.y = -1000;
      obstacle7.x = -1000;
      obstacle7.y = -1000;
      obstacle8.x = -1000;
      obstacle8.y = -1000;
      obstacle9.x = -1000;
      obstacle9.y = -1000;
      obstacle10.x = -1000;
      obstacle10.y = -1000;
      obstacle11.x = -1000;
      obstacle11.y = -1000;
      obstacle12.x = -1000;
      obstacle12.y = -1000;
      obstacle13.x = -1000;
      obstacle13.y = -1000;
      obstacle14.x = -1000;
      obstacle14.y = -1000;
      obstacle15.x = -1000;
      obstacle15.y = -1000;
      obstacle16.x = -1000;
      obstacle16.y = -1000;
      obstacle17.x = -1000;
      obstacle17.y = -1000;
      obstacle18.x = -1000;
      obstacle18.y = -1000;
      finish.x = -1000;
      finish.y = -1000;
      coin.x = -1000;
      coin.y = -1000;
      
        background("orange");
        fill("black"); 
        textSize(24); 
        text("score:" + score,1200,100);
        
        fill("black"); 
        textSize(24); 
        text("lives:" + lives,1200,130);
      
        fill("black"); 
        textSize(24); 
        timer = timer-0.033
        text("timer:" + timer,1200,160);
        
        if(gameState === 1){
      
        gameOver.visible = false;
        playAgain.visible = false;
        blackbg.visible = false;
      
        if(keyDown("DOWN_ARROW")){
          ball.y=ball.y+7;
        }
        if(keyDown("UP_ARROW")){
          ball.y=ball.y-7;
        }    
        if(keyDown("LEFT_ARROW")){
          ball.x=ball.x-7;
        }    
        if(keyDown("RIGHT_ARROW")){
          ball.x=ball.x+7;
        }    
        if (ball.isTouching(coin)){
          score = score+5;
          coin.x=-100;
          coin.y=-100;  
        }
        if (ball.isTouching(obstacle1)||ball.isTouching(obstacle2)||ball.isTouching(obstacle3)||ball.isTouching(obstacle4)||ball.isTouching(obstacle5)||ball.isTouching(obstacle6)||
        ball.isTouching(obstacle7)||ball.isTouching(obstacle8)||ball.isTouching(obstacle9)||ball.isTouching(obstacle10)||ball.isTouching(obstacle11)||ball.isTouching(obstacle12)||
        ball.isTouching(obstacle13)||ball.isTouching(obstacle14)||ball.isTouching(obstacle15)||ball.isTouching(obstacle16)||ball.isTouching(obstacle17)||ball.isTouching(obstacle18)){
          score = score-2;
          lives = lives-1;
          ball.x = 140;
          ball.y = 130;
          timer = 20;
        }
        if (timer <= 0){
          score = score-2;
          lives = lives-1;
          ball.x = 140;
          ball.y = 130;
          timer = 20;
        }
      
        if(ball.isTouching(finish)){
            levelGameState = 2;
        }
      
        if(score<=0||lives<=0){
          gameState = 2;
        }
            
      }
        if(gameState === 2){
          blackbg.visible = true;
          gameOver.visible = true;
          playAgain.visible = true;  
          playAgain.x = 675;
          playAgain.y = 650;
        }
         drawSprites();
         if(mousePressedOver(playAgain)){
           reset();
         }
      }
      
        reset(){
        gameState = 1;
        gameOver.visible = false;
        playAgain.visible = false;
        blackbg.visible = false;
        lives = 5;
        score = 5;
        ball.x = 140;
        ball.y = 130;
        coin.x = 900;
        coin.y = 200;
        timer = 20;
        playAgain.x = -1000;
        playAgain.y = -1000;
      } 
    }
