<?php
require 'vendor/autoload.php';


function parseText($text) {
    $Parsedown = new Parsedown();
    $Parsedown->setMarkupEscaped(true);
    $Parsedown->setBreaksEnabled(true);
    return $Parsedown->text($text);
}

if (!empty($_POST) && $_POST['function'] === 'parse') {

$text = $_POST['text'];

echo parseText($text);
}


?>
