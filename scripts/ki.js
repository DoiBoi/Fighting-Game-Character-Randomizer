const char = [
	"Aganos",
	"Aria",
	"Cinder",
	"Eagle",
	"Eyedol",
	"Fulgore",
	"Gargos",
	"Glacius",
	"Hisako",
	"Jago",
	"Kanra",
	"Kilgore",
	"Kimwu",
	"Maya",
	"Mira",
	"Omen",
	"Orchid",
	"Raam",
	"Rash",
	"Riptor",
	"Sabrewulf",
	"Sadria",
	"Shadow Jago",
	"Shin Hisako",
	"Spinal",
	"Thunder",
	"TJ Combo",
	"Tusk",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function ki() {
	document.getElementById("ki").innerHTML = "";
	var n2 = randomizer(28)
	var img = document.createElement("img");
	img.src = "/images/ki/" + char[n2] + ".png";
	var src = document.getElementById("ki");
	src.appendChild(img);
}