var number;
var automatic;
var image = [];
image[1] = '../images/code1.jpg';
image[2] = '../images/code2.jpg';
image[3] = '../images/code3.jpg';
image[4] = '../images/code4.jpg';

function next() {
    number++;
    if (number >= 5) {
        number = 1;
    }
    document.getElementById('slider').innerHTML = "<img class='slideshow__image' src=" + image[number] + ">";
}

function makeevents() {
    number = 1;
    document.getElementById("slider").innerHTML = "<img class='slideshow__image' src=" + image[1] + ">";
    automatic = setInterval(next, 5000);
}
window.onload=makeevents;