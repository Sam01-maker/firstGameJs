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

    return choiceComputer.toUpperCase();
}


//Funcion paara obetener la eleccin del usuario
function getHumanChoice () {
    let choiceHuman = prompt('Digita una opcion entre "Piedra", "Papel" o "Tijera": ').toUpperCase();
    
    if (choiceHuman === 'PIEDRA'){
        choiceHuman = 'Piedra';

    } else if (choiceHuman === 'PAPEL'){
        choiceHuman = 'Papel';

    } else if (choiceHuman === 'TIJERA'){
        choiceHuman = 'Tijera';

    } else{
        choiceHuman = 'Seleccionar un valor valido';
    }

    return choiceHuman.toUpperCase();
}


//Variables de puntuacion de los jugadores.

let humanScore = 0;
let computerScore = 0;

//Logica pra el primer juego