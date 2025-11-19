const colors = [
	"#00fbff",
	"#ff1300",
	"#f700ff",
	"#13ff00",
	"#f3ff00",
	"#0000ff",
	"#faa003"
];
function getRandomIndex()
{
	const randomIndex = Math.floor(Math.random() * colors.length);
	return randomIndex;
}
const body = document.querySelector("body");
const bgHexCode = document.getElementById("bg-hex-code");
function changeBackgroundColor()
{
	const bgColor = colors[getRandomIndex()];
	bgHexCode.innerText = "HEX : " + bgColor;
	body.style.backgroundColor = bgColor;
}
function resetColor()
{
	body.style.backgroundColor = "#ffffff";
	bgHexCode.innerText = "HEX : #ffffff";
}
const btn = document.getElementById("btn");
const reset = document.getElementById("reset");
btn.onclick = changeBackgroundColor;
reset.onclick = resetColor;