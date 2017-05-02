

$(document).ready(function(){
	
//assign a random number between 19 and 120
	var randomNumber = Math.floor(Math.random()*101) + 19;
	console.log(randomNumber);

//set random_number div text to random number
	$("#random_number").text(randomNumber);

//create an array and assign a random number between 1 and 12 to 4 indexes
	var crystalRandomNumber = [];
	crystalRandomNumber[0] = Math.floor(Math.random()*12) + 1;
	crystalRandomNumber[1] = Math.floor(Math.random()*12) + 1;
	crystalRandomNumber[2] = Math.floor(Math.random()*12) + 1;
	crystalRandomNumber[3] = Math.floor(Math.random()*12) + 1;

//assign the value of each crystal by setting the value to the corresponding index of the first array
//and put them in their own array for easy access
	var crystalArray = [];
	crystalArray[0] = $("#crystal1").val(crystalRandomNumber[0]);	
	crystalArray[1] = $("#crystal2").val(crystalRandomNumber[1]);
	crystalArray[2] = $("#crystal3").val(crystalRandomNumber[2]);
	crystalArray[3] = $("#crystal4").val(crystalRandomNumber[3]);

//create empty array to store values of crystals
	crystalValue=[];

//loop through first array and push values to new array as numbers instead of strings!
	for (var i = 0; i < crystalArray.length; i++) {
		crystalValue.push(parseInt(crystalArray[i].val()));
	}

	console.log(crystalValue);

//set initial value of total score
	$("#total_score").val(parseInt(0));
	
	$("#total_score").text($("#total_score").val());

//on click of crystal, add value to total score box


//closing tags for doc ready
});