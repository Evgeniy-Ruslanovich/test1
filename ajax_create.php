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

    $sql = "insert INTO `shop`.`products` (`name`,`description`, `category_id`, `cost`) 
            VALUES ('" . $name . "' , '" . $description . "' , '" . $category_id . "' , '" . $cost . "')";

	$query = mysqli_query($link, $sql);
    $last_id = mysqli_insert_id ( $link);

	if ($query) {
		echo '{"message":"Создан новый товар","lastId":"' . $last_id . '"}';
	} else {
		echo '{"message":"облом"}';
	}
