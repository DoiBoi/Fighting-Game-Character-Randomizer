const char = [
	"Andy Bogard",
	"Angel",
	"Athena Asamiya",
	"Bao",
	"Benimaru Nikaido",
	"Billy Kane",
	"Blue Mary",
	"Chang Koehan",
	"Chin Gentsai",
	"Choi Bounge",
	"Chris",
	"Clark Still",
	"Clone Zero",
	"EX Robert Garcia",
	"EX Shermie",
	"EX Sie Kensou",
	"EX Takuma",
	"EX Yashiro Nanakase",
	"Foxy",
	"Geese Howard",
	"Geonitz",
	"Goro Daimon",
	"Heidern",
	"Hinako Shijou",
	"Igniz",
	"Iori Yagami",
	"Jhun Hoon",
	"Joe Higashi",
	"K'",
	"Kasumi Todoh",
	"Kim Kaphwan",
	"King",
	"Krizalid",
	"Kula Diamond",
	"Kusanagi",
	"Kyo Kusanagi",
	"Kyo-1",
	"Kyo-2",
	"Leona Heidern",
	"Li Xiangfei",
	"Lin",
	"Mai Shiranui",
	"Mature",
	"Maxima",
	"May Leona",
	"Nameless",
	"Nightmare Geese",
	"Omega Rugal",
	"Ralf Jones",
	"Ramon",
	"Robert Garcia",
	"Ryo Sakazaki",
	"Ryuji Yamazaki",
	"Seth",
	"Shermie",
	"Shingo Yabuki",
	"Sie Kensou",
	"Takuma Sakazaki",
	"Terry Bogard",
	"Vanessa",
	"Vice",
	"Whip",
	"Yashiro Nanakase",
	"Yuri Sakazaki",
	"Zero",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function kof02um() {
	document.getElementById("kof02um").innerHTML = "";
	var a = 0;
	while (a <= 2) {
		var n2 = randomizer(65)
		var img = document.createElement("img");
		img.src = "/images/kof02um/" + char[n2] + ".png";
		var src = document.getElementById("kof02um");
		src.appendChild(img);
		a++;
	}
}