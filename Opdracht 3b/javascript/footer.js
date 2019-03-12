function footer() {
    var footer =    "<div class='footerlinks'> \
                        <h3 class='footerTitle'>Links</h3> \
                        <ul class='linksList'> \
                            <li class='listItem'> \
                                <a class='listItemLink' href='contact.html'>Contact</a> \
                            </li> \
                            <li class='listItem'> \
                                <a class='listItemLink' href='contact.html'>Projects</a> \
                            </li> \
                            <li class='listItem'> \
                                <a class='listItemLink' href='contact.html'>Home</a> \
                            </li> \
                        </ul> \
                    </div> \
                    <div class='footerMiddle'> \
                        <form class='searchbar'> \
                            <input class='search' type='text' placeholder='zoek projecten'></input> \
                            <button type='submit'>Zoeken</button> \
                        </form> \
                        <div class='socialMedia'> \
                            <a href='#' class='fa fa-facebook'></a> \
                            <a href='#' class='fa fa-instagram'></a> \
                            <a href='#' class='fa fa-snapchat-ghost'></a> \
                            <a href='#' class='fa fa-youtube'></a> \
                        </div> \
                    </div> \
                    <div class='logo'> \
                        <img src='logo.png' alt='logo'></img> \
                    </div>";


    document.getElementById('footer').innerHTML = footer;
}

window.addEventListener("load", function makeevents() { 
    footer();
})