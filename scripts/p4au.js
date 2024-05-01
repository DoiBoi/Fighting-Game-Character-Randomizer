const char = [
	"Aigis",
	"Akihiko Sanada",
	"Chie Satonaka",
	"Elizabeth",
	"Junpei Iori",
	"Kanji Tatsumi",
	"Ken Amada",
	"Labrys",
	"Margaret",
	"Marie",
	"Minazuki",
	"Mitsuru Kirijo",
	"Naoto Shirogane",
	"Rise Kujikawa",
	"Shadow Labrys",
	"Sho",
	"Teddie",
	"Tohru Adachi",
	"Yosuke Hanamura",
	"Yu Narukami",
	"Yukari Takeba",
	"Yukiko Amagi",
]

const webs = [
	"Aigis",
	"Akihiko_Sanada",
	"Chie_Satonaka",
	"Elizabeth",
	"Junpei_Iori",
	"Kanji_Tatsumi",
	"Ken_Amada",
	"Labrys",
	"Margaret",
	"Marie",
	"Minazuki",
	"Mitsuru_Kirijo",
	"Naoto_Shirogane",
	"Rise_Kujikawa",
	"Shadow_Labrys",
	"Sho",
	"Teddie",
	"Tohru_Adachi",
	"Yosuke_Hanamura",
	"Yu_Narukami",
	"Yukari_Takeba",
	"Yukiko_Amagi",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function p4au() {
	document.getElementById("p4au").innerHTML = "";
	var n2 = randomizer(22)
	var img = document.createElement("img");
	img.src = "/images/p4au/" + char[n2] + ".png";
	var src = document.getElementById("p4au");
	var link = document.createElement("a");
	link.href = "https://www.dustloop.com/w/P4U2R/" + webs[n2];
	link.appendChild(img)
	src.appendChild(link);
}