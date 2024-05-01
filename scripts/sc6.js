const char = [
	"2B",
	"Amy",
	"Astaroth",
	"Azwel",
	"Cassandra",
	"Cervantes",
	"Geralt",
	"Groh",
	"Haohmaru",
	"Hilde",
	"Hwang",
	"Inferno",
	"Ivy",
	"Kilik",
	"Maxi",
	"Mitsurugi",
	"Nightmare",
	"Raphael",
	"Seong Mi-na",
	"Setsuka",
	"Siegfried",
	"Sophitia",
	"Taki",
	"Talim",
	"Tira",
	"Voldo",
	"Xianghua",
	"Yoshimitsu",
	"Zasalamel",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function sc6() {
	document.getElementById("sc6").innerHTML = "";
	var n2 = randomizer(29)
	var img = document.createElement("img");
	img.src = "/images/sc6/" + char[n2] + ".jpg";
	var src = document.getElementById("sc6");
	src.appendChild(img);
}
