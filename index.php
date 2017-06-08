<?php

/**
 *
 */
error_reporting(E_ALL);
require_once('config.php');
require_once('functions.php');
//тестируем подключение конфига
/*echo 'SITE_ROOT ' . SITE_ROOT . '<br>';
echo 'WWW_ROOT ' . WWW_ROOT . '<br>';
echo 'TEMPLATE_DIR ' . TEMPLATE_DIR . '<br>';
echo 'MODEL_DIR ' . MODEL_DIR . '<br>';
echo 'CONTROLLER_DIR ' . CONTROLLER_DIR . '<br>';
echo 'IMAGE_DIR ' . IMAGE_DIR . '<br>';
echo 'THUMBS_DIR ' . THUMBS_DIR . '<br>';*/

$tableArray = get_data ();
//var_dump($tableArray);

$table_html = build_table_html ($tableArray);

//var_dump($table_html);


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
			<button class="green">Добавить товар</button>
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

/*
$route = "list";
if (isset($_GET['photo'])) {
	$route = $_GET['photo'];
	require_once(CONTROLLER_DIR . DIRECTORY_SEPARATOR . 'SinglePhoto.php');
	echo 'Загружаем фотку: ' . $_GET['photo'];
} else {
	//echo 'Загружаем список фоток<br>';
	require_once(CONTROLLER_DIR . DIRECTORY_SEPARATOR . 'ListPhoto.php');

}*/
// еще нужно добавить одну ветку - получить джейсон