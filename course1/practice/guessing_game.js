function guessGame() {
	var random_number = Math.floor(Math.random()*100) + 1,
		total_guesses = 0,
		guessed_number;

	console.log("----------------------" + random_number);
	while(random_number !== guessed_number){
		guessed_number = parseInt(prompt("Enter a number between 1 to 100"));
		total_guesses++;

		console.log("----------------------" + typeof(guessed_number));
		if(guessed_number === random_number) {
			alert("Congratulations you have guessed the number in " + total_guesses + " attempts!");
		}
		else if(guessed_number < 1 || guessed_number > 100) {
			alert ("Guessed number is out of range");
		}
		else if(guessed_number < random_number) {
			alert("Guessed number is low");
		}
		else if(guessed_number > random_number){
			alert("Guessed number is too big");
		}
		else {
			alert("Enter only numerical numbers");
		}
	}
}