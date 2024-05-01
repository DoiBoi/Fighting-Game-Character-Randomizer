const char = [
	"Akuma",
	"Alex",
	"Chun Li",
	"Dudley",
	"Elena",
	"Gill",
	"Hugo",
	"Ibuki",
	"Ken",
	"Makoto",
	"Necro",
	"Oro",
	"Q",
	"Remy",
	"Ryu",
	"Sean",
	"Twelve",
	"Urien",
	"Yang",
	"Yun",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function sf3s() {
	document.getElementById("sf3s").innerHTML = "";
	var n2 = randomizer(17)
	var img = document.createElement("img");
	img.src = "/images/sf3s/" + char[n2] + ".gif";
	var src = document.getElementById("sf3s");
	src.appendChild(img);
}