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

