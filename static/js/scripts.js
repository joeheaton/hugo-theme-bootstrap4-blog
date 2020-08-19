// select common elements
var html = document.getElementsByTagName("html")[0];
var head = document.getElementsByTagName("head")[0];


/*
 * Document Ready
 */

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Document ready!");
});


/*
 * site settings
 */
$(document).ready(function() {

    // Setting slider
    // dep: JQuery SlideReveal
    var settings_slider = $("#settings-slider").slideReveal({
        trigger: $("#settings-toggle"),
        position: "right"
    });

    $( "#settings-slider .close" ).click(function() {
        settings_slider.slideReveal("hide", false);
    });

    /* Setting: Dyslexia
     * dep: JS-Cookies, OpenDyslexic font
     */
    function a11y_dyslexia_enable() {
        console.log("Enable Dyslexia mode");
        Cookies.set("dyslexia", true, { secure: true });
        document.body.classList.add("dyslexia");
    }

    function a11y_dyslexia_disable() {
        console.log("Disable Dyslexia mode");
        Cookies.set("dyslexia", false, { secure: true });
        document.body.classList.remove("dyslexia");
    }

    // Enable if cookie set
    if (Cookies.get("dyslexia") == "true") {
        a11y_dyslexia_enable();
    }

    // Toggle button
    var a11y_dyslexia = document.getElementById("a11y-dyslexia");
    if (a11y_dyslexia) {
        a11y_dyslexia.addEventListener("click", function(event) {
            if (document.body.classList.contains("dyslexia")) {
                a11y_dyslexia_disable();
                a11y_dyslexia.classList.remove("btn-success");
                a11y_dyslexia.classList.add("btn-primary");
            } else {
                a11y_dyslexia_enable();
                a11y_dyslexia.classList.remove("btn-primary");
                a11y_dyslexia.classList.add("btn-success");
            }
        });
    }
});