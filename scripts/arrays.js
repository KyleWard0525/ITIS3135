//  Scripts for arrays.html

// Dictionary of employees and their monthly salaries
const staff = {
    'Michael Mutex': 15000,
    'Alita Vram': 8000,
    'Tracy Threadripper': 22000,
    'Colin Hypercore': 10000,
    'Julius Caesar': 9750,
    'Suzan Ciesanas': 6500,
    'Doug Dimmadome': 50000,
    'Brad Chadington': 'Blood of the Ancient Gods'
};


// Arrays to add data to
const names = [];
const salaries = [];

// Is table being displayed
const tableDisplayed = false;

// Disable tokens for inputs
const menuDisable = false;
const txtboxDisable = false;

//  Populate dropdown box with names of employees
function loadStaffMenu()
{
    //  Get dropdown menu (select box)
    var menu = document.getElementById("staff-menu");

    // Loop through staff
    for(let i = 0; i < Object.keys(staff).length; i++)
    {
        //  Create DOM node for selection
        var staffMember = document.createElement("option");

        //  Set properties of select node
        staffMember.text = Object.keys(staff)[i];
        staffMember.value = staff[i];

        //  Add to menu
        menu.appendChild(staffMember);
    }

    //  Add empty selection
    menu.appendChild(document.createElement("option"));
}

//  Disable menu (if either text box is not empty)
function disableMenu()
{
    var nameVal = document.getElementById("new-name").value;
    var salaryVal = document.getElementById("new-salary").value;

    //  Get dropdown menu (select box)
    var menu = document.getElementById("staff-menu");

    if(nameVal || salaryVal)
    {
        menu.disabled = true;
    }
    else {
        menu.disabled = false;
    }
    
}

//  Disable text boxes (if menu select made)
function disableTxtBoxes()
{
    var menuSel = document.getElementById("staff-menu").value;
    var nameBox = document.getElementById("new-name");
    var salBox = document.getElementById("new-salary");

    if(menuSel)
    {
        nameBox.disabled = true;
        salBox.disabled = true;
    }
    else{
        nameBox.disabled = false;
        salBox.disabled = false;
    }
    
}

//  Validate inputs
function validateInputs()
{
    //  Get values from inputs
    var menuSel = document.getElementById("staff-menu").value;
    var nameVal = document.getElementById("new-name").value;
    var salaryVal = document.getElementById("new-salary").value;

    //  Check if at least one input is not empty
    if(menuSel)
    {
        return 1;
    }
    else {
        //  Name w/o salary or salary w/o name
        if((nameVal && !salaryVal) || (!nameVal && salaryVal))
        {
            return 0;
        }
        //  Valid input
        else {
            return 1;
        }
    }

}