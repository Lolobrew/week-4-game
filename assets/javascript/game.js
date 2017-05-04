$(document).ready(function(){

//establish global variables outside of game loop

	var randomNumber;

	var total;

	var wins = 0;

	var lose = 0;

//set game loop
	function resetGame(){

		//assign a random number between 19 and 120
		randomNumber = Math.floor(Math.random()*120) + 19;
		console.log(randomNumber);

		//establish player total = 0 on game start
		total = 0;

		//set random_number div text to random number
		$("#random_number").text(randomNumber);

		//initialize text for user total score
		$("#total_score").text(total);

		//set each crystal with a random number between 1 and 12, respectively
		$("#crystal1").attr("data", Math.floor(Math.random()*12) + 1);
		$("#crystal2").attr("data", Math.floor(Math.random()*12) + 1);
		$("#crystal3").attr("data", Math.floor(Math.random()*12) + 1);
		$("#crystal4").attr("data", Math.floor(Math.random()*12) + 1);


	}


//start of game loop, on click event to any crystal with a class of crystal
$(".crystal").on("click", function(){

	//establish new variable crystalNumber that takes on the data (random number) of the crystal clicked on
		var crystalNumber = $(this).attr("data");

	//add the crystalNumber var to the user's total var
		total += parseInt(crystalNumber);

		console.log(total);
		console.log(crystalNumber);

		$(this).effect('bounce', {times: 1}, 200);


	//update the text of the user's total score
		$("#total_score").text(total);

		//if player score === the random number, it will alert game won, win counter increases, text updates, reset game funtion occurs
		if(total === randomNumber){
			alert ("Game Won!!");
			wins++;
			$("#win").text(wins);
			resetGame();

		//if player score > the random number, it will alert game lost, lose counter increases, text updates, reset game function occurs
		} else if (total > randomNumber){
			alert ("Game Lost..");
			lose++;
			$("#lose").text(lose);
			resetGame();
		}

	});

//initializes game start on load
	resetGame();

//closing tags for doc ready
});