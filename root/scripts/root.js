/**
 * This file contains functions for supporting the root homepage
 */

// Perform pre-load operations
function preload()
{
    const bgImg = new Image().src= "images/space.jpg";
}

// Perform all necessary functions at load-time
function onLoad()
{
    let mainFadeDelay = 3030;

    $(window).ready(function() {
        // Fade in content
        $("main").hide();
        
        $("main").fadeIn(mainFadeDelay); 
    });
}