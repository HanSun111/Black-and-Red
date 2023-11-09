let initalize = () =>{
    playerBlack = document.getElementById("PBlack") ;
    playerRed = document.getElementById("PRed");
    comRed = document.getElementById("CRed");
    comBlack = document.getElementById("CBlack");
    
    
    blackDie = document.getElementById("BDie");
    redDie = document.getElementById("RDie");
    
    pRed = 12;
    cRed = 12;
    pBlack = 12
    cBlack = 12;
    
    
    black = 0;
    red = 0;
    
    rolledDice = false;
    // player turn odd, computer turn odd.
    turnCounter = 1;
    display();
    }
    
    
    function rollDice(){
        if(rolledDice == false){
        black = Math.trunc(Math.random() * 6 + 1);
        red = Math.trunc(Math.random() * 6 + 1);
        }
        rolledDice = true;
        display();
    }
    
    
    function clearDie(){
        black = 0;
        red = 0;
    }
    
    
    function restart(){
    pRed = 12;
    cRed = 12;
    pBlack = 12
    cBlack = 12;
    
    
    black = 0;
    red = 0;
    
    
    rolledDice = false;
    display();
    }
    
    
    function addOrRemove(num){
        if(rolledDice == true){
            turnCounter ++;
        if(num == 1){
            //add black to you, remove red from computer
            pBlack += black;
            cRed -= red;
        }
        else if(num == 2){
            //add red to you, remove black from computer
            pRed += red;
            cBlack -= black;
        }
        else if(num == 3){
            //remove black from you, add red to computer
            pBlack -= black;
            cRed += red;
        }
        else{
            //remove red from you, add black to computer
            pRed -= red;
            cBlack += black;
        }
    }
    AITurn = true;
    rolledDice = false;
    clearDie();
    display();
    }
    
    
    function computer(){
        if(turnCounter % 2 == 0){
        rollDice();
        addOrRemove(Math.trunc(Math.random() * 4 + 1));
        }
    }
    
    
    function display(){
        playerBlack.innerHTML = pBlack;
        playerRed.innerHTML = pRed;
        comBlack.innerHTML = cBlack;
        comRed.innerHTML = cRed;
    
    
        blackDie.innerHTML = black;
        redDie.innerHTML = red;
    }
    