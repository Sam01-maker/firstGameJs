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

function getHumanChoice () {
    let choiceHuman = prompt('Selecciona una opcion entre "Piedra", "Papel" o "Tijeras"');
    
    if (choiceHuman === 'piedra' || 'Piedra' || 'PIEDRA'){
        choiceHuman = 'Piedra';
    } else if (choiceHuman === 'papel' || 'Papel' || 'PAPEL'){
        choiceHuman = 'Papel';
    } else if (choiceHuman === 'tijera' || 'Tijera' || 'TIJERA'){
        choiceHuman = 'Tijera';
    } else{
        choiceHuman = 'Seleccionar un valor valido';
    }
}

console.log(getHumanChoice());