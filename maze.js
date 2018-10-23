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
			document.getElementById("status").innerHTML = "Oooops: You lose";			
		});
	}
	 end= document.getElementById("end");

 	 end.addEventListener("mouseover", function(){
		if(lose==false){
			document.getElementById("status").textContent = "CONGRATULATIONS: You Win!";
		}
	});

 	  start= document.getElementById("start");

 	  start.addEventListener("click", function(){
 	  	lose= false;
 	  	document.getElementById("status").innerHTML = "Move your mouse over the &quot;S&quot; to begin."; //
		for(let i=0;i< walls.length;i++){
				walls[i].classList.remove("youlose");	
			}
		
	});

 	maze= maze = document.getElementById("maze");
 	win=false;

    maze.onmouseleave = function(){
		if (win == false){
			document.getElementById("status").textContent = "Oooops: You lose";
			for (i=0;i<walls.length;i++){
				walls[i].classList.add("youlose")
			}
			lose = true;
		}
	}
 }
 	