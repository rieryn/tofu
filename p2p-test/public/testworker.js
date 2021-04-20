addEventListener('message', (message) => {
	console.log(message)

	var ctx = message.data.getContext('2d');
	ctx.fillStyle = "#fa8520";
ctx.fillRect(0, 0, 50, 50);
});

console.log("test")
