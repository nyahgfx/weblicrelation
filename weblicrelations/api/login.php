<?php
	session_start();

	$xml=simplexml_load_file("../data/user.xml");
	$out = "NOK";
	foreach ($xml->user as $thisUser) {
		if( $thisUser->email == $_GET["email"] && $thisUser->pw == $_GET["pw"] ){
			$out = "OK";
			$_SESSION['login'] = 1;
			$_SESSION['user'] = $_GET["email"];
		}
	}
	echo $out;	
?>
