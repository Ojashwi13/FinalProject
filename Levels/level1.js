class Level1{
    constructor(){

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
    display(){
        background("blue");
        fill("white"); 
        textSize(24); 
        text("score:" + score,1200,100);
        
        fill("white"); 
        textSize(24); 
        text("lives:" + lives,1200,130);
      
        fill("white"); 
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
           this.reset();
         }
        }
    }
