/**
 * Functions for supporting the Katari-Wolf site
 */


//  Load page resources
function loadPage()
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
    // Get input from form
    let name = document.getElementById("name-box").value;
    let email = document.getElementById("email-box").value;

    // Remove form from page 
    document.getElementById("main").remove();
    
    // Add message to page
    let msg = document.createElement("h3");
    msg.setAttribute("id", "form-response");
    msg.textContent = "Thank you, " + name + " for your feeback! We will review it carefully and send a reply to " + email;

    document.getElementById("header").append(msg);
}