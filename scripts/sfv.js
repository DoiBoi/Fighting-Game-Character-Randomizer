const char = [
	"Abigail",
	"Akira",
	"Akuma",
	"Alex",
	"Balrog",
	"Birdie",
	"Blanka",
	"Cammy",
	"Chun-Li",
	"Charlie",
	"Cody",
	"Dan",
	"Dhalsim",
	"E. Honda",
	"Ed",
	"Eleven",
	"F.A.N.G",
	"Falke",
	"G",
	"Gill",
	"Guile",
	"Ibuki",
	"Juri",
	"Kage",
	"Karin",
	"Ken",
	"Kolin",
	"Laura",
	"Luke",
	"Lucia",
	"M. Bison",
	"Menat",
	"Necalli",
	"Oro",
	"Poison",
	"R. Mika",
	"Rashid",
	"Rose",
	"Ryu",
	"Sagat",
	"Sakura",
	"Seth",
	"Urien",
	"Vega",
	"Zangief",
	"Zeku",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function sfv() {
	document.getElementById("sfv").innerHTML = "";
	var n2 = randomizer(46)
	var img = document.createElement("img");
	img.src = "/images/sfv/" + char[n2] + ".png";
	var src = document.getElementById("sfv");
	src.appendChild(img);
}
