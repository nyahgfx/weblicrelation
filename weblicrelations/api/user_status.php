<?php
	session_start();
	$out = "NOK";
	if ( $_SESSION['login'] == 1 ){
		$out = $_SESSION['user'];
		$_SESSION['login'] = 1;
	}
	echo $out;	
?>
