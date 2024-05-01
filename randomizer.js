function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function display(chars, game, filetype) {
	document.getElementById(game).innerHTML = "";
	var a = 0;
	chars -= 1;

	if (chars = 1){
		var n2 = randomizer(char.len)
		var img = document.createElement("img");
		img.src = "/images/" + game + "/" + char[n2] + "/" + filetype;
		var src = document.getElementById(game);
		src.appendChild(img);
	} else if (chars <= 2) {
		while (a <= chars) {
			var n2 = randomizer(char.len)
			var img = document.createElement("img");
			img.src = "/images/" + game + "/" + char[n2] + "/" + filetype;
			var src = document.getElementById(game);
			src.appendChild(img);
			a++;
		}
	}
}