function navigation() {
    var navLinks = "<a href='index.html' class='nav-link'>Home</a> \
                    <a href='contact.html' class='nav-link'>Contact</a> \
                    <a href='projects.html' class='nav-link'>Projects</a>";

    var nav =   "<h2 class='titleForDocumentOutline'>Main Navigation</h2> \
                <div class='nav-links-list'> \
                    <img class='navLogo' src='../images/logo.png' alt='logo'> \
                    "+navLinks+" \
                </div>";

    var mobilenav = "<h2 class='titleForDocumentOutline'>Main Navigation</h2> \
                     <div class='navContent'>\
                        <button id='navButton' class='hamburger'><i class='fa fa-bars'></i></button> \
                        <img class='navLogo' src='../images/logo.png' alt='logo'> \
                     </div> \
                     <div id='navLinks' class='nav-links-list'> \
                     "+navLinks+" \
                     </div>";

    document.getElementById('nav').innerHTML = nav;
    document.getElementById('mobileNav').innerHTML = mobilenav;
}

function ShowNavigation() {
    navButton.onclick = function () {
        document.getElementById('navLinks').style.display = 'block';

        navButton.onclick = function () {
            document.getElementById('navLinks').style.display = 'none';

            ShowNavigation();
        };
    };
}

window.addEventListener("load", function makeevents() {
    navigation();
    var navButton = document.getElementById('navButton').onclick;
    ShowNavigation();
    document.getElementById('navLinks').style.display = 'none';
});