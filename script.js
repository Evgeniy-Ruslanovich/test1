var editWindow = document.getElementById('editwindow');
var closeButton = document.getElementById('closebutton');

function callEditWindow() {
	//alert("callWindow");
	//var editWindow = document.getElementById('editwindow');
	console.log(editWindow);
	//editWindow.classList.add('post');
	editWindow.classList.remove('hidden');
}

closeButton.onclick = function () {
	editWindow.classList.add('hidden');
}