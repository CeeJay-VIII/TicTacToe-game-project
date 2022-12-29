
/**Variables */
var dificulty;
var pWins=0;
var cWins=0;
var gResults;
var slotsNumber = 0;
var player;
var cpu;
$(document).ready(function(){
    $('div#disks').append('<div><label for="options">*Choose disk </label><input type="radio" class="rad" value="X" name="options"><strong>X</strong><input type="radio" class="rad" value="O" name="options"><strong>O</strong></div>')
})
/**Selecting disk and beginning the game */
document.getElementById('disks').addEventListener('change',()=>{
    $('div#disks div').fadeOut();
    player = document.querySelector('input.rad:checked').value;
    dificulty = document.getElementById('dificulty').value;
    document.getElementById('closed').id = 'open';
    /**Whoever is playing with X will go first */
    if(player=='O'){
        player='0️⃣';
        cpu = '❌';
        document.getElementById('open').classList = ('disabled');
        cpuTurn_Easy(player);
        document.getElementById('cpuTurn').innerText = '🧠Playing...';
    }
    else{
        player='❌';
        cpu = '0️⃣';
        document.getElementById('open').classList = ('enabled');
        document.getElementById('playerTurn').innerText = '🧠Playing...';
    }
    document.getElementById('player').innerText = player;
    document.getElementById('cpu').innerText = cpu;
});

/**Retrieving selected slot */
function getId(div){
    document.getElementById(div.id).innerHTML = player;
    div.className = 'disabled';/**Disabling the slot that has X or O */
    document.getElementById('open').classList = ('disabled');
    winner(div,'You');
    /**Dificulty level */
    if(dificulty=='Hard'){
        cpuTurn_Hard(div);
    }
    else if(dificulty=='Normal'){
        cpuTurn_Normal(div);
    }
    else{
        cpuTurn_Easy(div);
    }

    if(gResults==true && slotsNumber <= 9){
        if(slotsNumber!=9){
            document.getElementById('playerTurn').innerText = '✅Winner!';
            document.getElementById('cpuTurn').innerHTML=null;
        }
    }
    else{
        document.getElementById('playerTurn').innerText = null;
    }
};

