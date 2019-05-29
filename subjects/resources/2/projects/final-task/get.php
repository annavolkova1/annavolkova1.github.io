<?php
$name = $_GET['name'];
$surname = $_GET['surname'];
$email = $_GET['email'];
$password = $_GET['password'];

$name = urldecode($name);
$surname = urldecode($surname);

$password = urldecode($password);

//подключение к БД
$mysqli = new mysqli("93.170.141.60", "admin_study", "sf8R1TB6c8", "admin_study");
if ($mysqli->connect_errno) {
	echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

//фиксим кодировку
$mysqli->query("SET NAMES 'utf8';");

//запись в БД
if (!$mysqli->query("INSERT INTO user VALUES ('','$name','$surname','$email','$password')")) {
				echo "Не удалось внести данные в таблицу: (" . $mysqli->errno . ") " . $mysqli->error;
			}
$mysqli->close();
echo "Вы успешно активировали свой аккаунт! ";
echo "Пожалуйста, дождитесь редиректа на страницу авторизации, но вы не дождётесь его никогда. :)";
echo <<<HTML
<div><a href="http://93.170.141.60/account.html">Ссылка на форму авторизации</a></div>
HTML;
?>

