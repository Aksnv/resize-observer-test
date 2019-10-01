var container = document.querySelector(".container");
var wrapper = document.querySelector(".wrapper");
var wrapperWidth = wrapper.offsetWidth;

document.addEventListener("DOMContentLoaded", function() {
	if (wrapperWidth < 1024) {
		wrapper.classList.remove("md");
		wrapper.classList.add("sm");
	} else if ((wrapperWidth >= 1024) && (wrapperWidth < 1280)) {
		wrapper.classList.remove("sm");
		wrapper.classList.add("md");
	}
});

window.addEventListener("resize", function() {
	wrapperWidth = wrapper.offsetWidth;
	if (wrapperWidth < 1024) {
		wrapper.classList.remove("md");
		wrapper.classList.add("sm");
	} else if ((wrapperWidth >= 1024) && (wrapperWidth < 1280)) {
		wrapper.classList.remove("sm");
		wrapper.classList.add("md");
	}
});
