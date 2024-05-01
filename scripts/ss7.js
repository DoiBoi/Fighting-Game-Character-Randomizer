char = [
	"Baiken",
	"Basara",
	"Cham Cham",
	"Charlotte Christine Colde",
	"Darli Dagger",
	"Earthquake",
	"Galford D. Weller",
	"Genjuro Kibagami",
	"Gongsun Li",
	"Hanzo Hattori",
	"Haohmaru",
	"Hibiki Takane",
	"Iroha",
	"Jubei Yagyu",
	"Kazuki Kazama",
	"Kyoshiro Senryo",
	"Mina Majikina",
	"Nakoruru",
	"Rimururu",
	"Shiki",
	"Shiro Tokisada Amakusa",
	"Shizumaru Hisame",
	"Sogetsu Kazama",
	"Tam Tam",
	"Ukyo Tachibana",
	"Wan-Fu",
	"Warden",
	"Wu-Ruixiang",
	"Yashamaru Kurama",
	"Yoshitora Tokugawa",
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function ss7() {
	document.getElementById("ss7").innerHTML = "";
	var n2 = randomizer(30)
	var img = document.createElement("img");
	img.src = "/images/ss7/" + char[n2] + ".jpg";
	var src = document.getElementById("ss7");
	src.appendChild(img);
}
