<?php

	require_once('../config.php');
	require('Pusher.php');
	
	$message = $_POST['message'];
	$nickname = $_POST['nickname'];
	$channel = $_POST['chatChannel'];
	
	$content = array(
		"content"=>$message,
		"nickname"=>$nickname
	);

	$pusher = new Pusher(PUSHER_API_KEY, PUSHER_API_SECRET, PUSHER_APP_ID, $channel);
	$pusher->trigger('message', $content);

?>