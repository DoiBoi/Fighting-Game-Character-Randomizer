const char = [
	"Berserker",
	"Crusader",
	"Dragon Knight",
	"Enchantress",
	"Ghostblade",
	"Grappler",
	"Hitman",
	"Inquisitor",
	"Kunoichi",
	"Launcher",
	"Lost Warrior",
	"Ranger",
	"Striker",
	"Swift Master",
	"Troubleshooter",
	"Vanguard",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function dnfd() {
	document.getElementById("dnfd").innerHTML = "";
	var n2 = randomizer(16)
	var img = document.createElement("img");
	img.src = "/images/dnfd/" + char[n2] + ".png";
	var src = document.getElementById("dnfd");
	src.appendChild(img);
}