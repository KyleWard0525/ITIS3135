/**
 * This script contains JQuery functions for supporting 
 * slideshow.html
 */

//  ID of the current slide being displayed
var curr_slide = 'pups';

// Object containing slides
const slides = {
    'pups': {
        'id': 1,
        'image': 'images/slideshow/tamaskan-pups.jpg',
        'caption': 'Dogs > Any other living being > Anything else'
    },

    'racing': {
        'id': 2,
        'image': 'images/slideshow/fuel-meme.jpg',
        'caption': "Racing is very dangerous, which is why it's so much fun!"
    },

    'space': {
        'id': 3,
        'image': 'images/slideshow/f9landing.jpg',
        'caption': "Space exploration is a necessity"
    },

    'gmonitor': {
        'id': 4,
        'image': 'images/slideshow/gmonitor1.12.jpg',
        'caption': "Project 1: GForce Monitor"
    },

    'gh_circuit': {
        'id': 5,
        'image': 'images/slideshow/gh-circuit.jpg',
        'caption': "Project 2: Converting Wireless PS2 Guitar Hero Controller to work with PC via USB"
    },

    'ai': {
        'id': 6,
        'image': 'images/slideshow/neural-net.jpg',
        'caption': "Machine Learning is fascinating"
    },

    'meme': {
        'id': 7,
        'image': 'images/slideshow/YourPhysicsHasNoPowerHere.jpg',
        'caption': "Your Physics Has No Power Here!"
    },

    'mma': {
        'id': 8,
        'image': 'images/slideshow/mcgregor-diaz-2.jpg',
        'caption': "Mixed Martial Arts (ref. McGregor vs Diaz 2)"
    }
};

// Get and display next slide
function next()
{
    let currkey_idx = Object.keys(slides).indexOf(curr_slide);

    // Check if next image should be first image
    if(currkey_idx + 1 >= Object.keys(slides).length)
    {
        curr_slide = 'pups';
        displaySlide(curr_slide);
    }
    else {
        curr_slide = Object.keys(slides)[currkey_idx + 1];
        displaySlide(curr_slide);
    }
    
}

// Get and display previous slide
function previous()
{
    let currkey_idx = Object.keys(slides).indexOf(curr_slide);

    //  Check if image going back to last image
    if(currkey_idx - 1 < 0)
    {
        currkey_idx = Object.keys(slides).length;
    }

    curr_slide = Object.keys(slides)[currkey_idx - 1]

    displaySlide(curr_slide);
}

// Show a given slide
function displaySlide(name)
{
    // Fade out previous slide
    $(".slide").hide(50);
    sleepMS(15);
    
    // Set slide properties
    $("#slide-num").text(slides[name]['id'] + "/" + Object.keys(slides).length);
    $("#slide-img").attr("src", slides[name]['image']);  
    $("#slide-cap").text(slides[name]['caption']);

    //  Fade slide back in
    $(".slide").show(350);
}

// Automatic slide show
function autoSlideShow()
{
    // Display first slide
    ;
}

//  Sleep for ms
function sleepMS(duration)
{
    let start = new Date().getTime()

    //  Do nothing till elapsed time is equal to duration
    while((new Date().getTime() - start) < duration){;};
}

// Ensure the entire HTML page has loaded first
$(document).ready(function() {
    
    displaySlide(curr_slide);

});