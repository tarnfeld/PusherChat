$(document).ready(function()
{

	var pusher_app_key = 'KEY HERE'; // This will need to be changed to suit your PusherApp app configuration

	var channel = '';
	var nickname = $('#nickname').val();
	
	$('#editNickname').click(function()
	{
		$('#extras').css({ padding:"0 0 20px 0" });
		$('#nickname').show();
		$('#saveNickname').show();
		$(this).hide();
	});
	
	$('#saveNickname').click(function()
	{
		$('#extras').css({ padding:"0 0 0 0" });
		$('#nickname').hide();
		$('#editNickname').show();
		$(this).hide();
		nickname = $('#nickname').val();
	});
	
	$('#loading').show();
	$.post("ajax/requestChannel.php", function(data)
	{
	
		$('#loading').hide();
	    channel = data;
	    WebSocket.__swfLocation = "js/WebSocketMain.swf";
	    var socket = new Pusher(pusher_app_key, channel);
	    socket.bind('message', function(message)
	    {
			if($('body').hasClass("alt"))
			{
				$('#messages').append('<li style="display:none" class="new alt"><b>'+message.nickname+'</b><br />'+replaceURLWithHTMLLinks(stripslashes(message.content))+'</li>');
				$('body').removeClass("alt");
			}
			else
			{
				$('#messages').append('<li style="display:none" class="new"><b>'+message.nickname+'</b><br />'+replaceURLWithHTMLLinks(stripslashes(message.content))+'</li>');
				$('body').addClass("alt");
			}
			$('#messages .new').fadeIn(250);
			$('#messages .new').removeClass("new");
			$("#messages").attr("scrollTop",$("#messages").attr("scrollHeight") - $('#messages').height());
	    });
	    
		$('#message').attr("disabled","");
		$('#message').val("Type and hit enter...");
		
		$('#shareChatLinkID').text(channel.replace("pusherchat-",""));
		$('#shareChatLink').show();
	    
	});
	
	$('#message').keyup(function()
	{
		if($(this).val().length > 0)
		{
			$("#messages").attr("scrollTop",$("#messages").attr("scrollHeight") - $('#messages').height());
			if (window.event && window.event.keyCode == 13)
			{
			 	if($(this).val().length <= 1)
			 	{
			 		$(this).val("");
			 		alert("Please type in a message");
			 	}
			 	else
			 	{
			 		var text = $(this).val();
			 		$(this).attr("disabled","disabled");
				 	$(this).blur();
				 
				   	$.post("ajax/postMessage.php", { chatChannel:channel, "nickname":nickname, message:text }, function(data)
				   	{
			   			$("#messages").attr("scrollTop",$("#messages").attr("scrollHeight") - $('#messages').height());
				   	    $('#message').text("");
				   	    $('#message').attr("disabled","");
				   	    $('#message').focus();
				   	});
			 	}
			}
		}
	});
	
	function stripslashes(str) {
		str=str.replace(/\\'/g,'\'');
		str=str.replace(/\\"/g,'"');
		str=str.replace(/\\0/g,'\0');
		str=str.replace(/\\\\/g,'\\');
		return str;
	}
	
	function replaceURLWithHTMLLinks(text) {
		var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
		return text.replace(exp,"<a href='$1'>$1</a>"); 
	}
	
});