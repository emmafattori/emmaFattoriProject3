const storyApp = {};
// This is a function that takes a perameter of the slide number. The slide number corresponds to the html section of the story. The function slides to the slide number that is passed as an argument.

const nextPage = function(slideNo){
	 $('html, body').animate({
        scrollTop: $(slideNo).offset().top
    }, 2000);
}
	$('form').on('submit', function(e){
		e.preventDefault();
	// Taking the user inputs, and appending their information into the body of the story.
	storyApp.userName = $('input[type=text]').val();
	storyApp.pronoun = $('input[type=radio').val();

	$('.name').text(storyApp.userName);
	$('.pronoun').text(storyApp.pronoun);

	nextPage('#slide1');
   
	
});






