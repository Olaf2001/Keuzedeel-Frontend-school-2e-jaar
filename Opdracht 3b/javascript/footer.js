function footer() {
    var footer =    "<h2 class='titleForDocumentOutline'>Footer</h2> \
                    <div class='footerlinks'> \
                        <h3 class='footerTitle'>Links</h3> \
                        <ul class='linksList'> \
                            <li class='listItem'> \
                                <a class='listItemLink' href='contact.html'>Contact</a> \
                            </li> \
                            <li class='listItem'> \
                                <a class='listItemLink' href='projects.html'>Projects</a> \
                            </li> \
                            <li class='listItem'> \
                                <a class='listItemLink' href='index.html'>Home</a> \
                            </li> \
                        </ul> \
                    </div> \
                    <div class='footerMiddle'> \
                        <h3 class='titleForDocumentOutline'>Search Projects</h3> \
                        <form class='searchbar'> \
                            <input class='search' type='text' placeholder='zoek projecten'></input> \
                            <button class='searchButton' type='submit'>Zoeken</button> \
                        </form> \
                        <h3 class='titleForDocumentOutline'>Social Media</h3> \
                        <div class='socialMedia'> \
                            <a href='#' class='fa fa-facebook'></a> \
                            <a href='#' class='fa fa-instagram'></a> \
                            <a href='#' class='fa fa-snapchat-ghost'></a> \
                            <a href='#' class='fa fa-youtube'></a> \
                        </div> \
                    </div> \
                    <div class='logo'> \
                        <h3 class='titleForDocumentOutline'>Logo</h3> \
                        <img class='footerLogo' src='../images/logo.png' alt='logo'></img> \
                    </div>";


    document.getElementById('footer').innerHTML = footer;
}

window.addEventListener("load", function makeevents() { 
    footer();
})