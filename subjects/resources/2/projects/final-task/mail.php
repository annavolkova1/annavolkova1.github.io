<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$password = $_POST['password'];
$email = $_POST['email'];

//функция преобразует все символы, которые пользователь попытается добавить в форму
$name = htmlspecialchars($name);
$surname = htmlspecialchars($surname);
$password = htmlspecialchars($password);
$email = htmlspecialchars($email);

//функция декодирует url, если пользователь попытается его добавить в форму
$name = urldecode($name);
$surname = urldecode($surname);
$password = urldecode($password);
$email = urldecode($email);

//удалим пробелы с начала и конца строки, если таковые имеются
$name = trim($name);
$surname = trim($surname);
$password = trim($password);
$email = trim($email);

//позволяет передать кириллицу get-у
$name = urlencode($name);
$surname = urlencode($surname);
$password = urlencode($password);

$to      = $email;
$subject = 'Подтвердите Ваш email';
$message = "Здравствуйте! Спасибо за регистрацию на нашем сайте\nВаш логин: ".$email."\n Для того чтобы войти в свой аккуант его нужно активировать.\n
Чтобы активировать ваш аккаунт, перейдите по ссылке:\n
http://93.170.141.60/get.php?name=".$name."&surname=".$surname."&email=".$email."&password=".$password."\n\n
С уважением, Администрация сайта";
$headers = 'From: admin@93.170.141.60' . "\r\n" .
						'Reply-To: admin@93.170.141.60' . "\r\n" .
						'X-Mailer: Test';
mail($to, $subject, $message, $headers);
echo "Вы успешно зарегистрировались, для активации аккаута пройдите по ссылке в письме.";

?>
