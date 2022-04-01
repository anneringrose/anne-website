// dropdown menu  ////////////////////////////////////////


$(document).ready(function() {
	$('.dropdown').click(function() {
		$('.dropdown-content').slideToggle(300);
		if (document.querySelector('.top').classList.contains('grey-background')) {
		    $('div.dropdown').toggleClass('dropdown-background-portfolio');
	    } else {
            $('div.dropdown').toggleClass('dropdown-background');
	    };
		$('span.top').toggleClass('bar1');
		$('span.middle').toggleClass('bar2');
		$('span.bottom').toggleClass('bar3');
	});
});

//  Insert favicon /////////////////////////////////

const head = document.getElementById("head");

const favicon = `
    <link rel="apple-touch-icon" sizes="180x180" href="./resources/images/favicon_io/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./resources/images/favicon_io/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./resources/images/favicon_io/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">`

if(head){
    head.innerHTML += favicon;
};

// insert footer ////////////////////////////////////////

const footer = document.getElementById("footer");

const footerContents = `        <div class="footer-content-container">
            <nav class="footer-links">
                <a class="footer-link" href="index.html">Home</a>
                <a class="footer-link" href="about-me.html">About Me</a>
                <a class="footer-link" href="my-approach.html">My Approach</a>
                <a class="footer-link" href="fees.html">Fees</a>
                <a class="footer-link" href="contact.html">Contact</a>
            </nav>
            <div class="footer-anne">
                <h1><a href="./index.html">Anne Ringrose<br>Counselling <span class="header-sub-heading">BA Hons MBACP</span></a></h1>
                <a href="https://www.bacp.co.uk/" target="_blank" class="footer-img-link"><img src="./resources/images/bacp.png" alt="BACP Logo" class="footer-img"></a>
            </div>
        </div>`;

if (footer) {
	footer.innerHTML += footerContents;
};

// insert copyright //////////////////////////////////////////

const copyright = document.getElementById("copyright");

const copyrightContent = `<p class="copyright">&copy; Anne Ringrose Counselling, ` + new Date().getFullYear() + `</p><p class="copyright">Created by <a href="https://jameswaterman.uk/" class="copyright-link" target="blank_">James Waterman</a></p>`;

if (copyright) {
	copyright.innerHTML += copyrightContent;
};

