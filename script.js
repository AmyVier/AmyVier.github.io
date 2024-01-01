window.onload=function(){
    // add scrolling functions for the navigation bar
    const goHome = document.querySelector("#goHome");
    const home = document.querySelector("#home");

    const goAbout = document.querySelector("#goAbout");
    const about = document.querySelector("#about");

    const goFeatures = document.querySelector("#goFeatures");
    const features = document.querySelector("#how");

    goHome.addEventListener("click", () => {
     home.scrollIntoView({ behavior: "smooth"});
    });

    goAbout.addEventListener("click", () => {
       about.scrollIntoView({ behavior: "smooth"});
    });

    goFeatures.addEventListener("click", () => {
       features.scrollIntoView({ behavior: "smooth"});
    });

    // add visibility functions for the go to top element
    const goToTop = document.querySelector("#goToTop");

    var scrollFunction = function() {
        var y = window.scrollY;
        if (y >= 60) {
            goToTop.style.visibility = 'visible';
        } else {
            goToTop.style.visibility = 'hidden';
        }
    };

    window.addEventListener("scroll", scrollFunction);

    // add go to top function for the go to top element
    const navigationBar = document.querySelector("#navigation_bar");

    goToTop.addEventListener("click", () => {
       navigationBar.scrollIntoView({ behavior: "smooth"});
    });



}
