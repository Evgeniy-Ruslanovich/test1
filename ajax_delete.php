<?php

/**
 *
 */
require_once('config.php');

	$link = mysqli_connect(SQL_HOST, DB_USER, DB_PASSW);

	$id = $_POST['id'];

	$sql = "DELETE FROM `shop`.`products` WHERE `products`.`id` = " . $_POST['id'];

	$query = mysqli_query($link, $sql);

	if ($query) {
		echo 'Удаление товара данных прошло успешно';
	} else {
		echo 'облом';
	}
