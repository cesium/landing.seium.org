var canvas = document.getElementById('canvas');

var backgrounds = new Array(
      'url(\'img/2.jpg\')'
    , 'url(\'img/3.jpg\')'
    , 'url(\'img/4.jpg\')'
    , 'url(\'img/6.jpg\')'
    , 'url(\'img/7.jpg\')'
);

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

canvas.style.width = window.innerWidth + "px";
canvas.style.height = height + "px";
canvas.width = window.innerWidth;
canvas.height = height;

var wrapper = document.getElementsByClassName("wrapper")[0];

wrapper.style.width = window.innerWidth + "px";
wrapper.style.height = height + "px";

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    fadeOutAndfadeIn(canvas.style.background, backgrounds[current]);
}

function fadeOutAndfadeIn(){
	var opacity = 1;
	var timer = setInterval(function(){
		if(opacity < 0.05){
			clearInterval(timer);
			canvas.style.background =  backgrounds[current];
			fadeIn(canvas);
		}
		canvas.style.opacity = opacity;
		opacity -=  0.05;
	}, 50);
}

function fadeIn(element) {
    var op = 0.05;
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.05;
    }, 10);
}

setInterval(nextBackground, 5000);

canvas.style.background = backgrounds[0];
