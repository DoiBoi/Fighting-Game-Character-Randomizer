const char = [
	"Answer",
	"Axl Low",
	"Baiken",
	"Bedman",
	"Chipp Zanuff",
	"Dizzy",
	"Elphelt Valentine",
	"Faust",
	"I-No",
	"Jack-O' Valentine",
	"Jam Kuradoberi",
	"Johnny",
	"Kum Haehyun",
	"Ky Kiske",
	"Leo Whitefang",
	"May",
	"Millia Rage",
	"Potemkin",
	"Ramlethal Valentine",
	"Raven",
	"Sin Kiske",
	"Slayer",
	"Sol Badguy",
	"Venom",
	"Zato-1",
]

const webs = [
	"Answer",
	"Axl_Low",
	"Baiken",
	"Bedman",
	"Chipp_Zanuff",
	"Dizzy",
	"Elphelt_Valentine",
	"Faust",
	"I-No",
	"Jack-O",
	"Jam_Kuradoberi",
	"Johnny",
	"Kum_Haehyun",
	"Ky_Kiske",
	"Leo_Whitefang",
	"May",
	"Millia_Rage",
	"Potemkin",
	"Ramlethal_Valentine",
	"Raven",
	"Sin_Kiske",
	"Slayer",
	"Sol_Badguy",
	"Venom",
	"Zato-1",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function ggxrdrev2() {
	document.getElementById("ggxrdrev2").innerHTML = "";
	var n2 = randomizer(25)
	var img = document.createElement("img");
	img.src = "/images/ggxrdrev2/" + char[n2] + ".png";
	var src = document.getElementById("ggxrdrev2");
	var link = document.createElement("a");
	link.href = "https://www.dustloop.com/w/GGXRD-R2/" + webs[n2];
	link.appendChild(img)
	src.appendChild(link);
}