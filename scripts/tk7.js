const char = [
	"Akuma",
	"Alisa",
	"Anna",
	"Armor King",
	"Asuka",
	"Bob",
	"Claudio",
	"Devil Jin",
	"Dragunov",
	"Eddy",
	"Eliza",
	"Fahkumram",
	"Feng",
	"Ganryu",
	"Geese Howard",
	"Gigas",
	"Heihachi",
	"Hwoarang",
	"Jack-7",
	"Jin",
	"Josie",
	"Julia",
	"Katarina",
	"Kazumi",
	"Kazuya",
	"King",
	"Kuma",
	"Kunimitsu",
	"Lars",
	"Law",
	"Lee",
	"Lei",
	"Leo",
	"Leroy",
	"Lidia",
	"Lili",
	"Lucky Chloe",
	"Marduk",
	"Miguel",
	"Negan",
	"Nina",
	"Noctis",
	"Panda",
	"Paul",
	"Raven",
	"Shaheen",
	"Steve",
	"Xiaoyu",
	"Yoshimitsu",
	"Zafina",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function tk7() {
	document.getElementById("tk7").innerHTML = "";
	var n2 = randomizer(51)
	var img = document.createElement("img");
	img.src = "/images/tk7/" + char[n2] + ".png";
	var src = document.getElementById("tk7");
	src.appendChild(img);
}