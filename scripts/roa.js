const char = [
	"Absa",
	"Clairen",
	"Elliana",
	"Etalus",
	"Forsburn",
	"Kragg",
	"Maypul",
	"Orcane",
	"Ori",
	"Ranno",
	"Shovel Knight",
	"Sylvanos",
	"Wrastor",
	"Zetterburn",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function roa() {
	document.getElementById("roa").innerHTML = "";
	var n2 = randomizer(14)
	var img = document.createElement("img");
	img.src = "/images/roa/" + char[n2] + ".png";
	var src = document.getElementById("roa");
	src.appendChild(img);
}