/**CPU turn to play rondomly */
/**CPU turn to play rondomly */
function cpuTurn_Easy(div){
    if(gResults!=true){
        document.getElementById('cpuTurn').innerText = '🧠Playing...';
        setTimeout(() => {
            let caseNumber;
            while(caseNumber == null){/**If none of the cases below executed, cpu will have to play again */
                let rnd = Math.floor(Math.random()*8) /**Generating rondom number from 0 to 8 */
                switch(rnd){
                    case 0:
                        if(div.id != document.getElementById('r1c1').id && document.getElementById('r1c1').className == 'free'){
                            document.getElementById('r1c1').innerText = cpu;
                            document.getElementById('r1c1').className = 'disabled'; /**Disabling slot */
                            document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                            winner(document.getElementById('r1c1'),'Computer');
                            caseNumber=0;
                            break;
                        }
                    case 1:
                        if(div.id != document.getElementById('r1c2').id && document.getElementById('r1c2').className == 'free'){
                            document.getElementById('r1c2').innerText = cpu;
                            document.getElementById('r1c2').className = 'disabled'; /**Disabling slot */
                            document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                            winner(document.getElementById('r1c2'),'Computer');
                            caseNumber=1;
                            break;
                        }
                    case 2:
                        if(div.id != document.getElementById('r1c3').id && document.getElementById('r1c3').className == 'free'){
                            document.getElementById('r1c3').innerText = cpu;
                            document.getElementById('r1c3').className = 'disabled'; /**Disabling slot */
                            document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                            winner(document.getElementById('r1c3'),'Computer');
                            caseNumber=2;
                            break;
                        }
                    case 3:
                        if(div.id != document.getElementById('r2c1').id && document.getElementById('r2c1').className == 'free'){
                            document.getElementById('r2c1').innerText = cpu;
                            document.getElementById('r2c1').className = 'disabled'; /**Disabling slot */
                            document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                            winner(document.getElementById('r2c1'),'Computer');
                            caseNumber=3;
                            break;
                        }
                    case 4:
                        if(div.id != document.getElementById('r2c2').id && document.getElementById('r2c2').className == 'free'){
                            document.getElementById('r2c2').innerText = cpu;
                            document.getElementById('r2c2').className = 'disabled'; /**Disabling slot */
                            document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                            winner(document.getElementById('r2c2'),'Computer');
                            caseNumber=4;
                            break;
                        }
                    case 5:
                        if(div.id != document.getElementById('r2c3').id && document.getElementById('r2c3').className == 'free'){
                            document.getElementById('r2c3').innerText = cpu;
                            document.getElementById('r2c3').className = 'disabled'; /**Disabling slot */
                            document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                            winner(document.getElementById('r2c3'),'Computer');
                            caseNumber=5;
                            break;
                        }
                    case 6:
                        if(div.id != document.getElementById('r3c1').id && document.getElementById('r3c1').className == 'free'){
                            document.getElementById('r3c1').innerText = cpu;
                            document.getElementById('r3c1').className = 'disabled'; /**Disabling slot */
                            document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                            winner(document.getElementById('r3c1'),'Computer');
                            caseNumber=6;
                            break;
                        }
                    case 7:
                        if(div.id != document.getElementById('r3c2').id && document.getElementById('r3c2').className == 'free'){
                            document.getElementById('r3c2').innerHTML = cpu;
                            document.getElementById('r3c2').className = 'disabled'; /**Disabling slot */
                            document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                            winner(document.getElementById('r3c2'),'Computer');
                            caseNumber=7;
                            break;
                        }
                    case 8:
                        if(div.id != document.getElementById('r3c3').id && document.getElementById('r3c3').className == 'free'){
                            document.getElementById('r3c3').innerText = cpu;
                            document.getElementById('r3c3').className = 'disabled'; /**Disabling slot */
                            document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                            winner(document.getElementById('r3c3'),'Computer');
                            caseNumber=8;
                            break;
                        }
                }
            }
            if(gResults==true){
                if(slotsNumber!=9){
                    document.getElementById('cpuTurn').innerText = '✅Winner!';
                    document.getElementById('playerTurn').innerText = null;
                    console.log('Function Easy(gResluts==true but slots number != 9)')
                }
            }
            else{
                document.getElementById('cpuTurn').innerText = null;
                document.getElementById('playerTurn').innerText = '🧠Playing...';
            }
        }, 2000);
    }
}

