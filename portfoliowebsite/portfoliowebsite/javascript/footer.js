function footer() {
    var footer =    "<h2 class='titleForDocumentOutline'>Footer</h2> \
                    <div class='footerLinks'> \
                        <h3 class='footerTitle'>Links</h3> \
                        <ul class='linksList'> \
                            <li class='listItem'> \
                                <a class='listItemLink' href='./'>Home</a> \
                            </li> \
                            <li class='listItem'> \
                                <a class='listItemLink' href='./contact'>Contact</a> \
                            </li> \
                            <li class='listItem'> \
                                <a class='listItemLink' href='./projecten'>Projecten</a> \
                            </li> \
                            <li class='listItem'> \
                                <a class='listItemLink' href='./sitemap'>Sitemap</a> \
                            </li> \
                        </ul> \
                    </div> \
                    <div class='footerSearchbar'> \
                        <h3 class='titleForDocumentOutline'>Search Projects</h3> \
                        <form class='searchbar'> \
                            <input disabled class='search' type='text' placeholder='Zoekfunctie nog niet gereed'> \
                            <button disabled class='button' type='submit'>Zoeken</button> \
                        </form> \
                    </div> \
                    <div class='socialMediaIcons'> \
                        <h3 class='titleForDocumentOutline'>Social Media</h3> \
                        <div class='socialMedia'> \
                            <a target='_blank' href='https://www.facebook.com/olaf.kramer.142687' class='fa fa-facebook'></a> \
                            <a target='_blank' href='https://www.instagram.com/_olaf_33/' class='fa fa-instagram'></a> \
                            <a target='_blank' href='https://www.snapchat.com/l/nl-nl/' class='fa fa-snapchat-ghost'></a> \
                            <a target='_blank' href='https://www.youtube.com/channel/UCOwtX-lFEjBAjf8JaQgyVvA?view_as=subscriber' class='fa fa-youtube'></a> \
                        </div> \
                    </div> \
                    <div class='logo'> \
                        <h3 class='titleForDocumentOutline'>Logo</h3> \
                        <img class='footerLogo' src='./portfoliowebsite/images/logo.png' alt='logo'> \
                    </div>\
                    <div class='copyrightText'> \
                        &copy; Olaf Kramer 2019\
                    </div>";


    document.getElementById('footer').innerHTML = footer;
}

window.addEventListener("load", function makeevents() { 
    footer();
})