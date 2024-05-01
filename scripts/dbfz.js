const char = [
	"Android 16",
	"Android 17",
	"Android 18",
	"Android 21 (Lab Coat)",
	"Android 21",
	"Bardock",
	"Beerus",
	"Broly",
	"Broly (DBS)",
	"Captain Ginyu",
	"Cell",
	"Cooler",
	"Frieza",
	"Gogeta (SS4)",
	"Gogeta (SSGSS)",
	"Gohan (Adult)",
	"Gohan (Teen)",
	"Goku",
	"Goku (GT)",
	"Goku (SSGSS)",
	"Goku (Super Saiyan)",
	"Goku (Ultra Instinct)",
	"Goku Black",
	"Gotenks",
	"Hit",
	"Janemba",
	"Jiren",
	"Kefla",
	"Kid Buu",
	"Krillin",
	"Majin Buu",
	"Master Roshi",
	"Nappa",
	"Piccolo",
	"Super Baby 2",
	"Tien Shinhan",
	"Trunks",
	"Vegeta",
	"Vegeta (SSGSS)",
	"Vegeta (Super Saiyan)",
	"Vegito (SSGSS)",
	"Videl",
	"Yamcha",
	"Zamasu (Fused)",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function dbfz() {
	document.getElementById("dbfz").innerHTML = "";
	var a = 0;
	while (a <= 2) {
		var n2 = randomizer(44)
		var img = document.createElement("img");
		img.src = "/images/dbfz/" + char[n2] + ".png";
		var src = document.getElementById("dbfz");
		src.appendChild(img);
		a++;
	}
}
