const char = [
	"Amane Nishiki",
	"Arakune",
	"Azrael",
	"Bang Shishigami",
	"Bullet",
	"Carl Clover",
	"Celica A. Mercury",
	"Es",
	"Hakumen",
	"Hazama",
	"Hibiki Kohaku",
	"Iron Tager",
	"Izanami",
	"Izayoi",
	"Jin Kisaragi",
	"Jubei",
	"Kagura Mutsuki",
	"Kokonoe",
	"Litchi Faye Ling",
	"Mai Natsume",
	"Makoto Nanaya",
	"Naoto Kurogane",
	"Nine the Phantom",
	"Noel Vermillion",
	"Platinum the Trinity",
	"Rachel Alucard",
	"Ragna the Bloodedge",
	"Relius Clover",
	"Susanoo",
	"Taokaka",
	"Tsubaki Yayoi",
	"Valkenhayn R. Hellsing",
	"Yuuki Terumi",
	"Λ-No.11- (Lambda-11-)",
	"μ-No.12- (Mu-12-)",
	"ν-No.13- (Nu-13-)",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function bbcf() {
	document.getElementById("bbcf").innerHTML = "";
	var n2 = randomizer(36)
	var img = document.createElement("img");
	img.src = "/images/bbcf/" + char[n2] + ".png";
	var src = document.getElementById("bbcf");
	src.appendChild(img);
}