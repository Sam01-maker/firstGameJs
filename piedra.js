
//Variables de puntuacion de los jugadores.

let humanScore = 0;
let computerScore = 0;


//Funcion para optener la eleccion del computdor

function getComputerChoice(){
    let choiceComputer = Math.floor(Math.random()*3) +1;

    if (choiceComputer === 1){
        choiceComputer = 'Piedra';
    }else if(choiceComputer === 2){
        choiceComputer = 'Papel';
    }else{
        choiceComputer= 'Tijera';
    }

    return choiceComputer;
}


//Funcion paara obetener la eleccin del usuario
function getHumanChoice () {
    let choiceHuman = prompt('Digita una opcion entre "Piedra", "Papel" o "Tijera": ');

    return choiceHuman;
}


//Funcion para la primera ronda del juego
function playRound(choiceHuman, choiceComputer){
    choiceHuman = choiceHuman.toUpperCase();
    choiceComputer = choiceComputer.toUpperCase();
      
    if (choiceHuman === choiceComputer){
        return console.log('Han elejido el mismo objeto, Intenta de nuevo');
    } else if (choiceHuman === "PIEDRA" && choiceComputer === "TIJERA"){
        ++humanScore;
        return console.log(`Felicidades "Piedra gana a Tijera"`);
        
    } else if (choiceHuman === "PIEDRA" && choiceComputer === "PAPEL"){
        ++computerScore;
        return console.log(`Lo siento "Papel gana a Piedra"`);
    
    } else if (choiceHuman === "PAPEL" && choiceComputer === "PIEDRA"){
        ++humanScore;
        return console.log(`Felicidades "Papel gana a Piedra"`);
    
    } else if (choiceHuman === "PAPEL" && choiceComputer === "TIJERA"){
        ++computerScore;
        return console.log(`Lo Siento "Tiejera gana a Papel"`);
    
    }else if (choiceHuman === "TIJERA" && choiceComputer === "PAPEL"){
        ++humanScore;
        return console.log(`Felicidades "Tiejera gana a Papel"`);
    
    } else if (choiceHuman === "TIJERA" && choiceComputer === "PIEDRA"){
        ++computerScore;
        return console.log(`Lo siento "Piedra gana a Papel"`);
    
    } else{
       return console.log('Ingresaste un valor invalido, intenta de nuevo');
    }
}





//Funcion para la logica de todo el juego.

function playGame(){
    for (let i = 0; i < 5; i++){
        const  humanSelection = getHumanChoice();
        const  computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
    }

    if (humanScore > computerScore){
        return console.log(`Felicidades Ganaste, obtuviste: ${humanScore} puntos. La computadora ${computerScore}.` );
    } else if (humanScore === computerScore){
         return console.log(`Es un Empate, obtuviste: ${humanScore} puntos. La computadora ${computerScore}.` );
    } else{
        return console.log(`Lo siento has perdido, obtuviste: ${humanScore} puntos. La computadora ${computerScore}.`);
    }
    

}
playGame();
