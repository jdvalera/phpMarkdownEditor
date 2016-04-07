<?php
require 'vendor/autoload.php';


$Parsedown = new Parsedown();
$Parsedown->setMarkupEscaped(true);
$Parsedown->setBreaksEnabled(true);


$text = $_POST['text'];
$parsed = $Parsedown->text($text);
echo $parsed;


?>