/**CPU dificulty - NORMAL */
/**CPU dificulty - NORMAL */
function cpuTurn_Normal(div){
    if(gResults!=true){
        document.getElementById('cpuTurn').innerText = '🧠Playing...';
        setTimeout(() => {
            if(div.id=='r1c1'){ /**r1c1 slot clicked */
                if(div.innerText==document.getElementById('r1c2').innerText && document.getElementById('r1c3').className=='free'){
                    document.getElementById('r1c3').innerText = cpu;
                    document.getElementById('r1c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                    
                }
                else if(div.innerText==document.getElementById('r1c3').innerText && document.getElementById('r1c2').className=='free'){
                    document.getElementById('r1c2').innerText = cpu;
                    document.getElementById('r1c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c2').innerText && document.getElementById('r3c3').className=='free'){
                    document.getElementById('r3c3').innerText = cpu;
                    document.getElementById('r3c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c3').innerText && document.getElementById('r2c2').className=='free'){
                    document.getElementById('r2c2').innerText = cpu;
                    document.getElementById('r2c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c1').innerText && document.getElementById('r3c1').className=='free'){
                    document.getElementById('r3c1').innerText = cpu;
                    document.getElementById('r3c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c1').innerText && document.getElementById('r2c1').className=='free'){
                    document.getElementById('r2c1').innerText = cpu;
                    document.getElementById('r2c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else{
                    cpuTurn_Easy(div);
                    console.log('Normal() function calling Rondom()..')
                }
            }
            else if(div.id=='r1c2'){ /**r1c2 slot clicked */
                if(div.innerText==document.getElementById('r1c1').innerText && document.getElementById('r1c3').className=='free'){
                    document.getElementById('r1c3').innerText = cpu;
                    document.getElementById('r1c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r1c3').innerText && document.getElementById('r1c1').className=='free'){
                    document.getElementById('r1c1').innerText = cpu;
                    document.getElementById('r1c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c2').innerText && document.getElementById('r3c2').className=='free'){
                    document.getElementById('r3c2').innerText = cpu;
                    document.getElementById('r3c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c2').innerText && document.getElementById('r2c2').className=='free'){
                    document.getElementById('r2c2').innerText = cpu;
                    document.getElementById('r2c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else{
                    cpuTurn_Easy(div);
                }
            }
            else if(div.id=='r1c3'){ /**r1c3 slot clicked */
                if(div.innerText==document.getElementById('r1c1').innerText && document.getElementById('r1c2').className=='free'){
                    document.getElementById('r1c2').innerText = cpu;
                    document.getElementById('r1c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r1c2').innerText && document.getElementById('r1c1').className=='free'){
                    document.getElementById('r1c1').innerText = cpu;
                    document.getElementById('r1c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c2').innerText && document.getElementById('r3c1').className=='free'){
                    document.getElementById('r3c1').innerText = cpu;
                    document.getElementById('r3c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c1').innerText && document.getElementById('r2c2').className=='free'){
                    document.getElementById('r2c2').innerText = cpu;
                    document.getElementById('r2c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c3').innerText && document.getElementById('r3c3').className=='free'){
                    document.getElementById('r3c3').innerText = cpu;
                    document.getElementById('r3c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c3').innerText && document.getElementById('r2c3').className=='free'){
                    document.getElementById('r2c3').innerText = cpu;
                    document.getElementById('r2c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else{
                    cpuTurn_Easy(div);
                }
            }
            else if(div.id=='r2c1'){ /**r2c1 slot clicked */
                if(div.innerText==document.getElementById('r1c1').innerText && document.getElementById('r3c1').className=='free'){
                    document.getElementById('r3c1').innerText = cpu;
                    document.getElementById('r3c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c1').innerText && document.getElementById('r1c1').className=='free'){
                    document.getElementById('r1c1').innerText = cpu;
                    document.getElementById('r1c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c2').innerText && document.getElementById('r2c3').className=='free'){
                    document.getElementById('r2c3').innerText = cpu;
                    document.getElementById('r2c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c3').innerText && document.getElementById('r2c2').className=='free'){
                    document.getElementById('r2c2').innerText = cpu;
                    document.getElementById('r2c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else{
                    cpuTurn_Easy(div);
                }
            }
            else if(div.id=='r2c2'){ /**r2c2 slot clicked */
                if(div.innerText==document.getElementById('r1c1').innerText && document.getElementById('r3c3').className=='free'){
                    document.getElementById('r3c3').innerText = cpu;
                    document.getElementById('r3c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c3').innerText && document.getElementById('r1c1').className=='free'){
                    document.getElementById('r1c1').innerText = cpu;
                    document.getElementById('r1c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r1c2').innerText && document.getElementById('r3c2').className=='free'){
                    document.getElementById('r3c2').innerText = cpu;
                    document.getElementById('r3c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c2').innerText && document.getElementById('r1c2').className=='free'){
                    document.getElementById('r1c2').innerText = cpu;
                    document.getElementById('r1c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r1c3').innerText && document.getElementById('r3c1').className=='free'){
                    document.getElementById('r3c1').innerText = cpu;
                    document.getElementById('r3c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c1').innerText && document.getElementById('r1c3').className=='free'){
                    document.getElementById('r1c3').innerText = cpu;
                    document.getElementById('r1c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c1').innerText && document.getElementById('r2c3').className=='free'){
                    document.getElementById('r2c3').innerText = cpu;
                    document.getElementById('r2c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c3').innerText && document.getElementById('r2c1').className=='free'){
                    document.getElementById('r2c1').innerText = cpu;
                    document.getElementById('r2c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else{
                    cpuTurn_Easy(div);
                }
            }
            else if(div.id=='r2c3'){ /**r2c3 slot clicked */
                if(div.innerText==document.getElementById('r1c3').innerText && document.getElementById('r3c3').className=='free'){
                    document.getElementById('r3c3').innerText = cpu;
                    document.getElementById('r3c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c3').innerText && document.getElementById('r1c3').className=='free'){
                    document.getElementById('r1c3').innerText = cpu;
                    document.getElementById('r1c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c1').innerText && document.getElementById('r2c2').className=='free'){
                    document.getElementById('r2c2').innerText = cpu;
                    document.getElementById('r2c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c2').innerText && document.getElementById('r2c1').className=='free'){
                    document.getElementById('r2c1').innerText = cpu;
                    document.getElementById('r2c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else{
                    cpuTurn_Easy(div);
                }
            }
            else if(div.id=='r3c1'){ /**r3c1 slot clicked */
                if(div.innerText==document.getElementById('r1c1').innerText && document.getElementById('r2c1').className=='free'){
                    document.getElementById('r2c1').innerText = cpu;
                    document.getElementById('r2c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c1').innerText && document.getElementById('r1c1').className=='free'){
                    document.getElementById('r1c1').innerText = cpu;
                    document.getElementById('r1c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r1c3').innerText && document.getElementById('r2c2').className=='free'){
                    document.getElementById('r2c2').innerText = cpu;
                    document.getElementById('r2c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c2').innerText && document.getElementById('r1c3').className=='free'){
                    document.getElementById('r1c3').innerText = cpu;
                    document.getElementById('r1c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c2').innerText && document.getElementById('r3c3').className=='free'){
                    document.getElementById('r3c3').innerText = cpu;
                    document.getElementById('r3c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c3').innerText && document.getElementById('r3c2').className=='free'){
                    document.getElementById('r3c2').innerText = cpu;
                    document.getElementById('r3c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else{
                    cpuTurn_Easy(div);
                }
            }
            else if(div.id=='r3c2'){ /**r3c2 slot clicked */
                if(div.innerText==document.getElementById('r1c2').innerText && document.getElementById('r2c2').className=='free'){
                    document.getElementById('r2c2').innerText = cpu;
                    document.getElementById('r2c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c2').innerText && document.getElementById('r1c2').className=='free'){
                    document.getElementById('r1c2').innerText = cpu;
                    document.getElementById('r1c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c1').innerText && document.getElementById('r3c3').className=='free'){
                    document.getElementById('r3c3').innerText = cpu;
                    document.getElementById('r3c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c3').innerText && document.getElementById('r3c1').className=='free'){
                    document.getElementById('r3c1').innerText = cpu;
                    document.getElementById('r3c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else{
                    cpuTurn_Easy(div);
                }
            }
            else if(div.id=='r3c3'){ /**r3c3 slot clicked */
                if(div.innerText==document.getElementById('r1c1').innerText && document.getElementById('r2c2').className=='free'){
                    document.getElementById('r2c2').innerText = cpu;
                    document.getElementById('r2c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c2').innerText && document.getElementById('r1c1').className=='free'){
                    document.getElementById('r1c1').innerText = cpu;
                    document.getElementById('r1c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r1c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r1c3').innerText && document.getElementById('r2c3').className=='free'){
                    document.getElementById('r2c3').innerText = cpu;
                    document.getElementById('r2c3').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r2c3'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r2c3').innerText && document.getElementById('r1c3').className=='free'){
                    document.getElementById('r3c1').innerText = cpu;
                    document.getElementById('r3c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c1').innerText && document.getElementById('r3c2').className=='free'){
                    document.getElementById('r3c2').innerText = cpu;
                    document.getElementById('r3c2').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c2'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else if(div.innerText==document.getElementById('r3c2').innerText && document.getElementById('r3c1').className=='free'){
                    document.getElementById('r3c1').innerText = cpu;
                    document.getElementById('r3c1').className = 'disabled'; /**Disabling slot */
                    document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                    winner(document.getElementById('r3c1'),'Computer');
        
                    if(gResults!=true){ /**only if game is not over, player will be playing... */
                        document.getElementById('cpuTurn').innerText = null;
                        document.getElementById('playerTurn').innerText = '🧠Playing...';
                    }
                }
                else{
                    cpuTurn_Easy(div);
                }
            }
            else{ /**else if none of the buttons clicked */
                cpuTurn_Easy(div);
            }
        }, 2000);
    }
}
/**CPU dificulty - HARD */
/**CPU dificulty - HARD */
function cpuTurn_Hard(div){
    if(gResults!=true){
        document.getElementById('cpuTurn').innerText = '🧠Playing...';
        setTimeout(() => {
            //r1c1///////////////
            if(document.getElementById('r1c3').innerHTML==cpu && document.getElementById('r1c2').innerHTML==cpu && document.getElementById('r1c1').className=='free'){
                document.getElementById('r1c1').innerText = cpu;
                document.getElementById('r1c1').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r1c1'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r1c2//////////////////
            else if(document.getElementById('r1c1').innerHTML==cpu && document.getElementById('r1c3').innerHTML==cpu && document.getElementById('r1c2').className=='free'){
                document.getElementById('r1c2').innerText = cpu;
                document.getElementById('r1c2').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r1c2'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r1c3//////////////////
            else if(document.getElementById('r1c1').innerHTML==cpu && document.getElementById('r1c2').innerHTML==cpu && document.getElementById('r1c3').className=='free'){
                document.getElementById('r1c3').innerText = cpu;
                document.getElementById('r1c3').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r1c3'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r1c1//////////////////
            else if(document.getElementById('r2c2').innerHTML==cpu && document.getElementById('r3c3').innerHTML==cpu && document.getElementById('r1c1').ClassName=='free'){
                document.getElementById('r1c1').innerText = cpu;
                document.getElementById('r1c1').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r1c1'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r2c2//////////////////
            else if(document.getElementById('r1c1').innerHTML==cpu && document.getElementById('r3c3').innerHTML==cpu && document.getElementById('r2c2').className=='free'){
                document.getElementById('r2c2').innerText = cpu;
                document.getElementById('r2c2').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r2c2'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r3c3//////////////////
            else if(document.getElementById('r1c1').innerHTML==cpu && document.getElementById('r2c2').innerHTML==cpu && document.getElementById('r3c3').className=='free'){
                document.getElementById('r3c3').innerText = cpu;
                document.getElementById('r3c3').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r3c3'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r1c1//////////////////
            else if(document.getElementById('r2c1').innerHTML==cpu && document.getElementById('r3c1').innerHTML==cpu && document.getElementById('r1c1').className=='free'){
                document.getElementById('r1c1').innerText = cpu;
                document.getElementById('r1c1').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r1c1'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r2c1//////////////////
            else if(document.getElementById('r1c1').innerHTML==cpu && document.getElementById('r3c1').innerHTML==cpu && document.getElementById('r2c1').className=='free'){
                document.getElementById('r2c1').innerText = cpu;
                document.getElementById('r2c1').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r2c1'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r3c1//////////////////
            else if(document.getElementById('r1c1').innerHTML==cpu && document.getElementById('r2c1').innerHTML==cpu && document.getElementById('r3c1').className=='free'){
                document.getElementById('r3c1').innerText = cpu;
                document.getElementById('r3c1').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r3c1'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r1c2/////////////////
            else if(document.getElementById('r2c2').innerHTML==cpu && document.getElementById('r3c2').innerHTML==cpu && document.getElementById('r1c2').className=='free'){
                document.getElementById('r1c2').innerText = cpu;
                document.getElementById('r1c2').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r1c2'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r2c2/////////////////
            else if(document.getElementById('r1c2').innerHTML==cpu && document.getElementById('r3c2').innerHTML==cpu && document.getElementById('r2c2').className=='free'){
                document.getElementById('r2c2').innerText = cpu;
                document.getElementById('r2c2').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r2c2'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r3c2/////////////////
            else if(document.getElementById('r1c2').innerHTML==cpu && document.getElementById('r2c2').innerHTML==cpu && document.getElementById('r3c2').className=='free'){
                document.getElementById('r3c2').innerText = cpu;
                document.getElementById('r3c2').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r3c2'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r1c3/////////////////
            else if(document.getElementById('r2c2').innerHTML==cpu && document.getElementById('r3c1').innerHTML==cpu && document.getElementById('r1c3').className=='free'){
                document.getElementById('r1c3').innerText = cpu;
                document.getElementById('r1c3').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r1c3'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r2c2//////////////////
            else if(document.getElementById('r1c3').innerHTML==cpu && document.getElementById('r3c1').innerHTML==cpu && document.getElementById('r2c2').innerHTML=='free'){
                document.getElementById('r2c2').innerText = cpu;
                document.getElementById('r2c2').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r2c2'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r3c1//////////////////
            else if(document.getElementById('r1c3').innerHTML==cpu && document.getElementById('r2c2').innerHTML==cpu && document.getElementById('r3c1').className=='free'){
                document.getElementById('r3c1').innerText = cpu;
                document.getElementById('r3c1').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r3c1'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r1c3////////////////
            else if(document.getElementById('r2c3').innerHTML==cpu && document.getElementById('r3c3').innerHTML==cpu && document.getElementById('r1c3').className=='free'){
                document.getElementById('r1c1').innerText = cpu;
                document.getElementById('r1c1').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r1c1'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r2c3////////////////
            else if(document.getElementById('r1c3').innerHTML==cpu && document.getElementById('r3c3').innerHTML==cpu && document.getElementById('r2c3').className=='free'){
                document.getElementById('r2c3').innerText = cpu;
                document.getElementById('r2c3').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r2c3'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r3c3///////////////
            else if(document.getElementById('r1c3').innerHTML==cpu && document.getElementById('r2c3').innerHTML==cpu && document.getElementById('r3c3').className=='free'){
                document.getElementById('r3c3').innerText = cpu;
                document.getElementById('r3c3').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r3c3'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r2c1///////////////
            else if(document.getElementById('r2c2').innerHTML==cpu && document.getElementById('r2c3').innerHTML==cpu && document.getElementById('r2c1').className=='free'){
                document.getElementById('r2c1').innerText = cpu;
                document.getElementById('r2c1').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r2c1'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r2c2///////////////
            else if(document.getElementById('r2c1').innerHTML==cpu && document.getElementById('r2c3').innerHTML==cpu && document.getElementById('r2c2').className=='free'){
                document.getElementById('r2c2').innerText = cpu;
                document.getElementById('r2c2').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r2c2'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r2c3///////////////
            else if(document.getElementById('r2c1').innerHTML==cpu && document.getElementById('r2c2').innerHTML==cpu && document.getElementById('r2c3').className=='free'){
                document.getElementById('r2c3').innerText = cpu;
                document.getElementById('r2c3').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r2c3'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r3c1///////////////
            else if(document.getElementById('r3c2').innerHTML==cpu && document.getElementById('r3c3').innerHTML==cpu && documen.getElementById('r3c1').className=='free'){
                document.getElementById('r3c1').innerText = cpu;
                document.getElementById('r3c1').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r3c1'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r3c2///////////////
            else if(document.getElementById('r3c1').innerHTML==cpu && document.getElementById('r3c3').innerHTML==cpu && document.getElementById('r3c2').className=='free'){
                document.getElementById('r3c2').innerText = cpu;
                document.getElementById('r3c2').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r3c2'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//r3c3////////////////
            else if(document.getElementById('r3c1').innerHTML==cpu && document.getElementById('r3c2').innerHTML==cpu && document.getElementById('r3c3').className=='free'){
                document.getElementById('r3c3').innerText = cpu;
                document.getElementById('r3c3').className = 'disabled'; /**Disabling slot */
                document.getElementById('open').classList = ('enabled');/**Enabling player to play */
                winner(document.getElementById('r3c3'),'Computer');
    
                if(gResults!=true){ /**only if game is not over, player will be playing... */
                    document.getElementById('cpuTurn').innerText = null;
                    document.getElementById('playerTurn').innerText = '🧠Playing...';
                }
            }//execute function Normal()
            else{
                cpuTurn_Normal(div);
            }
        }, 2000);
    }
}

/**After every disk placed check whether there are any three slots placed inline */
/**After every disk placed check whether there are any three slots placed inline */
function winner(div,winner){
    slotsNumber++; /**Counting and incrementing used slots out of 9 */
    tie=true;
    if(div.id == 'r1c1'){
        if((document.getElementById('r1c2').innerText == div.innerText && document.getElementById('r1c3').innerText == div.innerText) ||
        (document.getElementById('r2c2').innerText == div.innerText && document.getElementById('r3c3').innerText == div.innerText) ||
        (document.getElementById('r2c1').innerText == div.innerText && document.getElementById('r3c1').innerText == div.innerText)){
            tie=false;
            gameOver(true,winner);
        }
    }
    else if(div.id == 'r1c2'){
        if((document.getElementById('r1c1').innerText == div.innerText && document.getElementById('r1c3').innerText == div.innerText) ||
        (document.getElementById('r2c2').innerText == div.innerText && document.getElementById('r3c2').innerText == div.innerText)){
            tie=false;
            gameOver(true,winner);
        }
    }
    else if(div.id == 'r1c3'){
        if((document.getElementById('r1c1').innerText == div.innerText && document.getElementById('r1c2').innerText == div.innerText) ||
        (document.getElementById('r2c2').innerText == div.innerText && document.getElementById('r3c1').innerText == div.innerText) ||
        (document.getElementById('r2c3').innerText == div.innerText && document.getElementById('r3c3').innerText == div.innerText)){
            tie=false;
            gameOver(true,winner);
        }
    }
    else if(div.id == 'r2c1'){
        if((document.getElementById('r1c1').innerText == div.innerText && document.getElementById('r3c1').innerText == div.innerText) ||
        (document.getElementById('r2c2').innerText == div.innerText && document.getElementById('r2c3').innerText == div.innerText)){
            tie=false;
            gameOver(true,winner);
        }
    }
    else if(div.id == 'r2c2'){
        if((document.getElementById('r1c1').innerText == div.innerText && document.getElementById('r3c3').innerText == div.innerText) ||
        (document.getElementById('r1c2').innerText == div.innerText && document.getElementById('r3c2').innerText == div.innerText) ||
        (document.getElementById('r1c3').innerText == div.innerText && document.getElementById('r3c1').innerText == div.innerText) ||
        (document.getElementById('r2c1').innerText == div.innerText && document.getElementById('r2c3').innerText == div.innerText)){
            tie=false;
            gameOver(true,winner);
        }
    }
    else if(div.id == 'r2c3'){
        if((document.getElementById('r1c3').innerText == div.innerText && document.getElementById('r3c3').innerText == div.innerText) ||
        (document.getElementById('r2c1').innerText == div.innerText && document.getElementById('r2c2').innerText == div.innerText)){
            tie=false;
            gameOver(true,winner);
        }
    }
    else if(div.id == 'r3c1'){
        if((document.getElementById('r1c1').innerText == div.innerText && document.getElementById('r2c1').innerText == div.innerText) ||
        (document.getElementById('r2c2').innerText == div.innerText && document.getElementById('r1c3').innerText == div.innerText) ||
        (document.getElementById('r3c2').innerText == div.innerText && document.getElementById('r3c3').innerText == div.innerText)){
            tie=false;
            gameOver(true,winner);
        }
    }
    else if(div.id == 'r3c2'){
        if((document.getElementById('r1c2').innerText == div.innerText && document.getElementById('r2c2').innerText == div.innerText) ||
        (document.getElementById('r3c1').innerText == div.innerText && document.getElementById('r3c3').innerText == div.innerText)){
            tie=false;
            gameOver(true,winner);
        }
    }
    else if(div.id == 'r3c3'){
        if((document.getElementById('r1c1').innerText == div.innerText && document.getElementById('r2c2').innerText == div.innerText) ||
        (document.getElementById('r1c3').innerText == div.innerText && document.getElementById('r2c3').innerText == div.innerText) ||
        (document.getElementById('r3c1').innerText == div.innerText && document.getElementById('r3c2').innerText == div.innerText)){
            tie=false;
            gameOver(true,winner);
        }
    }
    else{
        gameOver(false,winner);
    }

    if(slotsNumber==9 && tie==true){ /**Check if number of slots are available to continue playing */
        document.getElementById('playerTurn').innerText = '💫Draw';
        document.getElementById('cpuTurn').innerText = '💫Draw';
        winner = 'Draw';
        gameOver(true,winner);
    }
}

/**gameover variables */
var totalGames=0;
var x5wins=0;
var x5lossOrDraw=0;
var x5EasyWins=0;
var x5NormalWins=0;
var x5HardWins=0;
/**Game over function */
/**Game over function */
function gameOver(gameResults,winner){
    if(gameResults == true){
        totalGames++;
        if(winner!='Draw'){
            if(winner=='You'){
                pWins++;
                x5wins++;
                x5lossOrDraw=0;
                if(dificulty=='Easy'){
                    x5EasyWins++;
                    x5NormalWins=0;
                    x5HardWins=0;
                }
                else if(dificulty=='Normal'){
                    x5EasyWins=0;
                    x5NormalWins++;
                    x5HardWins=0;
                }
                else{
                    x5EasyWins=0;
                    x5NormalWins=0;
                    x5HardWins++;
                }
            }
            else{
                document.getElementById('cpuTurn').innerText = '✅Winner';
                document.getElementById('playerTurn').innerHTML=null;
                document.getElementById('open').classList = ('disabled');/**Disabling player to play */
                cWins++;
                x5wins=0;
                x5lossOrDraw++;
            }
        }
        else{
            x5wins=0;
            x5lossOrDraw++;
            x5EasyWins=0;
            x5NormalWins=0;
            x5HardWins=0;
        }
        reset();
        document.getElementById('pWins').innerHTML=pWins;
        document.getElementById('cWins').innerHTML=cWins;

        /**Tips and credits */
        if(x5wins==5){
            if(x5EasyWins==5){
                setTimeout(() => {
                    alert("Too easy?:)\nPerhaps try changing dificulty.");
                }, 5300);
                x5wins=0;
                x5EasyWins=0;
                x5NormalWins=0;
                x5HardWins=0;
            }
            else if(x5NormalWins==5){
                setTimeout(() => {
                    alert("🥇Congrats! x5 wins in Normal mode:)\nYou're on fire!")
                }, 5300);
                x5wins=0;
                x5EasyWins=0;
                x5NormalWins=0;
                x5HardWins=0;
            }
            else if(x5HardWins==5){
                setTimeout(() => {
                    alert("🥇🔥😲Wow! x5 wins in Hard mode:)\n🕹You know it better than me😉!")
                }, 5300);
                x5wins=0;
                x5EasyWins=0;
                x5NormalWins=0;
                x5HardWins=0;
            }
        }
        else if(x5lossOrDraw==10){
            setTimeout(() => {
                alert("(x_x)💫Can't win?\nPerhaps try changing dificulty.")
            }, 5300);
            x5lossOrDraw=0;
        }
    }
    gResults = gameResults;
}

/**Game reset function */
/**Game reset function */
function reset(){
    $('div#disks div').remove();
    setTimeout(() => {
        /**clearing variables */
        gResults=false;
        slotsNumber=0;
        cpuMoves=0;
        player=null;
        cpu=null;
        document.getElementById('open').id = 'closed';

        /**Clearing game labels */
        document.getElementById('playerTurn').innerText=null;
        document.getElementById('cpuTurn').innerText=null;

        /**Enabling all the slots */
        document.getElementById('r1c1').className='free';
        document.getElementById('r1c2').className='free';
        document.getElementById('r1c3').className='free';
        document.getElementById('r2c1').className='free';
        document.getElementById('r2c2').className='free';
        document.getElementById('r2c3').className='free';
        document.getElementById('r3c1').className='free';
        document.getElementById('r3c2').className='free';
        document.getElementById('r3c3').className='free';

        /**clearing slots content */
        document.getElementById('r1c1').innerHTML=null;
        document.getElementById('r1c2').innerHTML=null;
        document.getElementById('r1c3').innerHTML=null;
        document.getElementById('r2c1').innerHTML=null;
        document.getElementById('r2c2').innerHTML=null;
        document.getElementById('r2c3').innerHTML=null;
        document.getElementById('r3c1').innerHTML=null;
        document.getElementById('r3c2').innerHTML=null;
        document.getElementById('r3c3').innerHTML=null;

        /**Dynamically crreate dificulty options */
        $('div#disks').append('<div><label for="options">*Choose disk </label><input type="radio" class="rad" value="X" name="options"><strong>X</strong><input type="radio" class="rad" value="O" name="options"><strong>O</strong></div>');

    }, 5000);


    /**Progress bar */
    document.getElementById('bgprogress').hidden=false;
    document.getElementById('bgprogress').style.width='100%';
    setTimeout(() => {
        document.getElementById('bgprogress').hidden=true;
    }, 5000);
}