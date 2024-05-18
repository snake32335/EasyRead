function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

const toggleMenu = document.getElementById('toggle-menu');
const sideMenu = document.getElementById('side-menu');

toggleMenu.addEventListener('click', () => {
	if (sideMenu.style.left === '-250px') {
		sideMenu.style.left = '0';
	} else {
		sideMenu.style.left = '-250px';
	}
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
	output.innerHTML = this.value;
}
