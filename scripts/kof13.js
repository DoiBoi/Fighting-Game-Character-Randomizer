const char = [
	"Andy Bogard",
	"Ash Crimson",
	"Athena Asamiya",
	"Benimaru Nikaido",
	"Billy Kane",
	"Chin Gentsai",
	"Clark Still",
	"Duo Lon",
	"Elisabeth",
	"EX Iori Yagami",
	"EX Kyo Kusanagi",
	"Goro Daimon",
	"Hwa Jai",
	"Iori Yagami",
	"Joe Higashi",
	"K'",
	"Kim Kaphwan",
	"King",
	"Kula Diamond",
	"Kyo Kusanagi",
	"Leona Heidern",
	"Mai Shiranui",
	"Mature",
	"Maxima",
	"Mr. Karate",
	"Raiden",
	"Ralf Jones",
	"Robert Garcia",
	"Ryo Sakazaki",
	"Saiki",
	"Shen Woo",
	"Sie Kensou",
	"Takuma Sakazaki",
	"Terry Bogard",
	"Vice",
	"Yuri Sakazaki",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function kof13() {
	document.getElementById("kof13").innerHTML = "";
	var a = 0;
	while (a <= 2) {
		var n2 = randomizer(36)
		var img = document.createElement("img");
		img.src = "/images/kof13/" + char[n2] + ".png";
		var src = document.getElementById("kof13");
		src.appendChild(img);
		a++;
	}
}