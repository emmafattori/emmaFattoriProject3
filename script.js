const storyApp = {};
// This is a function that takes a perameter of the slide number. The slide number corresponds to the html section of the story. The function slides to the slide number that is passed as an argument.

	const nextPage = function(slideNo){
	 $('html, body').animate({
        scrollTop: $(slideNo).offset().top
   	 }, 2000);
	}
// Actions to execute when form is submitted
	$('form').on('submit', function(e){
		e.preventDefault();
	// Taking the user inputs, and appending their information into the body of the story.
	storyApp.userName = $('input[type=text]').val();
	storyApp.pronoun = $('input[type=checkbox]:checked').val();

	$('.name').text(storyApp.userName);
	$('.pronoun').text(storyApp.pronoun);

	nextPage('#slide1');
	pronounPicker1();
	pronounPicker2();
	});

// Function to run when 'next page' on previous page is clicked

	$('.next1').on('click', function(){
		nextPage('#slide2');
	});
	$('.next2').on('click', function(){
		nextPage('#slide3');
		$('.bug').animate({right: "-350px"}, 8000);
	
	})

	$('.next3').on('click', function(){
		nextPage('#slide4');
	})

	$('.next4').on('click', function(){
		nextPage('#slide5');
		
	})

	$('.next5').on('click', function(){
		nextPage('#slide6');
		$('.bug').animate({right: "-350px"}, 8000);
	})



// This function will play the bird sound when the associated button is clicked

const playBirds = new Audio("styles/assets/birdAudio.mp3");
$('.birdButton').click(e => playBirds.play());


// This function will generate the object pronoun, rather than the possessive pronoun that is saved in the above variable. This is to allow the story to make grammatical sense.
storyApp.pronoun = $('input[type=radio]:checked').val();

pronounPicker1 = function(){
	if(storyApp.pronoun === 'her'){
		$('.pronoun2').text('she')
	} else if (storyApp.pronoun === 'him'){
		$('.pronoun2').text('he')
	} else {
		$('.pronoun2').text('they')
	}
};

pronounPicker2 = function(){
	if(storyApp.pronoun === 'her'){
		$('.pronoun3').text('her\'s')
	} else if (storyApp.pronoun === 'him'){
		$('.pronoun3').text('his')
	}else {
		$('.pronoun3').text('their')
	}
}

