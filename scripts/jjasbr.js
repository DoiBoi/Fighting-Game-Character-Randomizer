const char = [
	"Akira Otoishi",
	"Bruno Bucciarati",
	"Caesar Zeppeli",
	"Diavolo",
	"Diego Brando",
	"DIO",
	"Dio Brando",
	"Enrico Pucci (Final)",
	"Enrico Pucci (Whitesnake)",
	"Ermes Costello",
	"Esidisi",
	"Foo Fighters",
	"Funny Valentine",
	"Ghiaccio",
	"Giorno Giovanna",
	"Guido Mista",
	"Gyro Zeppeli",
	"Hol Horse",
	"Iggy",
	"Ikuro Hashizawa",
	"Jean Pierre Polnareff",
	"Johnny Joestar",
	"Jolyne Cujoh",
	"Jonathan Joestar",
	"Joseph Joestar",
	"Josuke Higashikata (Part 4)",
	"Josuke Higashikata (Part 8)",
	"Jotaro Kujo (Part 3)",
	"Jotaro Kujo (Part 4)",
	"Kars",
	"Keicho Nijimura",
	"Koichi Hirose",
	"Kosaku Kawajiri",
	"Lisa Lisa",
	"Mariah",
	"Muhammad Avdol",
	"Narancia Ghirga",
	"Narciso Anasui",
	"Noriaki Kakyoin",
	"Okuyasu Nijimura",
	"Old Joseph Joestar",
	"Pannacotta Fugo",
	"Pet Shop",
	"Prosciutto & Pesci",
	"Risotto Nero",
	"Robert E. O. Speedwagon",
	"Rohan Kishibe",
	"Rudol Von Stroheim",
	"Shigekiyo Yangu",
	"Trish Una",
	"Vanilla Ice",
	"Wamuu",
	"Weather Report",
	"Will A. Zeppeli",
	"Yoshikage Kira",
	"Yukako Yamagishi",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function jjasbr() {
	document.getElementById("jjasbr").innerHTML = "";
	var a = 0;
	while (a <= 1) {
		var n2 = randomizer(56)
		var img = document.createElement("img");
		img.src = "/images/jjasbr/" + char[n2] + ".png";
		var src = document.getElementById("jjasbr");
		src.appendChild(img);
		a++;
	}
}