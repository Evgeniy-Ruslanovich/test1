<?php

/**
 *
 */
require_once('config.php');


	$link = mysqli_connect(SQL_HOST, DB_USER, DB_PASSW);
	
	/*$sql = "UPDATE `shop`.`products` SET `name` = " 
	. $_POST['name'] . " , 'descrption' = "
	.  $_POST['description'] . " , 'category_id' = "
	.  $_POST['category_id'] . " , 'cost' = "
	.  $_POST['cost'] . " WHERE `products`.`id` = " . $_POST['id'];
	*/
	//$sql = "UPDATE `shop`.`products` SET `name` = 'Матрешка 99 вложений' WHERE `products`.`id` = 3;";
	$sql = "UPDATE `shop`.`products` SET 
	`name` = '" . $_POST["name"] . "' , 
	`description` = '" . $_POST['description'] . "' , 
	`category_id` = '" . $_POST['category_id'] . "' , 
	`cost` = '" . $_POST['cost'] . "' 
	WHERE `products`.`id` = " . $_POST['id'];
	echo $sql  . '<br>';
	$query = mysqli_query($link, $sql);

	echo $query . '<br>';
	var_dump($_POST);