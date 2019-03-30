function footer() {
    var footer =    "<h2 class='titleForDocumentOutline'>Footer</h2> \
                    <div class='footerlinks'> \
                        <h3 class='footerTitle'>Links</h3> \
                        <ul class='linksList'> \
                            <li class='listItem'> \
                                <a class='listItemLink' href='index.html'>Home</a> \
                            </li> \
                            <li class='listItem'> \
                                <a class='listItemLink' href='contact.html'>Contact</a> \
                            </li> \
                            <li class='listItem'> \
                                <a class='listItemLink' href='projects.html'>Projects</a> \
                            </li> \
                        </ul> \
                    </div> \
                    <div class='footerSearchbar'> \
                        <h3 class='titleForDocumentOutline'>Search Projects</h3> \
                        <form class='searchbar'> \
                            <input disabled class='search' type='text' placeholder='Zoekfunctie nog niet gereed'> \
                            <button disabled class='searchButton' type='submit'>Zoeken</button> \
                        </form> \
                    </div> \
                    <div class='socialMediaIcons'> \
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
                        <img class='footerLogo' src='../images/logo.png' alt='logo'> \
                    </div>\
                    <div class='copyrightText'> \
                        &copy; Olaf Kramer 2019\
                    </div>";


    document.getElementById('footer').innerHTML = footer;
}

window.addEventListener("load", function makeevents() { 
    footer();
})