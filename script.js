var editWindow = document.getElementById('editwindow');
var closeButton = document.getElementById('closebutton');
var deleteButton = document.getElementById('deleteproduct');
var productData = {}; //в этом объекте хранятся данные товара, с которым сейчас идет работа, и которые могут быть перезаписаны и использованы много раз
var currentTableRow; //нужно знать, с какой строкой таблицы мы сейчас работаетм, причем в глобальной випдимости, так как к ней обращаются фнукции из разных мест
var form = document.forms.updateform;

/*Функция вызывает окно редактирования товара, заполняет его данными из таблицы, и устанавливает currentTableRow;*/
function callEditWindow(event) {
	event = event || window.event;
  	var target = event.currentTarget; //находим элемент, по которому кликнули
	//console.log(target);
  	currentTableRow = target.parentElement; //находим родительский элемент - строку таблицы. Она нам еще пригодится
  	//console.log(currentTableRow);
  	getTableValues (currentTableRow); //вызываем фукнцию, которая достанет данные из таблицы в объект
	//console.log(editWindow);
	setFormValues (editWindow);
	form.setAttribute('action', 'ajax_update.php'); //изначально и так стоит, но вдруг перед этим вызывали создание товара, тогда action изменился
    var ajaxUpdateButton = document.getElementById('sendajaxupdate'); //навешиваем действие на кнопку(т.к. действие может быть и другое
    ajaxUpdateButton.onclick = updateAjax;
	editWindow.classList.remove('hidden'); //показываем окно редактирования
    deleteButton.classList.remove('hidden');
}

/*Закрывает окно редактирования при щелчке на крестике*/
closeButton.onclick = function () {
	editWindow.classList.add('hidden');
};

/* ПЕРЕМЕЩЕНИЕ ДАННЫХ
    Далее несколько функций, которые перекладывают значения туда-сюда:
    из таблицы в объект getTableValue
    из объекта в форму setFormValues
    из формы в объект collectNewData
    из объекта в таблицу
    */
	/*Вычитываем данные из таблицы, и складываем в объект productData*/
	function getTableValues (row){
		productData.Id = row.cells[0].innerHTML;
			//console.log('productId: ' + productData.Id);
		productData.name = row.cells[1].innerHTML;
			//console.log('productName: ' + productData.name);
		productData.description = row.cells[2].innerHTML;
			//console.log('productDescription: ' + productData.description);
		productData.categoryId = row.cells[3].innerHTML;
			//console.log('productCategory: ' + productData.categoryId);
		productData.cost = row.cells[4].innerHTML;
			//console.log('productCost: ' + productData.cost);
	}

	/*Функция добавляет обновленные данные в таблицу*/
	function setTableValues (row){
		row.cells[0].innerHTML = productData.Id;
			//console.log('productId: ' + productData.Id);
		row.cells[1].innerHTML = productData.name;
			//console.log('productName: ' + productData.name);
		row.cells[2].innerHTML = productData.description;
			//console.log('productDescription: ' + productData.description);
		row.cells[3].innerHTML = productData.categoryId;
			//console.log('productCategory: ' + productData.categoryId);
		row.cells[4].innerHTML = productData.cost;
			//console.log('productCost: ' + productData.cost);
	}

	/*Эта функция заполняет форму теми исходными данными, которые сейчас есть в таблице. Предварительно они были сложены в объект, а теперь из объекта кладутся в форму*/
	function setFormValues (form) {
		form.getElementsByTagName('input')[0].value = productData.Id;
		form.getElementsByTagName('input')[1].value = productData.Id;
		//form.getElementsByTagName('input')[2].setAttribute('disabled', 'disabled');

		form.getElementsByTagName('input')[2].value = productData.name;
		//console.log('productCost все таки: ' + productData.cost);
		form.getElementsByTagName('input')[3].value = productData.cost;
		form.getElementsByTagName('textarea')[0].value = productData.description;
        console.log('productDescription: ' + productData.description);
		var categoeyCount = form.getElementsByTagName('option').length;
		//console.log('categoryCount: ' + categoeyCount);
		for (var i=0; i<categoeyCount ;i++) {
			if (form.getElementsByTagName('option')[i].value == productData.categoryId) {

				 form.getElementsByTagName('option')[i].setAttribute('selected', 'selected');
				 
			} else {
				form.getElementsByTagName('option')[i].removeAttribute('selected'); //нужно снимать атрибут, иначе остается выбранной та категория, которая идет выше в списке, даже если ты уже перешел к карточке другого товара
			}
		}
		//console.log(formData);
	}
	/*После успешной отправки данных на сервер, нужно обновить внешний вид таблицы, чтобы он соответствовал актуально му состояниб БД
	 соберем новые данные из формы в наш объект productData*/
	function getFormValues (form) {
		//form = document.forms.updateform;
		//console.log(form);
		productData.Id = form.getElementsByTagName('input')[1].value;
		productData.name = form.getElementsByTagName('input')[2].value;
		productData.description = form.getElementsByTagName('textarea')[0].value;
		
		var selectedCatIndex = form.getElementsByTagName("select")[0].options.selectedIndex; //получаем индекс выбранной категории
		//console.log('selectedCatIndex: ' + selectedCatIndex);
		productData.categoryId = form.getElementsByTagName("select")[0].options[selectedCatIndex].value; //устанавливаем значение categoryId в соответствии с выбранным option

		productData.cost = form.getElementsByTagName('input')[3].value;
		//console.log(productData);
	}

/*КОНЕЦ блока перемещения данных*/


/*ajax*/
/*UPDATE*/

