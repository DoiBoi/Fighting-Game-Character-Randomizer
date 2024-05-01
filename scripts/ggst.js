const char = [
	"Anji Mito",
	"Asuka R.",
	"Axl Low",
	"Baiken",
	"Bridget",
	"Chipp Zanuff",
	"Faust",
	"Giovanna",
	"Goldlewis Dickinson",
	"Happy Chaos",
	"I-No",
	"Jack-O' Valentine",
	"Ky Kiske",
	"Johnny",
	"Leo Whitefang",
	"May",
	"Millia Rage",
	"Nagoriyuki",
	"Potemkin",
	"Ramlethal Valentine",
	"Sin Kiske",
	"Sol Badguy",
	"Testament",
	"Zato-1",
]

const webs = 
	["Anji_Mito",
	 "Asuka_R",
	"Axl",
	"Baiken",
	"Bridget",
	"Chipp",
	"Faust",
	"Giovanna",
	"Goldlewis",
	"Happy_Chaos",
	"I-No",
	"Jack-O",
	"Ky",
	"Johnny",
	"Leo",
	"May",
	"Millia",
	"Nagoriyuki",
	"Potemkin",
	"Ramlethal",
	"Sin",
	"Sol",
	"Testament",
	"Zato-1",]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function ggst() {
	document.getElementById("ggst").innerHTML = "";
	var n2 = randomizer(24)
	var img = document.createElement("img");
	img.src = "/images/ggst/" + char[n2] + ".png";
	var src = document.getElementById("ggst");
	var link = document.createElement("a");
	link.href = "https://www.dustloop.com/w/GGST/" + webs[n2];
	link.appendChild(img)
	src.appendChild(link);
}