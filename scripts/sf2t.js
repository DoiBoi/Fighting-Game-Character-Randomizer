const char = [
	"Akuma",
	"Balrog",
	"Blanka",
	"Cammy",
	"Chun Li",
	"Dee Jay",
	"Dhalsim",
	"E. Honda",
	"Fei Long",
	"Guile",
	"Ken",
	"M. Bison",
	"Ryu",
	"Sagat",
	"T. Hawk",
	"Vega",
	"Zangief",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function sf2t() {
	document.getElementById("sf2t").innerHTML = "";
	var n2 = randomizer(17)
	var img = document.createElement("img");
	img.src = "/images/sf2t/" + char[n2] + ".png";
	var src = document.getElementById("sf2t");
	src.appendChild(img);
}