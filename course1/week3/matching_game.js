var total_faces=5,
	left_side = document.getElementById("leftSideDiv"),
	right_side = document.getElementById("rightSideDiv"),
	time_taken = document.getElementById("time_taken"),
	the_body = document.getElementsByTagName("body")[0],
	timestamp;

function addEventListeners() {
	left_side.lastChild.onclick = function nextLevel(event) {
									event.stopPropagation();
									if(timestamp) {
										var difference = (Math.floor(Date.now()) - timestamp)/1000,
											total_time_taken = Math.floor(difference),
											test = document.createTextNode("It took you " + total_time_taken + " seconds to find missing face");
										if(time_taken.childNodes.length) { time_taken.removeChild(time_taken.lastChild); }
										time_taken.appendChild(test);
									}
									generateFaces();
								};
	the_body.onclick = function gameOver() {
						alert("Oops! Wrong guess. Your game has ended.");
						left_side.lastChild.onclick = null;
						the_body.onclick = null;
						if(confirm("Would your like to restart the game?")) {
							resetGame();
						}
					};
}

function fillRightDiv() {
	// Remove the child nodes on right div so we can clone a new one.
	if(right_side.childNodes.length > 0) {
		right_side.removeChild(right_side.lastChild);
	}
	var cloned_left_side = left_side.cloneNode(true);

	cloned_left_side.removeChild(cloned_left_side.lastChild);
	right_side.appendChild(cloned_left_side);
	timestamp = Math.floor(Date.now());
}

function generateFaces() {
	// This will automatically add 5 more faces since first ones weren't cleared.
	for(var i=1; i<=total_faces; i++) {
		var image = document.createElement("img"),
			top_position = Math.floor(Math.random()*400),
			left_position = Math.floor(Math.random()*400);

		image.src = "smile.png",
		image.style.top = top_position+"px";
		image.style.left = left_position + "px";

		left_side.appendChild(image);
	}

	fillRightDiv();
	addEventListeners();
}

function resetGame() {
	while(left_side.childNodes.length > 0) {
		left_side.removeChild(left_side.lastChild);
	}
	right_side.removeChild(right_side.lastChild);

	generateFaces();
}