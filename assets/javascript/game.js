$(document).ready(function(){
	
	var randomNumber;

	var total;

	var wins = 0;

	var lose = 0;


	function resetGame(){
		//assign a random number between 19 and 120
		randomNumber = Math.floor(Math.random()*101) + 19;
		console.log(randomNumber);

		total = 0;

		//set random_number div text to random number
		$("#random_number").text(randomNumber);

		$("#total_score").text(total);

		$("#crystal1").attr("data", Math.floor(Math.random()*12) + 1);
		$("#crystal2").attr("data", Math.floor(Math.random()*12) + 1);
		$("#crystal3").attr("data", Math.floor(Math.random()*12) + 1);
		$("#crystal4").attr("data", Math.floor(Math.random()*12) + 1);
	}



$(".crystal").on("click", function(){
		var crystalNumber = $(this).attr("data");
		total += parseInt(crystalNumber);
		console.log(total);

		console.log(crystalNumber);
		$("#total_score").text(total);

		if(total === randomNumber){
			alert ("Game Won");
			wins++;
			$("#win").text(wins);
			resetGame();

		} else if (total > randomNumber){
			alert ("Game Lost");
			lose++;
			$("#lose").text(lose);
			resetGame();
		}

	});

	resetGame();
//closing tags for doc ready
});