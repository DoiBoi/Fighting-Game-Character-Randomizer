const char = [
	"Akiha",
	"Aoko Aozaki",
	"Arcueid",
	"Ciel",
	"Dead Apostle Noel",
	"Hisui & Kohaku",
	"Hisui",
	"Kohaku",
	"Kouma",
	"Mario Gallo Bestino",
	"Mash Kyrielight",
	"Miyako",
	"Neco-Arc",
	"Noel",
	"Powered Ciel",
	"Red Arcueid",
	"Roa",
	"Saber",
	"The Count of Monte Cristo",
	"Tohno",
	"Vlov",
	"Ushiwakamaru"
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function mbtl() {
	document.getElementById("mbtl").innerHTML = "";
	var n2 = randomizer(22)
	var img = document.createElement("img");
	img.src = "/images/mbtl/" + char[n2] + ".png";
	var src = document.getElementById("mbtl");
	src.appendChild(img);
}
