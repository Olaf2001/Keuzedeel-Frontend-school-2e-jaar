function navigation() {
    var nav =   "<h2 class='titleForDocumentOutline'>Main Navigation</h2> \
                <div class='nav-links-list'> \
                    <img class='navLogo' src='../images/logo.png' alt='logo'></img> \
                    <a href='index.html' class='nav-link'>Home</a> \
                    <a href='contact.html' class='nav-link'>Contact</a> \
                    <a href='projects.html' class='nav-link'>Projects</a> \
                </div>";

    document.getElementById('nav').innerHTML = nav;
}

window.addEventListener("load", function makeevents() { 
    navigation();
})