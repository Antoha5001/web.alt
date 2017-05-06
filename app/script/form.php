<?php

		if($_SERVER["REQUEST_METHOD"]=="POST"){	
		$host = "Host: www.".$_SERVER["HTTP_HOST"]."<br>";
		$remoteip = "IP-адрес: ".$_SERVER["REMOTE_ADDR"]."<br>";
		/*$to  = 'plantsvzzombi@mail.ru' . ', '; // обратите внимание на запятую
		$to .= 'plantsvzzombi@yandex.ru';*/
		$to  = 'plantsvzzombi@mail.ru'; 
		$zag = "Нижняя форма";
		$fname = "Имя: ".trim(strip_tags($_POST["name"]))."<br>";
		$phone = "Телефон: ".trim(strip_tags($_POST["tel"]))."<br>";
		$email = "email: ".trim(strip_tags($_POST["email"]))."<br>";
		$mess = "Сообщение: ".trim(strip_tags($_POST["message"]))."<br>";
		$headers = 'Content-type: text/html; charset=utf-8';
		mail($to,"$zag","$host $remoteip $fname $phone $email $mess","$headers");
		//header("Location: ".$_SERVER['PHP_SELF']);
		header("Location: ../index.php");
}

?>
						