var editWindow = document.getElementById('editwindow');
var closeButton = document.getElementById('closebutton');

function callEditWindow(event) {
	event = event || window.event;
  	var target = event.currentTarget; //находим элемент, по которому кликнули
	console.log(target);
  	var parentRow = target.parentElement;
  	console.log(parentRow);
  	getTableValues (parentRow);
	//console.log(editWindow);
	editWindow.classList.remove('hidden'); //показываем окно редактирования
}

closeButton.onclick = function () {
	editWindow.classList.add('hidden');
}

function getTableValues (row){
	var productId = row.cells[0].innerHTML;
	console.log('productId: ' + productId);
	var productName = row.cells[1].innerHTML;
	console.log('productName: ' + productName);
	var productDescription = row.cells[2].innerHTML;
	console.log('productDescription: ' + productDescription);
	var productCategory = row.cells[3].innerHTML;
	console.log('productCategory: ' + productCategory);
	var productCost = row.cells[4].innerHTML;
	console.log('productCost: ' + productCost);
}