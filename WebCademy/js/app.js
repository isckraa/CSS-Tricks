const menu = document.querySelector('.menu-filter');
const sidebar = document.querySelector('.sidebar');

menu.addEventListener( 'click', function(e) {
	if( menu.classList.contains('active') && sidebar.classList.contains('sidebar--mobile')) {
		menu.classList.remove('active');
		sidebar.classList.remove('sidebar--mobile');
	} else {
        menu.classList.add('active');
		sidebar.classList.add('sidebar--mobile');
	}
	
	var childrenArray = Array.from(menu.children);
	
	childrenArray.forEach( children => {
		children.classList.remove('no-animation');
	})
});