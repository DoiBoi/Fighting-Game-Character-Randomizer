const char = [
	"A.B.A.",
	"Anji Mito",
	"Axl Low",
	"Baiken",
	"Bridget",
	"Chipp Zanuff",
	"Dizzy",
	"Eddie",
	"Faust",
	"I-No",
	"Jam Kuradoberi",
	"Johnny",
	"Justice",
	"Kliff Undersn",
	"Ky Kiske",
	"May",
	"Millia Rage",
	"Order Sol",
	"Potemkin",
	"Robo-Ky",
	"Slayer",
	"Sol Badguy",
	"Testament",
	"Venom",
	"Zappa",
]

const webs = [
	"A.B.A",
	"Anji",
	"Axl",
	"Baiken",
	"Bridget",
	"Chipp",
	"Dizzy",
	"Eddie",
	"Faust",
	"I-No",
	"Jam",
	"Johnny",
	"Justice",
	"Kliff",
	"Ky",
	"May",
	"Millia",
	"Order-Sol",
	"Potemkin",
	"Robo-Ky",
	"Slayer",
	"Sol",
	"Testament",
	"Venom",
	"Zappa",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function ggacpr1() {
	document.getElementById("ggacpr").innerHTML = "";
	var n2 = randomizer(25)
	var img = document.createElement("img");
	img.src = "/images/ggacpr/" + char[n2] + ".png";
	var src = document.getElementById("ggacpr");
	var link = document.createElement("a");
	link.href = "https://www.dustloop.com/w/GGACR/" + webs[n2];
	link.appendChild(img)
	src.appendChild(link);
}

function ggacpr2() {
	document.getElementById("ggacpr").innerHTML = "";
	var a = 0;
	while (a <= 1) {
		var n2 = randomizer(25)
		var img = document.createElement("img");
		img.src = "/images/ggacpr/" + char[n2] + ".png";
		var src = document.getElementById("ggacpr");
		var link = document.createElement("a");
		link.href = "https://www.dustloop.com/w/GGACR/" + webs[n2];
		link.appendChild(img)
		src.appendChild(link);
		a++;
	}
}

function ggacpr3() {
	document.getElementById("ggacpr").innerHTML = "";
	var a = 0;
	while (a <= 2) {
		var n2 = randomizer(25)
		var img = document.createElement("img");
		img.src = "/images/ggacpr/" + char[n2] + ".png";
		var src = document.getElementById("ggacpr");
		var link = document.createElement("a");
		link.href = "https://www.dustloop.com/w/GGACR/" + webs[n2];
		link.appendChild(img)
		src.appendChild(link);
		a++;
	}
}



