<?php

/**
 *
 */
require_once('config.php');

	$link = mysqli_connect(SQL_HOST, DB_USER, DB_PASSW);
	
	$sql = "insert INTO `shop`.`products` (`name`,`description`, `category_id`, `cost`) 
            VALUES ('" . $_POST["name"] . "' , '" . $_POST['description'] . "' , '" . $_POST['category_id'] . "' , '" . $_POST['cost'] . "')";

	//var_dump($_POST);
	$query = mysqli_query($link, $sql);
    $last_id = mysqli_insert_id ( $link);

	if ($query) {
		echo '{"message":"Создан новый товар","lastId":"' . $last_id . '"}';
	} else {
		echo '{"message":"облом"}';
	}
	//var_dump($_POST);
