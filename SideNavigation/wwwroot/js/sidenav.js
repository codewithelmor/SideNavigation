$(document).ready(() => {
	// SideNav Button Initialization
	$(".button-collapse").sideNav2();
	$(".button-collapse").click();
	// SideNav Scrollbar Initialization
	var sideNavScrollbar = document.querySelector('.custom-scrollbar');
	var ps = new PerfectScrollbar(sideNavScrollbar);
});