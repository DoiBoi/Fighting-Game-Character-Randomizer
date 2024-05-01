const char = [
	"Adon",
	"Akuma",
	"Birdie",
	"Charlie Nash",
	"Chun Li",
	"Dan",
	"Dhalsim",
	"Evil Ryu",
	"Gen",
	"Guy",
	"Ken",
	"M. Bison",
	"Rolento",
	"Rose",
	"Ryu",
	"Sagat",
	"Sakura",
	"Sodom",
	"Zangief",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function sfa2() {
	document.getElementById("sfa2").innerHTML = "";
	var n2 = randomizer(37)
	var img = document.createElement("img");
	img.src = "/images/sfa2/" + char[n2] + ".png";
	var src = document.getElementById("sfa2");
	src.appendChild(img);
}
