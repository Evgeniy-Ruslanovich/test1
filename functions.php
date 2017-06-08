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

function add_form () {
	$link = mysqli_connect(SQL_HOST, DB_USER, DB_PASSW);
	$data = mysqli_query($link, "select * from `shop`.`category`");
	$categoryArray = mysqli_fetch_all($data, MYSQL_ASSOC);
	var_dump($categoryArray);
	?>
	<div class='form'>
		<form action="ajax_update.php" method="post">
			<fieldset>
				<label>id<br><input type="number" name="id"></label><br>
				<label>Название товара<br><input type="text" name="id"></label><br>
				<label>Описание товара<br><textarea></textarea></label><br>
				<label>Категория<br>
					<select name="category">
						    <?php 
						    foreach ($categoryArray as  $row) {
						    	echo '<option value="' . $row['id'] . '">' . $row['name'] . '</option>';
						    	}
						    ?>
					</select>
				</label>


			</fieldset>
		</form>
	</div>
<?php
}