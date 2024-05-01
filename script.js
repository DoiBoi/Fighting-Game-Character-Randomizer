const games = [
	"bbcf",
	"bbtag",
	"cvs2",
	"dbfz",
	"dnfd",
	"ggacpr",
	"ggst",
	"ggxrdrev2",
	"jjasbr",
	"hftf",
	"ki",
	"kof02um",
	"kof13",
	"kof98um",
	"kofxv",
	"mbaacc",
	"mbtl",
	"mk11",
	"mvc2",
	"p4au",
	"roa",
	"sc6",
	"sf2t",
	"sf3s",
	"sfa2",
	"sfa3",
	"sfv",
	"sg",
	"ss7",
	"ssbu",	
	"tk7",
	"tvc",
	"umvc3",
	"uniclr",	
]

function randomizer(size) {
	var n = Math.floor(Math.random() * (size))
	return n
}

function website() {
	var n2 = randomizer(32)
	location.href = "pages/" + games[n2] + ".html";
}