//Create Function for Game
allChoices.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        let userChoice = choices.getAttribute("id");
        const computerChoices = ["rock","paper","scissor"];
        let choice = Math.floor(Math.random()*3);
        checkWinner(userChoice,computerChoices[choice]);
    });
});


//Check Winner
const checkWinner = (value1,value2)=>{
    if(value1 === value2){
        info.innerText = "DRAW";
    }else if(value1 === "rock" && value2 === "paper"){
        info.innerText ="COMPUTER WIN'S";
        comuterScore.innerText = parseInt(comuterScore.innerText)+1;
    }else if(value1 === "paper" && value2 === "scissor"){
        info.innerText ="COMPUTER WIN'S";
        comuterScore.innerText = parseInt(comuterScore.innerText)+1;
    }else if(value1 === "scissor" && value2 === "rock"){
        info.innerText ="COMPUTER WIN'S";
        comuterScore.innerText = parseInt(comuterScore.innerText)+1;
    }else if(value1 === "rock" && value2 === "scissor"){
        info.innerText = name.toUpperCase()+" WIN'S";
        userScore.innerText = parseInt(userScore.innerText)+1;
    }else if(value1 === "scissor" && value2 === "paper"){
        info.innerText = name.toUpperCase()+" WIN'S";
        userScore.innerText = parseInt(userScore.innerText)+1;
    }else if(value1 === "paper" && value2 === "rock"){
        info.innerText = name.toUpperCase()+" WIN'S";
        userScore.innerText = parseInt(userScore.innerText)+1;
    }
}



