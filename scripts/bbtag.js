const char = [
	"BB - Ragna the Bloodedge",
	"BB - Jin Kisaragi",
	"BB - Noel Vermillion",
	"BB - Rachel Alucard",
	"BB - Iron Tager",
	"BB - Hakumen",
	"BB - Nu-13",
	"BB - Hazama",
	"BB - Makoto Nanaya",
	"BB - Platinum the Trinity",
	"BB - Izayoi",
	"BB - Azrael",
	"BB - Celica A. Mercury",
	"BB - Nine the Phantom",
	"BB - Naoto Kurogane",
	"BB - Susano'o",
	"BB - Es",
	"BB - Mai Natsume",
	"BB - Jubei",
	"P4A - Yu Narukami",
	"P4A - Yosuke Hanamura",
	"P4A - Chie Satonaka",
	"P4A - Yukiko Amagi",
	"P4A - Kanji Tatsumi",
	"P4A - Teddie",
	"P4A - Naoto Shirogane",
	"P4A - Mitsuru Kirijo",
	"P4A - Akihiko Sanada",
	"P4A - Aegis",
	"P4A - Elizabeth",
	"P4A - Labrys",
	"P4A - Tohru Adachi",
	"UNI - Hyde",
	"UNI - Linne",
	"UNI - Waldstein",
	"UNI - Carmine",
	"UNI - Orie",
	"UNI - Gordeau",
	"UNI - Merkava",
	"UNI - Vatista",
	"UNI - Seth",
	"UNI - Yuzuriha",
	"UNI - Hilda",
	"UNI - Mika",
	"RWBY - Ruby Rose",
	"RWBY - Weiss Schnee",
	"RWBY - Blake Belladonna",
	"RWBY - Yang Xiao Long",
	"RWBY - Neo Politan",
	"AH - Heart Aino",
	"SK - Yumi",
	"AB - Akatsuki",
	"AB - Blitztank",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function bbtag() {
	document.getElementById("bbtag").innerHTML = "";
	var a = 0;
	while (a <= 1) {
		var n2 = randomizer(53)
		var img = document.createElement("img");
		img.src = "/images/bbtag/" + char[n2] + ".png";
		var src = document.getElementById("bbtag");
		src.appendChild(img);
		a++;
	}
}