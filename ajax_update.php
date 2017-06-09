<?php

/**
 *
 */
require_once('config.php');


	$link = mysqli_connect(SQL_HOST, DB_USER, DB_PASSW);
	
	$sql = "UPDATE `shop`.`products` SET 
	`name` = '" . $_POST["name"] . "' , 
	`description` = '" . $_POST['description'] . "' , 
	`category_id` = '" . $_POST['category_id'] . "' , 
	`cost` = '" . $_POST['cost'] . "' 
	WHERE `products`.`id` = " . $_POST['id'];

	//echo $sql  . ' \n\r';
	//var_dump($_POST);
	$query = mysqli_query($link, $sql);

	if ($query) {
		echo 'Обновление данных прошло успешно';
	} else {
		echo 'облом';
	}
	//var_dump($_POST);

