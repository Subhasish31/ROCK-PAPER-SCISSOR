let body = document.querySelector("body");
let name = prompt("Enter Your Name");
//Create a Heading for Game
let head = document.createElement("div");
head.setAttribute("id","head")
body.append(head);
let heading = document.createElement("h1");
heading.setAttribute("id","headng");
heading.innerText = "Rock-Paper-Scissor";
head.append(heading)

//Create a Space To Print Winning Mesage
let info = document.createElement("div");
info.setAttribute("id","info");
info.innerText = "Let's Play";
body.append(info);


// Create a Container to store 3 individual Choices
let container = document.createElement("div");
container.setAttribute("id","container");
body.append(container);
{
    //Create 3 Choices for Game inside the Container
    for(let i = 1 ; i <= 3 ; i++){
        let choices = document.createElement("div");
        choices.setAttribute("class","choices");
        container.append(choices);
    }
}

//Create Image for Choices
let imgRock = document.createElement("img");
imgRock.src = "image/rock.png";
let imgPaper = document.createElement("img");
imgPaper.src = "image/paper.png";
let imgScissor = document.createElement("img");
imgScissor.src = "image/scissors.png";


//Add image to Choices
let allChoices = document.querySelectorAll(".choices");
allChoices[0].append(imgRock);
allChoices[0].setAttribute("id","rock");
allChoices[1].append(imgPaper);
allChoices[1].setAttribute("id","paper");
allChoices[2].append(imgScissor);
allChoices[2].setAttribute("id","scissor");


//Create A ScoreBoard Tab
let scoreBoard = document.createElement("div");
scoreBoard.setAttribute("id","scoreBoard");
body.append(scoreBoard);


//create Tab to display  User Score
let score1 = document.createElement("div");
score1.setAttribute("class","score");

//create an area to display user's point
let userScore = document.createElement("p");
userScore.setAttribute("id","userScore");
userScore.innerText = "0";
//create an area to display user's Name
let user = document.createElement("p");
user.setAttribute("id","user");
user.innerText = name.toUpperCase();

//add userTab to score
score1.append(userScore,user);

//create Tab to display  Computer Score
let score2 = document.createElement("div");
score2.setAttribute("class","score"); 

//create an area to display user's points
let comuterScore = document.createElement("p");
comuterScore.setAttribute("id","computerScore");
comuterScore.innerText = "0";

//create an area to display user name
let computer = document.createElement("p");
computer.setAttribute("id","computer");
computer.innerText = "COMPUTER";

//add computerTab to score
score2.append(comuterScore,computer);


//add both score to message
scoreBoard.append(score1,score2);