function show_pattern() {
	var top_position = 25,
		left_position = 25,
		width = 300,
		height = 300,
		interval = 10,
		color_list = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
		the_body=document.getElementById("theBody"),
		the_div, random_color_index;

	while(width > 50) {
		the_div = document.createElement("div");
		random_color_index = Math.floor(Math.random() * 7);
		the_div.style.top = top_position + "px";
		the_div.style.left = left_position + "px";
		the_div.style.width = width + "px";
		the_div.style.height = height + "px";
		the_div.style.background = color_list[random_color_index];
		theBody.appendChild(the_div);
		top_position += interval;
		left_position += interval;
		width -= interval*2;
		height -= interval*2;
	}
	;
}