let initalize = () =>{
    playerBlack = document.getElementById("PBlack") ;
    playerRed = document.getElementById("PRed");
    comRed = document.getElementById("CRed");
    comBlack = document.getElementById("CBlack");
    
    
    blackDie = document.getElementById("BDie");
    redDie = document.getElementById("RDie");
    gameLog = document.getElementById("Log");
    
    pRed = 12;
    cRed = 12;
    pBlack = 12
    cBlack = 12;
    
    
    black = 0;
    red = 0;
    log = "";
    rolledDice = false;
    // player turn odd, computer turn odd.
    turnCounter = 1;
    who = "player";
    display();
    }
    
    
    function rollDice(){
        if(rolledDice == false){
        black = Math.trunc(Math.random() * 6 + 1);
        red = Math.trunc(Math.random() * 6 + 1);
        }
        log = who + " rolled " + black + " black and " + red + " red <br>" + log;
        rolledDice = true;
        display();
    }
    
    
    function restart(){
    pRed = 12;
    cRed = 12;
    pBlack = 12
    cBlack = 12;
    
    
    black = 0;
    red = 0;
    turnCounter = 1;
    log = "";
    who = "player";
    
    rolledDice = false;
    display();
    }
    
    
    function addOrRemove(num){
        if(rolledDice == true){
        if(num == 1 && red <= cRed){
            //add black to you, remove red from computer
            pBlack += black;
            cRed -= red;
            log = who + " added " + black + " black to themselves and subtracted " + red + " red from the opposed  <br>" + log;
        }
        else if(num == 2 && black <= cBlack){
            //add red to you, remove black from computer
            pRed += red;
            cBlack -= black;
            log = who + " added " + red + " red to themselves and subtracted " + black + " black from the opposed <br>" + log;
        }
        else if(num == 3 && black <= pBlack){
            //remove black from you, add red to computer
            pBlack -= black;
            cRed += red;
            log = who + " removed " + black + "  from themselves and added " + red + " red to the opposed <br>" + log;
        }
        else if(num == 4 && red <= pRed){
            //remove red from you, add black to computer
            pRed -= red;
            cBlack += black;
            log = who + " removed " + red + " red from themselves and added " + black + " black to the opposed <br>" + log;
        } else{
            if(pRed > cRed){
                who = "you";
            }else{
                who = "computer";
            }
            log = who + " have won the game. press restart to play again. <br>" + log;
        }
        turnCounter ++;
    }
    if(turnCounter % 2 == 1){
        who = "player";
    } else{
        who = "computer"
    }
    rolledDice = false;
    display();
    }
    
    function computer(){
        if(turnCounter % 2 == 0){
        rollDice();
        addOrRemove(Math.trunc(Math.random() * 4 + 1));
        }
        display();
    }
    
    //function winning(){}
    
    function display(){
        playerBlack.innerHTML = pBlack;
        playerRed.innerHTML = pRed;
        comBlack.innerHTML = cBlack;
        comRed.innerHTML = cRed;
    
    
        blackDie.innerHTML = black;
        redDie.innerHTML = red;
        gameLog.innerHTML = log;
    }
    