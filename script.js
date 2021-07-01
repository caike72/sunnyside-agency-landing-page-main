onresize = function () {
	if (window.innerWidth > 700) {
		document.querySelector(".menuitems").style.display = "block";
	} else {
		document.querySelector(".menuitems").style.display = "none";
	}
};

function responsiveMenu() {
	var menuSelect = document.querySelector(".menuitems");

	if (menuSelect.style.display === "block") {
		menuSelect.style.display = "none";
		document.querySelector(".icon").style.opacity = "1";
	} else {
		menuSelect.style.display = "block";
		document.querySelector(".icon").style.opacity = "0.5";
	}
}
