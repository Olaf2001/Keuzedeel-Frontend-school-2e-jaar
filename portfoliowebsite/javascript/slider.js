var number;
var automatic;
var image = [];
image[1] = '../images/olaf2.jpg';
image[2] = '../images/coding1.jpg';
image[3] = '../images/website.jpg';
image[4] = '../images/laptop.jpg';

function next() {
    number++;
    if (number >= 5) {
        number = 1;
    }
    document.getElementById('slider').innerHTML = " <h2 class='titleForDocumentOutline'>Image Slider</h2> \
                                                    <img class='sliderImage' src=" + image[number] + ">";
}

window.addEventListener("load", function makeevents() { 
    number = 1;
    document.getElementById("slider").innerHTML = "<img class='sliderImage' src=" + image[1] + ">";
    automatic = setInterval(next, 5000);
})