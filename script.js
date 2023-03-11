function updateTime() {
	let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	let time = hours + ":" + minutes + ":" + seconds;
	document.getElementById("clock").innerHTML = time;
}
setInterval(updateTime, 1000);
