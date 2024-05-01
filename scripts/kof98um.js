const char = [
	"Andy Bogard",
	"Athena Asamiya",
	"Benimaru Nikaido",
	"Billy Kane",
	"Blue Mary",
	"Brian Battler",
	"Chang Koehan",
	"Chin Gentsai",
	"Chizuru Kagura",
	"Choi Bounge",
	"Chris",
	"Clark Still",
	"Eiji Kisaragi",
	"EX Andy Bogard",
	"EX Billy Kane",
	"EX Blue Mary",
	"EX Geese Howard",
	"EX Joe Higashi",
	"EX King",
	"EX Kyo Kusanagi",
	"EX Mai Shiranui",
	"EX Robert Garcia",
	"EX Ryo Sakazaki",
	"EX Terry Bogard",
	"EX Yuri Sakazaki",
	"Geese Howard",
	"Goro Daimon",
	"Heavy D!",
	"Heidern",
	"Iori Yagami",
	"Joe Higashi",
	"Kasumi Todoh",
	"Kim Kaphwan",
	"King",
	"Kyo Kusanagi",
	"Leona Heidern",
	"Lucky Glauber",
	"Mai Shiranui",
	"Mature",
	"Mr. Big",
	"Orochi Chris",
	"Orochi Shermie",
	"Orochi Yashiro Nanakase",
	"Ralf Jones",
	"Robert Garcia",
	"Rugal Bernstein",
	"Ryo Sakazaki",
	"Ryuji Yamazaki",
	"Saisyu Kusanagi",
	"Shermie",
	"Shingo Yabuki",
	"Sie Kensou",
	"Takuma Sakazaki",
	"Terry Bogard",
	"Vice",
	"Wolfgang Krauser",
	"Yashiro Nanakase",
	"Yuri Sakazaki",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function kof98um() {
	document.getElementById("kof98um").innerHTML = "";
	var a = 0;
	while (a <= 2) {
		var n2 = randomizer(59)
		var img = document.createElement("img");
		img.src = "/images/kof98um/" + char[n2] + ".png";
		var src = document.getElementById("kof98um");
		src.appendChild(img);
		a++;
	}
}