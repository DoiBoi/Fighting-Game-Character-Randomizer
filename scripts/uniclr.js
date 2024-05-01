const char = [
	"Hyde",
	"Linne",
	"Waldstein",
	"Carmine",
	"Orie",
	"Gordeau",
	"Merkava",
	"Vatista",
	"Seth",
	"Yuzuriha",
	"Hilda",
	"Chaos",
	"Nanase",
	"Byakuya",
	"Phonon",
	"Mika",
	"Wagner",
	"Enkidu",
	"Londrekia",
	"Eltnum",
	"Akatsuki",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function uniclr() {
	document.getElementById("uniclr").innerHTML = "";
	var n2 = randomizer(21)
	var img = document.createElement("img");
	img.src = "/images/uniclr/" + char[n2] + ".png";
	var src = document.getElementById("uniclr");
	src.appendChild(img);
}