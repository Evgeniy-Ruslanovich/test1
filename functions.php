<?php

/**
 *
 */

/*Функция возвращает ассоциативный массив с данными для постоения таблицы*/
function get_data () {
	$link = mysqli_connect(SQL_HOST, DB_USER, DB_PASSW);
	$data = mysqli_query($link, "select * from `shop`.`products`");
	$tableArray = mysqli_fetch_all($data, MYSQL_ASSOC);
	return $tableArray;
}

function build_table_html ($tableArray) {
	$table_html = '<table><tbody><tr><td class=\'hidden id\'>id</td><td class=\'name\'>Наименование</td><td>Описание</td><td>Категория</td><td>Цена</td></tr>';//'приветмедвед <br>';
	foreach ($tableArray as $row) {
		$table_html .= /*'приветмедвед <br>';*/
			'<tr><td class=\'hidden id\'>' . $row['id'] . 
			'</td><td class=\'name\'>' . $row['name'] .
			'</td><td class=\'description\'>' . $row['description'] .
			'</td><td class=\'category\'>' . $row['category_id'] . //надо сделать джойн, чтоб мне в базе давалось имя категории, а не номер
			'</td><td class=\'cost\'>' . $row['cost'] . '</td></tr>';
	}
	$table_html .= '</tbody></table>';//'приветмедвед <br>';
	return $table_html;
}
