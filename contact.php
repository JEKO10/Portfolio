<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$myAddress = "aleksa3b@gmail.com";

mail($myAddress,  $message, $mailheader) or die("Error!");

?>