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
    let choiceHuman = prompt('Digita una opcion entre "Piedra", "Papel" o "Tijera": ');
    
    if (choiceHuman === 'piedra' || choiceHuman ===  'Piedra' || choiceHuman ===  'PIEDRA'){
        choiceHuman = 'Piedra';

    } else if (choiceHuman === 'papel' || choiceHuman === 'Papel' || choiceHuman === 'PAPEL'){
        choiceHuman = 'Papel';

    } else if (choiceHuman === 'tijera' || choiceHuman === 'Tijera' || choiceHuman ===  'TIJERA'){
        choiceHuman = 'Tijera';

    } else{
        choiceHuman = 'Seleccionar un valor valido';
    }

    return choiceHuman;
}

console.log(getHumanChoice());