const char = [
	"Alex",
	"Batsu Ichimonji",
	"Casshan",
	"Chun-Li",
	"Doronjo",
	"Frank West",
	"Gold Lightan",
	"Ippatsuman",
	"Joe the Condor",
	"Jun the Swan",
	"Kaijin No Soki",
	"Karas",
	"Ken the Eagle",
	"Megaman Volnutt",
	"Morrigan Aensland",
	"Polimar",
	"PTX-40A",
	"Roll",
	"Ryu",
	"Saki Omokane",
	"Tekkaman Blade",
	"Viewtiful Joe",
	"Yatterman-1",
	"Yatterman-2",
	"Zero",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function tvc() {
	document.getElementById("tvc").innerHTML = "";
	var a = 0;
	while (a <= 1) {
		var n2 = randomizer(25)
		var img = document.createElement("img");
		img.src = "/images/tvc/" + char[n2] + ".png";
		var src = document.getElementById("tvc");
		src.appendChild(img);
		a++;
	}
}