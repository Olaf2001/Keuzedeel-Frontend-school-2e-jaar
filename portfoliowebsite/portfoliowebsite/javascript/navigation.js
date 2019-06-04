function navigation() {
    var navLinks = "<a href='./' class='nav-link'>Home</a> \
                    <a href='./contact' class='nav-link'>Contact</a> \
                    <a href='./projecten' class='nav-link'>Projecten</a>";

    var nav =   "<h2 class='titleForDocumentOutline'>Main Navigation</h2> \
                <div class='nav-links-list'> \
                    <img class='navLogo' src='./portfoliowebsite/images/logo.png' alt='logo'> \
                    "+navLinks+" \
                </div>";

    var mobilenav = "<div class='navContent'>\
                        <button id='navButton' class='hamburger'><i class='fa fa-bars'> Menu</i></button> \
                        <img class='navLogo' src='./portfoliowebsite/images/logo.png' alt='logo'> \
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