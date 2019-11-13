const storyApp = {};
storyApp.userName = $('input[type=text]').val();
storyApp.pronoun = $('input[type=radio]:checked').val();

const scrollToNext = function(){
	$.scrollTo($('#slide1'))
};

$('form').on('submit', function(e){
	e.preventDefault();
// Taking the user inputs, and appending their information into the body of the story.

	$('.name').text(storyApp.userName);
	$('.pronoun').text(storyApp.pronoun);
// Scrolling to the next section of the story

	$('body').animate(function(){
	})

});





$('document').ready(function(){

});



