// Shorthand for document ready
$(document).ready(function(){
	var element = $(".container #style_editor").children()[3]
  $(element).on("click", function(event) {
  	event.preventDefault();
  	var css_selector = $($(this).siblings()[0]).val()
  	var property = $($(this).siblings()[1]).val()
  	var value = $($(this).siblings()[2]).val()
  	var change = $(css_selector).css(property, value)
  });
});