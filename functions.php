<?php

/**
 *
 */

/*Функция возвращает ассоциативный массив с данными для построения таблицы*/
function get_data () {
	$link = mysqli_connect(SQL_HOST, DB_USER, DB_PASSW);
	$data = mysqli_query($link, "select * from `shop`.`products`");
	$tableArray = mysqli_fetch_all($data, MYSQL_ASSOC);
	return $tableArray;
}

function build_table_html ($tableArray) {
	$table_html = '<table><tbody><thead><tr><td class=\' id\'>id</td><td class=\'name\'>Наименование</td><td>Описание</td><td>Категория</td><td>Цена</td><td></td></tr></thead>';//'приветмедвед <br>';
	foreach ($tableArray as $row) {
		$table_html .= /*'приветмедвед <br>';*/
			'<tr><th class=\'id\'>' . $row['id'] . 
			'</th><td class=\'name\'>' . $row['name'] .
			'</td><td class=\'description\'>' . $row['description'] .
			'</td><td class=\'category\'>' . $row['category_id'] . //надо сделать джойн, чтоб мне в базе давалось имя категории, а не номер
			'</td><td class=\'cost\'>' . $row['cost'] . '</td><td class ="editbutton" onclick="callEditWindow();"><b>*</b></td></tr>';
	}
	$table_html .= '</tbody></table>';
	return $table_html;
}

/*функция генерирует HTML-код формы Вызов функции вставляет 
Также происходит обрадение к базе данных, чтобы получить список катеорий товаров*/
function add_form () {
    //запрашиваем список категорий
	$link = mysqli_connect(SQL_HOST, DB_USER, DB_PASSW);
	$data = mysqli_query($link, "select * from `shop`.`category`");
	$categoryArray = mysqli_fetch_all($data, MYSQL_ASSOC);
	//var_dump($categoryArray);
	?>
	<div class='form hidden' id="editwindow">
		<div id="closebutton">X</div>
		<form action="ajax_update.php" method="post" name="updateform">
			<fieldset>
				<input type="hidden"></input>
				<label>id<br><input type="number" name="id" readonly></label><br>
				<label>Название товара<br><input type="text" name="name" required></label><br>
				<label>Описание товара<br><textarea name="description" cols="60" >matrioshka</textarea></label><br>
				<label>Категория<br>
					<select name="category_id">
						    <?php 
						    foreach ($categoryArray as  $row) {
						    	echo '<option value="' . $row['id'] . '">' . $row['name'] . '</option>';
						    	}
						    ?>
					</select>
				</label><br>
				<label>Цена<br><input type="number" name="cost" step="0.01" required></label><br><br>
				<input type="submit" value="отправить через php">
				<button id='sendajaxupdate' type="button">отправить через AJAX</button>
				<button id='deleteproduct' type="button" class="hidden">удалить товар</button>

			</fieldset>
		</form>
	</div>
<?php
}