

// The function to draw the scene
function draw() {
    var c = document.getElementById("Canvas");
	var ctx = c.getContext("2d");
	var img = new Image();
	img.src="logos.png";
	img.addEventListener("load", function(){canvas.drawImage(img,0,0)},false);

}


$(document).ready(draw);