/**
 * Functions for supporting the Katari-Wolf site
 */


//  Load page resources
function loadPage(title)
{
    // Wait for html to load
    $(window).ready(function() 
    {
        // Load header and footer when body loads
        $("#header").load("components/header.html");
        $("#footer").load("components/footer.html");
    });
}   

//  Redirect to a page
function redirect(page)
{
    window.location.href = page;
}

//  Handle submission of contact form
function submitForm()
{
    // Remove form from page 
    document.getElementById("main").remove();
    
    // Add message to page
    let msg = document.createElement("h3");
    msg.setAttribute("id", "form-response");
    msg.textContent = "Thank you for your feedback!";

    document.getElementById("header").append(msg);
}