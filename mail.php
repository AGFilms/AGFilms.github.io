<?php

$recepient = "help4foreigners.ukraine@gmail.com";
$sitename = "Help4Foreigners";

$name = trim($_POST["name"]);
$lastname = trim($_POST["lastname"]);
$adress = trim($_POST["email"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nEmail: $adress \nСообщение: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");