const char = [
	"Akiha",
	"Aoko",
	"Arcueid",
	"Ciel",
	"Hime",
	"Hisui",
	"Kohaku",
	"Koha-Mech",
	"Kouma",
	"Len",
	"Maids",
	"Mech Hisui",
	"Miyako",
	"NAC",
	"Nanaya",
	"Neco-Arc",
	"Neco-Mech",
	"Nero",
	"Powered Ciel",
	"Red Arcueid",
	"Riesbyfe",
	"Roa",
	"Ryougi",
	"Satsuki",
	"Seifuku",
	"Sion",
	"Tohno",
	"V. Akiha",
	"V. Sion",
	"Warachia",
	"White Len",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function mbaacc() {
	document.getElementById("mbaacc").innerHTML = "";
	var n2 = randomizer(31)
	var img = document.createElement("img");
	img.src = "/images/mbaacc/" + char[n2] + ".png";
	var src = document.getElementById("mbaacc");
	src.appendChild(img);
}
