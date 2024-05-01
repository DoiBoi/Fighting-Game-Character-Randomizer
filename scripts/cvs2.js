const char = [
	"Akuma",
	"Athena",
	"Balrog",
	"Benimaru",
	"Blanka",
	"Cammy",
	"Chang",
	"Chun Li",
	"Dan",
	"Dhalsim",
	"E. Honda",
	"Eagle",
	"Evil Ryu",
	"Geese",
	"Guile",
	"Haohmaru",
	"Hibiki",
	"Iori",
	"Joe",
	"Ken",
	"Kim",
	"King",
	"Kyo",
	"Kyosuke",
	"M. Bison",
	"Mai",
	"Maki",
	"Morrigan",
	"Nakoruru",
	"Orochi Iori",
	"Raiden",
	"Rock",
	"Rolento",
	"Rugal",
	"Ryo",
	"Ryu",
	"Sagat",
	"Sakura",
	"Shin Akuma",
	"Terry",
	"Todoh",
	"Ultimate Rugal",
	"Vega",
	"Vice",
	"Yamazaki",
	"Yun",
	"Zangief",
	"Yuri",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function cvs21() {
	document.getElementById("cvs2").innerHTML = "";
	var n2 = randomizer(48)
	var img = document.createElement("img");
	img.src = "/images/cvs2/" + char[n2] + ".jpg";
	var src = document.getElementById("cvs2");
	src.appendChild(img);
}

function cvs22() {
	document.getElementById("cvs2").innerHTML = "";
	var n2 = randomizer(48)
	var a = 0;
	while (a <= 1) {
		var n2 = randomizer(48)
		var img = document.createElement("img");
		img.src = "/images/cvs2/" + char[n2] + ".jpg";
		var src = document.getElementById("cvs2");
		src.appendChild(img);
		a++;
	}
}

function cvs23() {
	document.getElementById("cvs2").innerHTML = "";
	var a = 0;
	while (a <= 2) {
		var n2 = randomizer(48)
		var img = document.createElement("img");
		img.src = "/images/cvs2/" + char[n2] + ".jpg";
		var src = document.getElementById("cvs2");
		src.appendChild(img);
		a++;
	}
}

function cvs24() {
	document.getElementById("cvs2").innerHTML = "";
	var n2 = randomizer(48)
	var a = 0;
	while (a <= 3) {
		var n2 = randomizer(48)
		var img = document.createElement("img");
		img.src = "/images/cvs2/" + char[n2] + ".jpg";
		var src = document.getElementById("cvs2");
		src.appendChild(img);
		a++;
	}
}