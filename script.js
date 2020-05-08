$(document).ready(function(){

	var magic8Ball = {};
	magic8Ball.answers = ["Are you kidding me?", 
		"I don't even want to dignify that with a response.", 
		"Anything can happen if you eat a lot of garlic.", 
		"I thought you were supposed to be the smart one.",
		"Ooh, let's change the subject", 
		"Your mom says yes, and she is thrilled.",
		"How can you ask me that?",
		"Yes, of course, my answer is yes!",
		"My cat's aura is emitting strong yes vibes.", 
		"Not likely",
		"The wind is changing.",
		"Probably",
		"I think not."];
	
	// Get a random answer from Magic 8 Ball	
	magic8Ball.giveAnswer = function () {
		var answerText = "Oops. Something is not working quite right.";
		
		answerText = this.answers[(Math.floor(Math.random() * this.answers.length))];
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		
		var showAnswer = function() {
			$("#answer").text( answerText);
			$("#answer").fadeIn(4000);
		};
		
		setTimeout(showAnswer, 500);	
	};

	// Prompt user to enter a question
	var askQuestion = function() {
		$("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
		$("#8ball").effect("shake");
		var questionPrompt = function(){
			var question = prompt("Ask a Yes/No question!");
			magic8Ball.giveAnswer();
		};
		setTimeout(questionPrompt, 500);
	};

	$("#answer").hide();
	$("#questionButton").click(askQuestion);
 
});