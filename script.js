// Slideshow
/*var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demodots");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
    
}
*/

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("contact-info"), {
    center: { lat: 6.646454, lng: 3.326705 },
    zoom: 16
  });
}

/*
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://geocodify.p.rapidapi.com/?q=4047",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "geocodify.p.rapidapi.com",
		"x-rapidapi-key": "9fbf695ebamsh8881b17ad4d1b91p17bdaejsn5b73482bee2f"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});*/