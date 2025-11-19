
function changeImage()
{
	var image = document.querySelector("#image");
	if(image.src == "images.jpg")
		image.src = "angry-cats-v0-37n6eeti7j5b1.webp";
	else
		image.src = "images.jpg";
}