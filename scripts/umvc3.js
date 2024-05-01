const char = [
	"Akuma",
	"Amaterasu",
	"Arthur",
	"C. Viper",
	"Captain America",
	"Chris",
	"Chun Li",
	"Dante",
	"Deadpool",
	"Doctor Doom",
	"Doctor Strange",
	"Dormammu",
	"Felicia",
	"Firebrand",
	"Frank West",
	"Ghost Rider",
	"Haggar",
	"Hawkeye",
	"Hsien Ko",
	"Hulk",
	"Iron Fist",
	"Iron Man",
	"Jill",
	"M.O.D.O.K.",
	"Magneto",
	"Morrigan",
	"Nemesis",
	"Nova",
	"Phoenix Wright",
	"Phoenix",
	"Rocket Raccoon",
	"Ryu",
	"Sentinel",
	"She Hulk",
	"Shuma-Gorath",
	"Spencer",
	"Spider-Man",
	"Storm",
	"Strider",
	"Super-Skrull",
	"Taskmaster",
	"Thor",
	"Trish",
	"Tron Bonne",
	"Vergil",
	"Viewtiful Joe",
	"Wesker",
	"Wolverine",
	"X-23",
	"Zero",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function umvc3() {
	document.getElementById("umvc3").innerHTML = "";
	var a = 0;
	while (a <= 2) {
		var n2 = randomizer(50)
		var img = document.createElement("img");
		img.src = "/images/umvc3/" + char[n2] + ".jpg";
		var src = document.getElementById("umvc3");
		src.appendChild(img);
		a++;
	}
}