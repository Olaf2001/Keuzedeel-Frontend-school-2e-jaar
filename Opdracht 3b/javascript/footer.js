function footer() {
    var footer = "Hier komt nog een footer";

    document.getElementById('footer').innerHTML = footer;
}

window.addEventListener("load", function makeevents() { 
    footer();
})