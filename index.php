<?php

/**
 *
 */
error_reporting(E_ALL);
require_once('config.php');
require_once('functions.php');

$tableArray = get_data ();

$table_html = build_table_html ($tableArray);

?>
<!doctype html>
<html>
	<head>
		<title>Список товаров</title>
		<meta charset="UTF8">
		<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
		<link rel="stylesheet" type="text/css" href="css/style1.css">
	</head>
	<body>
	<div class="main">
		<div class="header">
			<div class="header-center">
				<h1>Cписок товаров</h1>
			</div>
		</div>
		<div class="content">
			<?php 

			echo $table_html;

			add_form ();

			?>
			<button class="green" id="createbutton">Добавить товар</button>
            <br>
            <br>
            <h2>Инструкция</h2>
            <p>Чтобы отредактировать товар, нажмите на зеленую клеточку в правом конце строки таблицы.
                Откроется форма для редактирования. ID товара не редактируется. Если нажать на кнопку "Отправить через PHP" или на Enter, то произойдет стандартная отправка формы через перезагрузку страницы.
                Если нажать "отправить через AJAX" то произойдет отправка через AJAX, товар добавится и таблица отредактируется в реальном времени.
            Если щеклнуть на кнопку редактирования другого товара, то содержание формы заменится на данные другого товара.
            Чтобы закрыть форму, нажмите на красный крестик.</p>
            <p>Чтобы удалить товар, нажмите на кнопку "Удалить товар". Товар удалится из базы, а из таблицы удалится строка с товаром. В режиме добавленя нового товара кнопка "удалить" недоступна</p>
            <p>Чтобы добавить новый товар, нажмите кнопку "Добавить товар". ID не редактируется и присваивается автоматически.</p>
		</div>

	</div>
	<div class="prefooter">
	</div>
	<div class="footer">
			<div class="footer-center">
				Это футер
			</div>
	</div>
	<script type="text/javascript" src="script.js"></script>
	</body>
</html>
<?php