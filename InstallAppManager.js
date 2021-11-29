(async function() {
	var f = await (await fetch("https://perodactyl.github.io/w93appMan/install.js")).text() //Get file.
	eval(f) //Run it.
})
