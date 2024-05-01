const char = [
	"Akuma",
	"Amingo",
	"Ankaris",
	"B.B. Hood",
	"Blackheart",
	"Cable",
	"Cammy",
	"Captain America",
	"Captain Commando",
	"Charlie",
	"Chun Li",
	"Colossus",
	"Cyclops",
	"Dan",
	"Dhalsim",
	"Doctor Doom",
	"Felicia",
	"Gambit",
	"Guile",
	"Hayato",
	"Hulk",
	"Iceman",
	"Iron Man",
	"Jill",
	"Jin",
	"Juggernaut",
	"Ken",
	"M. Bison",
	"Magneto",
	"Marrow",
	"Mega Man",
	"Morrigan",
	"Omega Red",
	"Psylocke",
	"Rogue",
	"Roll",
	"Ruby Heart",
	"Ryu",
	"Sabretooth",
	"Sakura",
	"Sentinel",
	"Servbot",
	"Shuma-Gorath",
	"Silver Samurai",
	"SonSon",
	"Spiderman",
	"Spiral",
	"Storm",
	"Strider",
	"Thanos",
	"Tron Bonne",
	"Venom",
	"War Machine",
	"Wolverine - Bone",
	"Wolverine - Claw",
	"Zangief",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function mvc2() {
	document.getElementById("mvc2").innerHTML = "";
	var a = 0;
	while (a <= 2) {
		var n2 = randomizer(56)
		var img = document.createElement("img");
		img.src = "/images/mvc2/" + char[n2] + ".png";
		var src = document.getElementById("mvc2");
		src.appendChild(img);
		a++;
	}
}