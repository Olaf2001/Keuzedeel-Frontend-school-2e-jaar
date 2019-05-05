var number;
var automatic;
var image = [];
image[1] = 'src="./portfoliowebsite/images/olaf2.jpg" alt="Olaf"';
image[2] = 'src="./portfoliowebsite/images/coding1.jpg" alt="Coderen"';
image[3] = 'src="./portfoliowebsite/images/website.jpg" alt="Website"';
image[4] = 'src="./portfoliowebsite/images/laptop.jpg" alt="Laptop"';

function next() {
    number++;
    if (number >= 5) {
        number = 1;
    }
    document.getElementById('slider').innerHTML = " <h2 class='titleForDocumentOutline'>Image Slider</h2> \
                                                    <img class='sliderImage' "+ image[number] + ">";
}

window.addEventListener("load", function makeevents() { 
    number = 1;
    document.getElementById("slider").innerHTML = "<img class='sliderImage' "+ image[1] + ">";
    automatic = setInterval(next, 5000);
});