const char = [
	"Alessi",
	"Avdol",
	"Black Polnareff",
	"Chaka",
	"Devo",
	"Dio",
	"Hol Horse",
	"Iggy",
	"Jotaro",
	"Kakyoin",
	"Khan",
	"Midler",
	"Moriah",
	"Noriaki",
	"Oingo & Hol Horse",
	"Old Joseph",
	"Pet Shop",
	"Polnareff",
	"Rubber Soul",
	"Shadow Dio",
	"Vanilla Ice",
	"Young Joseph",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function hftf() {
	document.getElementById("hftf").innerHTML = "";
	var n2 = randomizer(22)
	var img = document.createElement("img");
	img.src = "/images/hftf/" + char[n2] + ".gif";
	var src = document.getElementById("hftf");
	src.appendChild(img);
}