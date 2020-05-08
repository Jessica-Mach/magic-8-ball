$(document).ready(function(){

	var magic8Ball = {};
	magic8Ball.answers = ["Are you kidding me?", 
		"I don't even want to dignify that with a response.", 
		"Anything can happen if you eat a lot of garlic and wish hard enough.", 
		"I thought you were supposed to be the smart one.",
		"Ooh, let's change the subject", 
		"Your mom says yes, and she is thrilled.",
		"How can you ask me that?",
		"Yes, of course, my answer is yes! You've made me the happiest Magic 8-Ball on the planet.",
		"My cat's aura is emitting strong yes vibes. (Also, my cat doesn't like you.)"];
	
	// Get a random answer from Magic 8 Ball	
	magic8Ball.giveAnswer = function () {
		var answerText = "Oops. Something is not working quite right.";
		answerText = this.answers[(Math.floor(Math.random() * this.answers.length))];
		$("#answer").text( answerText);
	};

	// Prompt user to enter a question
	var askQuestion = function() {
		var question = prompt("Ask a Yes/No question!");
		magic8Ball.giveAnswer();
	};

	$("#questionButton").click(askQuestion);
 
});