/*window.onload = function(){
	
	 wall = document.getElementById("boundary1");
	
	wall.onmouseover = function(){
		wall.classList.add("youlose");
	};
}; */
window.onload = function(){

	 walls = document.getElementById("maze").querySelectorAll(".boundary");

	for (let i=0;i<walls.length;i++){
		walls[i].addEventListener("mouseover", function(){
		for (i=0;i<walls.length;i++){
				walls[i].classList.add("youlose")
			}
					
		});
	}
	 end= document.getElementById("end");
 	 end.addEventListener("mouseover", function(){
		alert("You win!");
	});
 	}