//	var ajaxUpdateButton = document.getElementById('sendajaxupdate');
//	ajaxUpdateButton.onclick = updateAjax;
	//function sendAjax (){ alert('button');}

	function updateAjax (){
        console.log(productData);
		var xhr = new XMLHttpRequest();
		xhr.open('post', 'ajax_update.php', false);
		//var form = document.forms.updateform; //получем ссылку на форму
		var formData = new FormData(form); //загружаем данные формы в объект. Не все браузеры поддерживают
		xhr.send(formData);
		if (xhr.status != 200) {
		  alert( 'Произошла ошибка, выполнение операции невозможно. ' . xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
		} else {
		  // если ответ сервера ОК, работаем дальше
		  alert( xhr.responseText ); // responseText -- текст ответа.

		  if (xhr.responseText == 'Обновление данных прошло успешно') {
			  getFormValues(form);
			  setTableValues(currentTableRow);
			}
		}
	}
/*END UPDATE*/


/*CREATE*/
	var createButton = document.getElementById('createbutton');
	createButton.onclick = prepairForm;
//createButton.onclick = addTableRow;

    function createAjax (){

        var xhr = new XMLHttpRequest();
        xhr.open('post', 'ajax_create.php', false);
        //var form = document.forms.updateform; //получем ссылку на форму
        var formData = new FormData(form); //загружаем данные формы в объект. Не все браузеры поддерживают
        xhr.send(formData);
        if (xhr.status != 200) {
            alert( 'Произошла ошибка, выполнение операции невозможно. ' . xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        } else {
            // если ответ сервера ОК, работаем дальше
            var response = JSON.parse(xhr.responseText); //сервер передает два параметра в виде джейсона - айдишник созданого товара, и текст с сообщением
            alert( response.message ); // responseText -- текст ответа.
            if (response.message == "Создан новый товар") {
                getFormValues(form);
                productData.Id = response.lastId;//получили из базы ID последнего добавленного товара
                //console.log(productData);
                addTableRow();
                editWindow.classList.add('hidden');//прячем окно, чтобы не было мысли. что можно сразу отредактировать товар. Вместо редактироваия добавится новый
                //setTableValues(currentTableRow);
                //надо бы обнулить окошко и закрыть его на фиг
            }
           // getFormValues(form);
            //console.log(productData);
        }
        //form.getElementsByTagName('textarea')[0].value = '';
    }

    /*функция открывает форму, очищает поля, и устанавливает action*/
	function prepairForm(){
        deleteButton.classList.add('hidden');
        //var form = document.forms.updateform;//получаем ссылку на форму
		//обнуляем все поля формы
        form.setAttribute('action', 'ajax_create.php'); //поставим другой адресный файл
        form.getElementsByTagName('input')[0].value = '';
        form.getElementsByTagName('input')[1].value = '';
        //form.getElementsByTagName('input')[2].setAttribute('disabled', 'disabled');

        form.getElementsByTagName('input')[2].value = '';
        form.getElementsByTagName('input')[3].value = '';
        form.getElementsByTagName('textarea')[0].value = '';
        var ajaxUpdateButton = document.getElementById('sendajaxupdate');//навешиваем действие на кнопку
        ajaxUpdateButton.onclick = createAjax;
        editWindow.classList.remove('hidden'); //показываем окно редактирования
	}
    /*добавляем новую строку в таблицу, с параметрами только что созданного товара. Параметры берутся из объекта productData*/
	function addTableRow() {
        var newRow = document.createElement('tr');//Создаем строку и наполняем ее ячейками
        newRow.innerHTML = '<th class=\'id\'></th><td class=\'name\'></td><td class=\'description\'></td><td class=\'category\'></td><td class=\'cost\'></td><td class =\"editbutton\" onclick=\"callEditWindow();\"><b>*</b></td>';
        document.getElementsByTagName('tbody')[0].appendChild(newRow);
        currentTableRow = newRow;
        setTableValues(currentTableRow);
    }
/*END CREATE*/

/*DELETE*/
deleteButton.onclick = deleteAjax;


function removeTableRow() {

    currentTableRow.parentNode.removeChild(currentTableRow);
    editWindow.classList.add('hidden');
    currentTableRow = null;//сбросим указатель таблицы, во избежание возможных ошибок, так как эта строка уже не существует
}
function deleteAjax (){
    form.setAttribute('action', 'ajax_delete.php');
    var xhr = new XMLHttpRequest();
    xhr.open('post', 'ajax_delete.php', false);
    //var form = document.forms.updateform; //получем ссылку на форму
    var formData = new FormData(form); //загружаем данные формы в объект. Не все браузеры поддерживают
    xhr.send(formData);
    if (xhr.status != 200) {
        alert( 'Произошла ошибка, выполнение операции невозможно. ' . xhr.status + ': ' + xhr.statusText );
    } else {
        // если ответ сервера ОК, работаем дальше
        alert( xhr.responseText ); // responseText -- текст ответа.
        if (xhr.responseText == "Удаление товара данных прошло успешно") {
            //getFormValues(form);
            //productData.Id = response.lastId;//получили из базы ID последнего добавленного товара
            //console.log(productData);
            //addTableRow();
            removeTableRow();
            editWindow.classList.add('hidden');//прячем окно, чтобы не было мысли. что можно сразу отредактировать товар. Вместо редактироваия добавится новый
            //setTableValues(currentTableRow);
            //надо бы обнулить окошко и закрыть его на фиг
        }
        // getFormValues(form);
        console.log(productData);
    }
    //form.getElementsByTagName('textarea')[0].value = '';
}

/*END DELETE*/