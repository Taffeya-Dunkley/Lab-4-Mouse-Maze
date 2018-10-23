window.onload = function(){
	
	 wall = document.getElementById("boundary1");
	
	wall.onmouseover = function(){
		wall.classList.add("youlose");
	};
};