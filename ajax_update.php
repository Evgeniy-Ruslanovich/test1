<?php

/**
 *
 */
require_once('config.php');

$link = mysqli_connect(SQL_HOST, DB_USER, DB_PASSW);

$name = addslashes($_POST["name"]);
$description = addslashes($_POST["description"]);
$category_id = addslashes($_POST["category_id"]);
$cost = addslashes($_POST["cost"]);

$sql = "UPDATE `shop`.`products` SET 
	`name` = '" . $name . "' , 
	`description` = '" . $description . "' , 
	`category_id` = '" . $category_id . "' , 
	`cost` = '" . $cost . "' 
	WHERE `products`.`id` = " . $_POST['id'];

$query = mysqli_query($link, $sql);

if ($query) {
    echo 'Обновление данных прошло успешно';
} else {
    echo 'облом';
}
