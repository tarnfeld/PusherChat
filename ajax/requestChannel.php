<?php

	session_start();
	if(isset($_SESSION['chatCode']))
	{
		echo("pusherchat-".$_SESSION['chatCode']);
	 	unset($_SESSION['chatCode']);
	}
	else
	{
		$password = "";
		$possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		$length = 15;
		$i = 0; 
		while ($i < $length) { 
		  $char = substr($possible, mt_rand(0, strlen($possible)-1), 1);
		  if (!strstr($password, $char)) { 
		    $password .= $char;
		    $i++;
		  }
		
		}
		echo("pusherchat-".$password);
	}
	
	sleep(1);

?>