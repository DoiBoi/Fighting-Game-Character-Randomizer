const char = [
	"Andy Bogard",
	"Angel",
	"Antonov",
	"Ash Crimson",
	"Athena Asamiya",
	"B. Jenet",
	"Benimaru Nikaido",
	"Billy Kane",
	"Blue Mary",
	"Chizuru Kagura",
	"Chris",
	"Clark Still",
	"Dolores",
	"Darli",
	"Elisabeth Blanctorche",
	"Gato",
	"Geese Howard",
	"Haohmaru",
	"Heidern",
	"Iori Yagami",
	"Isla",
	"Joe Higashi",
	"K'",
	"Kim Kaphwan",
	"King",
	"King of Dinosaurs",
	"Krohnen",
	"Kukri",
	"Kula Diamond",
	"Kyo Kusanagi",
	"Leona Heidern",
	"Luong",
	"Mai Shiranui",
	"Maxima",
	"Meitenkun",
	"Nakoruru",
	"Omega Rugal",
	"Orochi Chris",
	"Orochi Shermie",
	"Orochi Yashiro",
	"Ralf Jones",
	"Ramon",
	"Robert Garcia",
	"Rock Howard",
	"Ryo Sakazaki",
	"Ryuji Yamazaki",
	"Shermie",
	"Shingo Yabuki",
	"Shun'ei",
	"Sylvie Paula Paula",
	"Terry Bogard",
	"Vanessa",
	"Whip",
	"Yashiro Nanakase",
	"Yuri Sakazaki",
]

const webs = [
	"Andy_Bogard",
	"Ángel",
	"Antonov",
	"Ash_Crimson",
	"Athena_Asamiya",
	"B.Jenet",
	"Benimaru)_Nikaido",
	"Billy_Kane",
	"Blue_Mary",
	"Chizuru_Kagura",
	"Chris",
	"Clark_Still",
	"Dolores",
	"Darli_Dagger",
	"Elisabeth_Blanctorche",
	"Gato",
	"Geese_Howard",
	"Haohmaru",
	"Heidern",
	"Iori_Yagami",
	"Isla",
	"Joe_Higashi",
	"K&27",
	"Kim_Kaphwan",
	"King",
	"King_of_Dinosaurs",
	"Krohnen",
	"Kukri",
	"Kula_Diamond",
	"Kyo_Kusanagi",
	"Leona_Heidern",
	"Luong",
	"Mai_Shiranui",
	"Maxima",
	"Meitenkun",
	"Nakoruru",
	"Omega_Rugal",
	"Orochi_Chris",
	"Orochi_Shermie",
	"Orochi_Yashiro",
	"Ralf_Jones",
	"Ramón",
	"Robert_Garcia",
	"Rock_Howard",
	"Ryo_Sakazaki",
	"Ryuji_Yamazaki",
	"Shermie",
	"Shingo_Yabuki",
	"Shun%27ei",
	"Sylvie_Paula_Paula",
	"Terry_Bogard",
	"Vanessa",
	"Whip",
	"Yashiro_Nanakase",
	"Yuri_Sakazaki",
]



function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}


function kofxv() {
	document.getElementById("kofxv").innerHTML = "";
	var a = 0;
	while (a <= 2) {
		var n2 = randomizer(55)
		var img = document.createElement("img");
		img.src = "/images/kofxv/" + char[n2] + ".png";
		var src = document.getElementById("kofxv");
		var link = document.createElement("a");
		link.href = "https://www.dreamcancel.com/wiki/The_King_of_Fighters_XV/" + webs[n2];
		link.appendChild(img)
		src.appendChild(link);
		a++;
	}
}