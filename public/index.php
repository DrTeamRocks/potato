<?php
require __DIR__ . '/../vendor/autoload.php';

$loader = new Twig_Loader_Filesystem(__DIR__ . '/../templates');
$options = array();
$twig = new Twig_Environment($loader, $options);

echo $twig->render('index.twig');
