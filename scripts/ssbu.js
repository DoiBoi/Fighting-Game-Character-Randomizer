const char = [
	"Banjo & Kazooie",
	"Bayonetta",
	"Bowser",
	"Bowser Jr.",
	"Byleth",
	"Captain Falcon",
	"Chrom",
	"Cloud",
	"Corrin",
	"Daisy",
	"Dark Pit",
	"Dark Samus",
	"Diddy Kong",
	"Donkey Kong",
	"Dr. Mario",
	"Duck Hunt",
	"Falco",
	"Fox",
	"Ganondorf",
	"Greninja",
	"Hero",
	"Ice Climbers",
	"Ike",
	"Incineroar",
	"Inkling",
	"Isabelle",
	"Jigglypuff",
	"Joker",
	"Kazuya Mishima",
	"Ken Masters",
	"King Dedede",
	"King K. Rool",
	"Kirby",
	"Link",
	"Little Mac",
	"Lucario",
	"Lucas",
	"Lucina",
	"Luigi",
	"Mario",
	"Marth",
	"Mega Man",
	"Meta Knight",
	"Mewtwo",
	"Mii Brawler",
	"Mii Gunner",
	"Mii Swordfighter",
	"Min Min",
	"Mr. Game & Watch",
	"Ness",
	"Olimar",
	"Pac-Man",
	"Palutena",
	"Peach",
	"Pichu",
	"Pikachu",
	"Piranha Plant",
	"Pit",
	"Pokemon Trainer",
	"Pyra & Mythra",
	"Richter",
	"Ridley",
	"ROB",
	"Robin",
	"Rosalina",
	"Roy",
	"Ryu",
	"Samus",
	"Sephiroth",
	"Sheik",
	"Shulk",
	"Simon",
	"Snake",
	"Sonic",
	"Steve",
	"Terry Bogard",
	"Toon Link",
	"Villager",
	"Wario",
	"Wii Fit Trainer",
	"Wolf",
	"Yoshi",
	"Young Link",
	"Zelda",
	"Zero Suit Samus",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function ssbu1() {
	document.getElementById("ssbu").innerHTML = "";
	var n2 = randomizer(85)
	var img = document.createElement("img");
	img.src = "/images/ssbu/" + char[n2] + ".png";
	var src = document.getElementById("ssbu");
	src.appendChild(img);
}

function ssbu2() {
	document.getElementById("ssbu").innerHTML = "";
	var a = 0;
	while (a <= 2) {
		var n2 = randomizer(25)
		var img = document.createElement("img");
		img.src = "/images/ssbu/" + char[n2] + ".png";
		var src = document.getElementById("ssbu");
		src.appendChild(img);
		a++;
	}
}

function ssbu3() {
	document.getElementById("ssbu").innerHTML = "";
	var a = 0;
	while (a <= 4) {
		var n2 = randomizer(25)
		var img = document.createElement("img");
		img.src = "/images/ssbu/" + char[n2] + ".png";
		var src = document.getElementById("ssbu");
		src.appendChild(img);
		a++;
	}
}