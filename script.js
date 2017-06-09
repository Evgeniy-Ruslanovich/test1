var editWindow = document.getElementById('editwindow');
var closeButton = document.getElementById('closebutton');
var productData = {};
var currentTableRow;

function callEditWindow(event) {
	event = event || window.event;
  	var target = event.currentTarget; //находим элемент, по которому кликнули
	console.log(target);
  	currentTableRow = target.parentElement; //находим родительский элемент - строку таблицы. Она нам еще пригодится
  	console.log(currentTableRow);
  	getTableValues (currentTableRow); //вызываем фукнцию, которая достанет данные из таблицы в объект
	//console.log(editWindow);
	setFormValues (editWindow);
	editWindow.classList.remove('hidden'); //показываем окно редактирования
}

closeButton.onclick = function () {
	editWindow.classList.add('hidden');
}

function getTableValues (row){
	productData.Id = row.cells[0].innerHTML;
		console.log('productId: ' + productData.Id);
	productData.name = row.cells[1].innerHTML;
		console.log('productName: ' + productData.name);
	productData.description = row.cells[2].innerHTML;
		console.log('productDescription: ' + productData.description);
	productData.categoryId = row.cells[3].innerHTML;
		console.log('productCategory: ' + productData.categoryId);
	productData.сost = row.cells[4].innerHTML;
		console.log('productCost: ' + productData.сost);
}

function setTableValues (row){
	row.cells[0].innerHTML = productData.Id;
		console.log('productId: ' + productData.Id);
	row.cells[1].innerHTML = productData.name;
		console.log('productName: ' + productData.name);
	row.cells[2].innerHTML = productData.description;
		console.log('productDescription: ' + productData.description);
	row.cells[3].innerHTML = productData.categoryId;
		console.log('productCategory: ' + productData.categoryId);
	row.cells[4].innerHTML = productData.сost;
		console.log('productCost: ' + productData.сost);
}

/*Эта функция заполняет форму теми исходными данными, которые сейчас есть в таблице*/
function setFormValues (form) {
	form.getElementsByTagName('input')[0].value = productData.Id;
	form.getElementsByTagName('input')[1].value = productData.Id;
	//form.getElementsByTagName('input')[2].setAttribute('disabled', 'disabled');

	form.getElementsByTagName('input')[2].value = productData.name;
	//console.log('productCost все таки: ' + productData.сost);
	form.getElementsByTagName('input')[3].value = productData.сost;
	form.getElementsByTagName('textarea')[0].innerHTML = productData.description;
	var categoeyCount = form.getElementsByTagName('option').length;
	console.log('categoeyCount: ' + categoeyCount);
	for (var i=0; i<categoeyCount ;i++) {
		if (form.getElementsByTagName('option')[i].value == productData.categoryId) {

			 form.getElementsByTagName('option')[i].setAttribute('selected', 'selected');
			 
		} else {
			form.getElementsByTagName('option')[i].removeAttribute('selected'); //нужно снимать атрибут, иначе остается выбранной та категория, которая идет выше в списке, даже если ты уже перешел к карточке другого товара
		}
	}
	console.log(formData);
}

/*ajax*/
/*получаем данные формы*/
var formData = new FormData(document.forms.updateform);

//console.log(formData);

var ajaxUpdateButton = document.getElementById('sendajaxupdate');
ajaxUpdateButton.onclick = sendAjax;
//function sendAjax (){ alert('button');}

function sendAjax (){
	var xhr = new XMLHttpRequest();
	xhr.open('post', 'ajax_update.php', false);
	var form = document.forms.updateform;
	var formData = new FormData(form);
	xhr.send(formData);
	if (xhr.status != 200) {
	  // обработать ошибку
	  alert( 'Произошла ошибка, выполнение операции невозможно. ' . xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
	} else {
	  // вывести результат
	  alert( xhr.responseText ); // responseText -- текст ответа.
	  collectNewData (form);
	  setTableValues(currentTableRow);
	}

}

/*теперь соберем новые данные, чтоб положить их в таблицу*/
function collectNewData (form) {
	form = document.forms.updateform;
	console.log(form);
	productData.Id = form.getElementsByTagName('input')[1].value;
	productData.name = form.getElementsByTagName('input')[2].value;
	productData.description = form.getElementsByTagName('textarea')[0].value;
	
	var selectedCatIndex = form.getElementsByTagName("select")[0].options.selectedIndex; //получаем индекс выбранной категории
	console.log('selectedCatIndex: ' + selectedCatIndex);
	productData.categoryId = form.getElementsByTagName("select")[0].options[selectedCatIndex].value; //устанавливаем значение categoryId в соответствии с выбранным option



	productData.сost = form.getElementsByTagName('input')[3].value;
	console.log(productData);
}