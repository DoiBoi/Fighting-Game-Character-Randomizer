const char = [
	"Blanka",
	"Cammy",
	"Chun-Li",
	"Dee Jay",
	"Dhalsim",
	"E. Honda",
	"Guile",
	"Jamie",
	"JP",
	"Juri",
	"Ken",
	"Kimberly",
	"Lily",
	"Luke",
	"Manon",
	"Marisa",
	"Ryu",
	"Zangief",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function sf6() {
	document.getElementById("sf6").innerHTML = "";
	var n2 = randomizer(18)
	var img = document.createElement("img");
	img.src = "/images/sf6/" + char[n2] + ".png";
	var src = document.getElementById("sf6");
	src.appendChild(img);
}