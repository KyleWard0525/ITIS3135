/**
 * Functions for javascript demo page
 */
// Required data for the page
const pageData = {
    username: '',
    userVibe: '',
    date: '',
    currTime: '',
    companyName: 'Katari-Wolf',
    ratings: [],
    warned: false
};

update = true;

const stop = () => {update = false};




/**
 *  Update current time
 * 
 * This function should most likely be called
 * every 1 second to update displayed time
 */ 
function updateTime()
{
    // Get data and build current time as a string
    let today = new Date();
    let h = ''

    if(today.getHours() > 12)
    {
        h = today.getHours() - 12;
    }
    else {
        h = today.getHours()
    }

    let time = h + ":" + today.getMinutes() + ":" + today.getSeconds();

    // Update current time
    pageData.currTime = time;

    // Check if time label exists yet
    if(document.getElementById("date-time"))
    {
        
        // Remove previous data-time section and add updated section
        document.getElementById("date-time").remove();


        //  Select user info section of page
        var pageSection = document.getElementById("user-info-section");
        
        //  Create new p node and add text to it
        var datePara = document.createElement("P");
        var dateText = document.createTextNode("Today is " + pageData.date + ", and the current time is: " + pageData.currTime);
        
        //  Add text and set attributes
        datePara.appendChild(dateText);
        datePara.setAttribute('class', 'txt-center');
        datePara.setAttribute('id', 'date-time');
        
        //  Add new section to page
        pageSection.appendChild(datePara);
    }
}

//  Get necessary page data
function getPageData()
{
    let today = new Date();

    //  Get date and time before prompting user, in case they're slow
    pageData.date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
    updateTime();

    if(pageData.username == "")
    {
        // Prompt user for info
        pageData.username = prompt("Hello! What is your name?", "John Doe");
        pageData.userVibe = prompt("Nice to meet you, " + pageData.username + "!\nHow are you today?", "Great!");
    }
    
}

//  Render user info section of page with pageData
function renderUserSection()
{
    //  Get page data
    getPageData();

    //  Select user info section of page
    var pageSection = document.getElementById("user-info-section");
    
    //  Add time information
    var datePara = document.createElement("P");
    var spacer = document.createElement("HR");
    var dateText = document.createTextNode("Today is " + pageData.date + ", and the current time is: " + pageData.currTime);

    spacer.setAttribute("class", "px50");
    
    //  Add spacer and text to p node
    datePara.appendChild(spacer);
    datePara.appendChild(dateText);
    datePara.setAttribute('class', 'txt-center');
    datePara.setAttribute('id', 'date-time');
    
    //  Add node and spacer to page
    pageSection.appendChild(datePara);
    pageSection.appendChild(spacer);


    //  Add welcome message
    var welcomeP = document.createElement("P");
    var welcomeMsg = '';

    welcomeMsg += pageData.companyName + " welcomes you, " + pageData.username + "!\n" + " We're glad you're doing '" + pageData.userVibe + "'!";

    // Add message to p node and set attributes
    welcomeP.innerHTML = welcomeMsg;
    welcomeP.setAttribute('class', 'txt-center');

    // Add to page
    pageSection.appendChild(welcomeP);

}
setInterval(updateTime, 1000);


//  Generate and display random number
function randNum()
{
    let num = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1) + 1);
    alert("Random number: " + num);
}

//  Download doge
function downloadDoge()
{
    document.getElementById("download-doge").click();
}

//  Open dog picture
function happy()
{
    window.open("https://www.google.com/search?q=dog&rlz=1C1CHBF_enUS864US864&source=lnms&tbm=isch&sa=X&ved=2ahUKEwib2f6otpPzAhWoVzABHWTbB8UQ_AUoAXoECAEQAw&biw=1920&bih=975&dpr=1#imgrc=SMMlmWDadP14fM");
}

//  Give this page a rating out of 5
function ratePage()
{
    let userRating = prompt("How would you rate this webpage from 1 star to 5 stars?\n");

    //  Error check input
    if(userRating < 1 || userRating > 5)
    {
        alert("Error! Rating must be a number between 1 and 5");
        ratePage();
    }
    else{

        if(userRating < 4)
        {
            alert("Thank you for your feedback! We will review it carefully.");
            delete userRating;
        }
        else {
            alert("Thank you for your feedback!");
            pageData.ratings.push(userRating);
        }
    }
}

//  Rapidly change the background color and text color on the page
function colors()
{
    let delay = 250;    //  250ms

    if(!pageData.warned)
    {
        let conf = confirm("WARNING: This feature will cause rapid flashing and changing colors!\n" +
                        "If you are prone to photosensitivity, please do not use this feature.\n" +
                        "Otherwise, click OK to continue.");
        pageData.warned = true;

        //  Check if user is ok with enabling this feature
        if(conf)
        {
            var randomBGColor = Math.floor(Math.random()*16777215).toString(16);
            var randomTextColor = Math.floor(Math.random()*16777215).toString(16);

            document.body.style.backgroundColor = '#'+randomBGColor
            document.body.style.color = '#'+randomTextColor;

            setInterval(colors, delay);
        }
        else {
            return;
        }
    }
    
    var randomBGColor = Math.floor(Math.random()*16777215).toString(16);
    var randomTextColor = Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = '#'+randomBGColor
    document.body.style.color = '#'+randomTextColor;
}