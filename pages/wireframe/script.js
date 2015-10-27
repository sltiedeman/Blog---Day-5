function validateForm(){

	if(signUpForm.fullName.value.length < 4){
		signUpForm.fullName.focus();
		document.getElementById('name-wrapper').className ='form-group has-error';
		document.getElementById('name-error').className = 'help-block';
		document.getElementById('name-error').innerHTML = "You need at least 4 characters";
		return false;
	}
	
}

// $(document).ready(function(){
// 	var mainNav = $('#header');
// 	var mainNavScroll = 'nav-bar-scrolled';
// 	var headerHeight = $('#header').height();

// 	$(window).scroll(function(){
// 		console.log($(this).scrollTop());
// 		if( $(this).scrollTop() > 0){
// 			mainNav.addClass(mainNavScroll);

// 		}else{
// 			mainNav.removeClass(mainNavScroll);
// 		}
// 	});






// });












// if ($('signUpForm').value.length < 4){

// 	}