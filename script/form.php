<?php

		if($_SERVER["REQUEST_METHOD"]=="POST"){	
		$host = "Host: www.".$_SERVER["HTTP_HOST"]."<br>";
		$remoteip = "IP-адрес: ".$_SERVER["REMOTE_ADDR"]."<br>";
		$to  = 'photo@623030.ru' . ', '; // обратите внимание на запятую
		//$to .= '3852@623030.ru';
		$zag = "Заявка на звонок";
		$fname = "Имя: ".trim(strip_tags($_POST["name"]))."<br>";
		$phone = "Телефон: ".trim(strip_tags($_POST["tel"]))."<br>";
		$email = "email: ".trim(strip_tags($_POST["email"]))."<br>";
		$mess = "Сообщение: ".trim(strip_tags($_POST["message"]))."<br>";
		$headers = 'Content-type: text/html; charset=utf-8';
		mail("$to","$zag","$host $remoteip $fname $phone $email","$headers");
		header("Location: ".$_SERVER['PHP_SELF']);
		//header("Location: ../index.php");
}

?>
						