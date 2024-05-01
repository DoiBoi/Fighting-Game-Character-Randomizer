const char = [
	"Adon",
	"Akuma",
	"Balrog",
	"Birdie",
	"Blanka",
	"Cammy",
	"Charlie Nash",
	"Chun Li",
	"Cody",
	"Dan",
	"Dee Jay",
	"Dhalsim",
	"E. Honda",
	"Eagle",
	"Evil Ryu",
	"Fei Long",
	"Gen",
	"Guile",
	"Guy",
	"Ingrid",
	"Juli",
	"Juni",
	"Karin",
	"Ken",
	"M. Bison",
	"Maki",
	"R. Mika",
	"Rolento",
	"Rose",
	"Ryu",
	"Sagat",
	"Sakura",
	"Sodom",
	"T. Hawk",
	"Vega",
	"Yuri",
	"Zangief",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function sfa3() {
	document.getElementById("sfa3").innerHTML = "";
	var n2 = randomizer(17)
	var img = document.createElement("img");
	img.src = "/images/sfa3/" + char[n2] + ".jpg";
	var src = document.getElementById("sfa3");
	src.appendChild(img);
}