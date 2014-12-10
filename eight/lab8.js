$(document).ready(function() {
	
	var selected;
	
	$("table td").addClass("selected");
	
	$("#parent").click(function(){
		if(selected.parent().length > 0)
		{
			$("table tr").find("td").each(function() {
				$(this).removeClass("selected");
			});
			selected.parent().find("td").addClass("selected");
		}
	});
	
	$("#firstchild").click(function(){
		if(selected.parent().length > 0)
		{
			$("table tr").find("td").each(function() {
				$(this).removeClass("selected");
			});
			selected.parent().children().first().addClass("selected");
		}
	});	
	
	$("#nextsibling").click(function(){
		$("table tr").find("td").each(function() {
				$(this).removeClass("selected");
			});
		selected.next().addClass("selected");
		selected = selected.next();
	});
	
	$("#previoudsibling").click(function(){
		$("table tr").find("td").each(function() {
				$(this).removeClass("selected");
			});
		selected.prev().addClass("selected");
		selected = selected.prev();
	});
	
	$("table th").click(function(){		
		// get index of clicked TH
		$("table tr").find("td").each(function() {
			$(this).removeClass("selected");
		});
		var thIndex = $(this).index();
		selected = $(this);
		// Go through all TD
		$("table tr").each(function() {
            $(this).find("td").eq(thIndex).addClass("selected");
        });
	});
	
	$("table td").click(function(){		
		if($(this).is(':first-child'))
		{
			selected = $(this);
			$("table tr").find("td").each(function() {
				$(this).removeClass("selected");
			});
			var trIndex = $(this).parent().index();
			$("table tr").eq(trIndex).each(function() {
				$(this).find("td").addClass("selected");
            });
		}
	});
	
	$("table td").click(function(){
		if(!$(this).is(':first-child'))
		{
			selected = $(this);
			var clicked = $(this);
			if(!$("td input").length)
			{		
				var value = clicked.html();
				
				$(this).html('<input type="text" value="'+value+'" style="width:70px;height:12px" id="inputBox">');
				$("#inputBox").focus();
				
				$("#inputBox").keypress(function(e) {
					if(e.which == 13)
					{
						var valGet = $("#inputBox").val();
						if($.isNumeric(valGet))
						{
							clicked.html(valGet);
						}
						else
						{
							alert("Value must be a number");
						}
					}
				});
			}
		}
	});
	
});