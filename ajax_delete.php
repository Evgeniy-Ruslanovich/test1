<?php

/**
 *
 */
require_once('config.php');


	$link = mysqli_connect(SQL_HOST, DB_USER, DB_PASSW);

	$id = $_POST['id'];

	$sql = "DELETE FROM `shop`.`products` WHERE `products`.`id` = " . $_POST['id'];

	//echo $sql  . ' \n\r';
	//var_dump($_POST);
	$query = mysqli_query($link, $sql);

	if ($query) {
		echo 'Удаление товара данных прошло успешно';
	} else {
		echo 'облом';
	}
	//var_dump($_POST);

