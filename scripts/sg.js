const char = [
	"Filia",
	"Cerebella",
	"Peacock",
	"Parasoul",
	"Ms. Fortune",
	"Painwheel",
	"Valentine",
	"Double",
	"Squigly",
	"Big Band",
	"Fukua",
	"Eliza",
	"Beowulf",
	"Robo-Fortune",
	"Annie",
	"Umbrella",
	"Black Dhalia",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function sg1() {
	document.getElementById("sg").innerHTML = "";
	var n2 = randomizer(17)
	var img = document.createElement("img");
	img.src = "/images/sg/" + char[n2] + ".jpg";
	var src = document.getElementById("sg");
	src.appendChild(img);
}

function sg2() {
	document.getElementById("sg").innerHTML = "";
	var a = 0;
	while (a <= 1) {
		var n2 = randomizer(17)
		var img = document.createElement("img");
		img.src = "/images/sg/" + char[n2] + ".jpg";
		var src = document.getElementById("sg");
		src.appendChild(img);
		a++;
	}
}

function sg3() {
	document.getElementById("sg").innerHTML = "";
	var a = 0;
	while (a <= 2) {
		var n2 = randomizer(17)
		var img = document.createElement("img");
		img.src = "/images/sg/" + char[n2] + ".jpg";
		var src = document.getElementById("sg");
		src.appendChild(img);
		a++;
	}
}