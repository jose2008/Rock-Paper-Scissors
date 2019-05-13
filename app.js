let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}


//getComputerChoice();



function convertToWord(letter){
	if(letter == 'r') return "Rock";
	if(letter == 'p') return "Papper";
	return "Scissors"
}


function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord( userChoice )}(smallUserWord)   beats   ${convertToWord( computerChoice ) }(smallCompWord). You win! `;
	document.getElementById(userChoice).classList.add('green-glow');
	setTime(function(){document.getElementById(userChoice).classList.remove('green-glow')} 300);
}







function lose(userChoice, computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord( userChoice )}(smallUserWord)   loses to    ${convertToWord( computerChoice ) }(smallCompWord). You Lost! `;
	document.getElementById(userChoice).classList.add('red-glow');
	setTime(function(){document.getElementById(userChoice).classList.remove('red-glow')} 300);

}



function draw(userChoice, computerChoice){
	//userScore++;
	//userScore_span.innerHTML = userScore;
	//computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord( userChoice )}(smallUserWord)   equals   ${convertToWord( computerChoice ) }(smallCompWord). It's a draw! `;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTime(function(){document.getElementById(userChoice).classList.remove('gray-glow')} 300);

}




function game(userChoice){
	const computerChoice = getComputerChoice();
	//console.log("user-choice = >" + userChoice);
	//console.log(computerChoice);

	const name = "pine";
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			//console.log("USER WIN.");
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			console.log("USER LOSES.")
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			//console.log("Its a draw");
			draw(userChoice, computerChoice);
			break;
	}



}


function main(){

	rock_div.addEventListener('click', function(){
		game("r");
	});

	paper_div.addEventListener('click', function(){
		game("p");
	});

	scissors_div.addEventListener('click', function(){
		game("s");	
	});


}

main();