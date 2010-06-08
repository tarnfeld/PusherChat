<?php

	session_start();
	if($_GET['code']!='')
	{
		$_SESSION['chatCode'] = $_GET['code'];
	}

?>
<!DOCTYPE html>
<html>
	<head>
		<title>Pusher Chat</title>
		<link rel="stylesheet" href="css/chat.css">
		<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" src="js/placeholder.js"></script>
		<script src="http://js.pusherapp.com/1.4/pusher.min.js"></script>
		<script type="text/javascript" src="js/chat.js"></script>
	</head>
	<body>
		<div id="chatBox">
			<div id="extras">
				<input type="text" value="Person" id="nickname" />
				<a href="#" id="saveNickname">Save</a>
				<a href="#" id="editNickname"><p>Edit Nickname</p></a>
			</div>
			<div id="loading"></div>
			<ul id="messages">
			</ul>
			<textarea disabled="disabled" id="message" placeholder="Type your message here..."></textarea>
			<div id="shareChatLink">Unique Chat Code: <b id="shareChatLinkID"></b></div>
		</div>
		<script src="http://static.getclicky.com/js" type="text/javascript"></script>
		<script type="text/javascript">clicky.init(119288);</script>
		<noscript><p><img alt="Clicky" width="1" height="1" src="http://static.getclicky.com/119288ns.gif" /></p></noscript>
	</body>
</html>