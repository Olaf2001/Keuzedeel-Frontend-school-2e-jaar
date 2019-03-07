function navigation() {
    var nav =   "<div class='nav-links-list'> \
                    <a href='index.html' class='nav-link'>Home</a> \
                    <a href='contact.html' class='nav-link'>Contact</a> \
                    <a href='projects.html' class='nav-link'>Projects</a> \
                </div>";

    document.getElementById('nav').innerHTML = nav;
}

function makeevents() {
    navigation();
}

window.onload = makeevents;