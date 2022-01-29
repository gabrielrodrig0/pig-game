alert ('By: gabrielrodrig0, enjoy!');

/*Tirando o overlay da tela*/

let overlay = document.querySelector('.overlay');
let anuncio =  document.querySelector('.anuncio');

overlay.addEventListener('click', ()=>{
    overlay.classList.add('hidden');
    anuncio.classList.add('hidden');
});

/*Pontuação*/

let points1 = 0;
let points2 = 0;

/*Dices*/
let dices = document.querySelectorAll('.dice');

let dice1 = document.querySelector(".dice1");
let dice2 = document.querySelector(".dice2");
let dice3 = document.querySelector(".dice3");
let dice4 = document.querySelector(".dice4");
let dice5 = document.querySelector(".dice5");
let dice6 = document.querySelector(".dice6");

/*Botão roll*/

let roll = document.getElementById("roll");

/*Seleção de players*/

let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let current1 = document.querySelector('.current11');
let current2 = document.querySelector('.current21');
let player1Wins = document.querySelector('.name1');
let player2Wins = document.querySelector('.name2');



/*Funções de ativação de classe unable*/

function remove1 () {
    player1.classList.remove('unable');
}

function remove2 () {
    player2.classList.remove('unable');
}
function add1 () {
    player1.classList.add('unable');
}
function add2 () {
    player2.classList.add('unable');
}

function change1(){
    add1();
    remove2();
}

function change2 (){
    add2();
    remove1();
}

/*Ativação do botão roll*/

roll.addEventListener('click', ()=>{

    let random = Math.floor(Math.random()*6+1);

    //Player 1

    if (player1.classList.contains('unable')===false){

        if (random===1){
            dices.forEach((item)=>{
                item.classList.add('hidden');
            })

            dice1.classList.remove('hidden');

            points1=0;

            current1.innerHTML = ""+0;
            console.log("Pontuação 1: "+ points1);
            change1();
                
        }

        else if (random===2){
            dices.forEach((item)=>{
                item.classList.add('hidden');
            })
            dice2.classList.remove('hidden');
            points1 += 2;

            current1.innerHTML = ""+points1;
            console.log("Pontuação 1: "+ points1);

            if (points1>=100){
                player1Wins.innerHTML = "WINS!"
                alert ("Player 1 Wins!");
                console.log ("Player 1 Wins!")
                
            }

        }

        else if (random===3){
            dices.forEach((item)=>{
                item.classList.add('hidden');
            })
            dice3.classList.remove('hidden');
            points1 += 3;

            current1.innerHTML = ""+points1;
            console.log("Pontuação 1: "+ points1);

            if (points1>=100){
                
                player1Wins.innerHTML = "WINS!"
                alert ("Player 1 Wins!");
                console.log ("Player 1 Wins!")
                
            }
        }

        else if (random===4){
            dices.forEach((item)=>{
                item.classList.add('hidden');
            })
            dice4.classList.remove('hidden');
            points1 += 4;

            current1.innerHTML = ""+points1;
            console.log("Pontuação 1: "+ points1);

            if (points1>=100){

                player1Wins.innerHTML = "WINS!"
                alert ("Player 1 Wins!");
                console.log ("Player 1 Wins!")
                
            }
        }

        else if (random===5){
            dices.forEach((item)=>{
                item.classList.add('hidden');
            })
            dice5.classList.remove('hidden');
            points1 += 5;

            current1.innerHTML = ""+points1;
            console.log("Pontuação 1: "+ points1);

            if (points1>=100){

                player1Wins.innerHTML = "WINS!"
                alert ("Player 1 Wins!");
                console.log ("Player 1 Wins!")
                
            }
        }
        
        else if (random===6){
            dices.forEach((item)=>{
                item.classList.add('hidden');
            })
            dice6.classList.remove('hidden');
            points1 +=6;

            current1.innerHTML = ""+points1;
            console.log("Pontuação 1: "+ points1);

            if (points1>=100){

                player1Wins.innerHTML = "WINS!"
                alert ("Player 1 Wins!");
                console.log ("Player 1 Wins!")
                
            }
        }
    
    }

    //Player 2

      else if (player2.classList.contains('unable')===false){

        if (random===1){
            dices.forEach((item)=>{
                item.classList.add('hidden');
            })

            dice1.classList.remove('hidden');
            points2 = 0;
            
            current2.innerHTML = ""+0;
            console.log("Pontuação 2: "+ points2);

            if (player2.classList.contains('unable')===false){
            player2.classList.add("unable");
            player1.classList.remove("unable");
            }
            
        }
        
        else if (random===2){
            dices.forEach((item)=>{
                item.classList.add('hidden');
            })

            dice2.classList.remove('hidden');
            points2 += 2;
            current2.innerHTML = ""+points2;
            console.log("Pontuação 2: "+ points2);

            if (points2>=100){

                player2Wins.innerHTML = "WINS!"
                alert ("Player 2 Wins!");
                console.log ("Player 2 Wins!")
                
            }

        }
        else if (random===3){
            dices.forEach((item)=>{
                item.classList.add('hidden');
            })
            
            dice3.classList.remove('hidden');
            points2 += 3;
            current2.innerHTML = ""+points2;
            console.log("Pontuação 2: "+ points2);

            if (points2>=100){
                
                player2Wins.innerHTML = "WINS!"
                alert ("Player 2 Wins!");
                console.log ("Player 2 Wins");

            }
        }
        else if (random===4){
            dices.forEach((item)=>{
                item.classList.add('hidden');
            })

            dice4.classList.remove('hidden');
            points2 += 4;
            current2.innerHTML = ""+points2;
            console.log("Pontuação 2: "+ points2);

            if (points2>=100){

                player2Wins.innerHTML = "WINS!"
                alert ("Player 2 Wins!");
                console.log ("Player 2 Wins")
        
                
            }
        }
        else if (random===5){
            dices.forEach((item)=>{
                item.classList.add('hidden');
            })

            dice5.classList.remove('hidden');
            points2 += 5;
            current2.innerHTML = ""+points2;
            console.log("Pontuação 2: "+ points2);

            if (points2>=100){
                
                player2Wins.innerHTML = "WINS!"
                alert ("Player 2 Wins!");
                console.log ("Player 2 Wins")
                
            }
        }
    
        else if (random===6){
            dices.forEach((item)=>{
                item.classList.add('hidden');
            })

            dice6.classList.remove('hidden');
            points2 +=6;
            current2.innerHTML = ""+points2;
            console.log("Pontuação 2: "+ points2);

            if (points2>=100){ 
                
                player2Wins.innerHTML = "WINS!"
                alert ("Player 2 Wins!");
                console.log ("Player 2 Wins")
               
            }
        }      

    }}
);

/*Ativação do botão hold*/

let hold = document.getElementById('hold');

hold.addEventListener('click', ()=>{

    if (player1.classList.contains('unable')===false){
        if (points1>0){
            change1();
        }
    }

    else if (player2.classList.contains('unable')===false){
        if (points2>0){
            change2();
        }
    }

});

/*Ativação do botão play again*/

let playAgain = document.getElementById('playAgain');

playAgain.addEventListener('click', ()=>{

    player1.classList.remove('unable');
    player2.classList.add('unable');
    points1 = 0;
    points2 = 0;
    console.log("Jogo reiniciado!");
    current1.innerHTML = ""+0;
    current2.innerHTML = ""+0;
    player1Wins.innerHTML = "Player 1";
    player2Wins.innerHTML = "Player 2";
    dices.forEach((item)=>{
        item.classList.add('hidden');
    });
    
});

