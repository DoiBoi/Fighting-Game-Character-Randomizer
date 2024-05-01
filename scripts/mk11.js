const char = [
	"Baraka",
	"Cassie Cage",
	"Cetrion",
	"D'Vorah",
	"Erron Black",
	"Frost",
	"Fujin",
	"Gera",
	"Jacqui Briggs",
	"Jade",
	"Jax Briggs",
	"Johnny Cage",
	"Kabal",
	"Kano",
	"Kitana",
	"Kollector",
	"Kotal Kahn",
	"Kung Lao",
	"Liu Kang",
	"Mileena",
	"Nightwolf",
	"Noob Sailbot",
	"Raiden",
	"Rain",
	"Rambo",
	"Robocop",
	"Scorpion",
	"Shang Tsung",
	"Shao Kahn",
	"Sheeva",
	"Sindel",
	"Skarlet",
	"Sonya Blade",
	"Spawn",
	"Sub Zero",
	"Terminator",
	"The Joker",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function mk11() {
	document.getElementById("mk11").innerHTML = "";
	var n2 = randomizer(37)
	var img = document.createElement("img");
	img.src = "/images/mk11/" + char[n2] + ".png";
	var src = document.getElementById("mk11");
	src.appendChild(img);
}

