// JavaScript Document
$(document).ready(function() {
	
    $.ajax({
	  type:"GET",
	  url:"topnews.atom",
	  dataType:"xml",			
	  success: function(xml){
		$(xml).find('entry').each(function(){
		  var title = $(this).find('title').text();
		  var urllink = $(this).find('link').text();
		  var id = $(this).find('id').text();
		  var published = $(this).find('published').text();
		  var updated = $(this).find('updated').text();
		  var summary = $(this).find('summary').text();
		  var content = $(this).find('content').text();
		  
		  $("#topStories").append("<div>\n\t<h2>"+title+"</h2>\n\t<h4>"+published+"</h4>\n\t<div>"+summary+"</div>\n</div>\n<div>"+content+"</div>\n");
		  
		  //$("#topStories").append("<div>"+title+"</div>\n<div>"+content+"</div>\n");
		  		  
		});
		$( "#topStories" ).accordion();
	  },
	});
	
	
});