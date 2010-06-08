$(document).ready(function(){
	
	$.each($('input[type=text], input[type=password]'), function(index, value) {
			
		var placeholder = $(value).attr("placeholder");
		if($(value).val()=='')
		{
			$(value).css({'color':'#acacac'});
			$(value).val(placeholder);
		}
		
		$(value).focus(function()
		{
			if($(this).val()=="")
			{
				$(this).css({'color':'#acacac'});
				$(this).val(placeholder);
			}
			else
			{
				$(this).css({'color':'#000'});
				if($(this).val()==placeholder)
				{
					$(this).val("");
				}
			}
			
		});
		
		$(value).blur(function()
		{
			if($(this).val()=="")
			{
				$(this).css({'color':'#acacac'});
				$(this).val(placeholder);
			}
			else
			{
				$(this).css({'color':'#000'});
				if($(this).val()==placeholder)
				{
					$(this).val("");
				}
			}
		});
			
	});

});