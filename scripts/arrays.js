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

const tableDisplayed = false;

//  Function to run when page is loaded
function onLoad()
{
    //  Load staff menu
    loadStaffMenu();

    //  Check if buttons should be disabled
    if (names.length == 0 || salaries.length == 0)
    {
        //  Disable display buttons
        enableInput('result-btn', false);
        enableInput('table-btn', false);
    }

    //  Disable add button until data is entered
    enableInput('add-btn', false);
}

// Enable or disable an input given its id
function enableInput(inputId, enabled)
{
    // Get button from DOM
    var input = document.getElementById(inputId);

    // Toggle button
    input.disabled = !enabled;
}

//  Clear all inputs
function clearInputs()
{
    //  DOM elements
    var menu = document.getElementById("staff-menu");
    var nameBox = document.getElementById("new-name");
    var salBox = document.getElementById("new-salary");

    // Set menu selection to last element (i.e '')
    menu.selectedIndex = 0;

    //  Clear text boxes
    nameBox.value = "";
    salBox.value = "";

    //  Disable add button
    enableInput('add-btn', false);

    //  Enable all input boxes
    enableInput('staff-menu', true);
    enableInput('new-name', true);
    enableInput('new-salary', true);
}

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

    // Check if either box is empty
    if(nameVal || salaryVal)
    {
        enableInput('staff-menu', false);
    }
    else {
        enableInput('staff-menu', true);
    }
    
    // Check if Add button needs to be enabled
    if(nameVal || salaryVal || menu.value)
    {
        enableInput('add-btn', true);
    }
}

//  Disable text boxes (if menu select made)
function disableTxtBoxes()
{
    var menuSel = document.getElementById("staff-menu").value;
    var name = document.getElementById("new-name").value;
    var salary = document.getElementById("new-salary").value;
    var addBtn = document.getElementById("add-btn");

    if(menuSel)
    {
        enableInput('new-name', false);
        enableInput('new-salary', false);
    }
    else{
        enableInput('new-name', true);
        enableInput('new-salary', true);
    }
    
    // Check if Add button needs to be enabled
    if(name || salary || menuSel)
    {
        enableInput('add-btn', true);
    }
}

//  Validate inputs
function validateInputs(type)
{
    //  Get values from inputs
    var menuSel = document.getElementById("staff-menu").value;
    var nameVal = document.getElementById("new-name").value;
    var salaryVal = document.getElementById("new-salary").value;

    //  Check input type
    if(type='text')
    {
        // Ensure both name and salary have been entered
        if((nameVal && !salaryVal) || (!nameVal && salaryVal))
        {
            return 0;
        }
        //  Valid input
        else {
            return 1;
        }
    }
    else if(type='menu')
    {
        // Ensure menu selection is not empty
        if(menuSel)
        {
            return 1;
        }
        else {
            return 0;
        }
    }

}

//  Add person/salary pair to list
function add()
{
    //  DOM elements
    var nameBox = document.getElementById("new-name");
    var salBox = document.getElementById("new-salary");
    var menu = document.getElementById("staff-menu");


    //  Check input type
    if(menu.disabled)
    {
        //  Validate input coming from text boxes
        if(validateInputs('text'))
        {
            //  Get values from text boxes
            let name = nameBox.value;
            let salary = salBox.value;

            //  Check if person is already in list
            if(names.includes(name))
            {
                alert('Error: ' + name + ' is already in the table');
                clearInputs();
            }
            else {
                //  Add name and salary to lists
                names.push(name);
                salaries.push(salary);

                // Enable display buttons
                enableInput('result-btn', true);
                enableInput('table-btn', true);

                // Clear all input fields
                clearInputs();

                // Get status element, clear, add message
                let status = document.getElementById("status");
                status.innerHTML = "";
                let msg = document.createElement("h3");
                msg.innerHTML = name + " added!";

                status.appendChild(msg)
            }
        }
    }
    //  Input coming from drop-down menu
    else {
        //  Validate input coming from menu
        if(validateInputs('menu'))
        {
            //  Get employee from selection
            let name = menu.options[menu.selectedIndex].text;

            //  Check if person is already in list
            if(names.includes(name))
            {
                alert('Error: ' + name + ' is already in the table');
                clearInputs();
            }
            else {
                //  Add employee data from staff to lists
                let salary = staff[name];
                names.push(name);
                salaries.push(salary);

                // Enable display buttons
                enableInput('result-btn', true);
                enableInput('table-btn', true);

                // Clear all input fields
                clearInputs();

                // Get status element, clear, add message
                let status = document.getElementById("status");
                status.innerHTML = "";
                let msg = document.createElement("h3");
                msg.innerHTML = name + " added!";

                status.appendChild(msg)
            }
        }
    }

    // Check if results should be re-computed and re-rendered
    let results = document.getElementById("results");

    if(!results.innerHTML === "")
    {
        // Click result button 
        displayResults();
    }

    // Append entry to table
    if(tableDisplayed)
    {
        displayTable()
    }
    

    //alert('Size of array: ' + salaries.length);
}

//  Display table (displaySalary)
function displayTable()
{
    var table = document.getElementById("results_table");
    table.innerHTML="";

    // Add title
    document.getElementById("table-title").innerHTML = "";
    var title = document.createElement("h2");
    title.innerHTML = "Salary Table"
    title.setAttribute("class", "section-title");
    document.getElementById("table-title").appendChild(title);

    //  Build table

    // Build table headers
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    var h1 = document.createElement("th");
    var h2 = document.createElement("th");

    h1.setAttribute("class", "table-header");
    h2.setAttribute("class", "table-header");
    h1.style.color = "whitesmoke"
    h2.style.color = "whitesmoke";
    h1.innerHTML = "Name";
    h2.innerHTML = "Salary";

    // Add headers to row; add row to thead; add head to table
    tr.appendChild(h1);
    tr.appendChild(h2);
    thead.appendChild(tr);
    table.appendChild(thead);

    // Create table body
    let tbody = document.createElement("tbody");
    tbody.setAttribute("class", "txt-center");

    // Loop through name/salaries and append to table
    for(let i = 0; i < names.length; i++)
    {
        let name = names[i];
        let salary = salaries[i];

        // Create table row
        let trow = document.createElement("tr");
        trow.style.color = "whitesmoke";

        // Create table entries and add to row
        let tname = document.createElement("td");
        let tsalary = document.createElement("td");
        

        tname.innerHTML = name;
        tname.style.color = "black";
        tsalary.innerHTML = "$" + salary.toLocaleString();
        tsalary.setAttribute("class", "salary");
        

        trow.appendChild(tname);
        trow.appendChild(tsalary);

        // Append row to table body
        tbody.appendChild(trow);
    }

    // Add table body to table
    table.appendChild(tbody);

    tableDisplayed = true;
}

//  Display results
function displayResults()
{
    //  Compute max of data
    let maxSal = Math.max(...salaries);
    let meanSal = 0.0;

    // Loop through salaries
    for(let i = 0; i < salaries.length; i++)
    {
        // Skip bradchat
        if(!(names[i] == "Brad Chadington"))
        {
            //  Sum salaries
            meanSal += salaries[i];
        }
        
    }

    //  Compute average
    meanSal /= salaries.length;

    // Add DOM elements
    let header = document.createElement("h2");
    let average = document.createElement("p");
    let max = document.createElement("p");

    // Set text properties
    header.innerHTML = "Average Salary & Highest Paid Salary";
    average.innerHTML = "Average Salary: $" + meanSal;

    // Check maxSal
    if(!isNaN(maxSal))
    {
        max.innerHTML = "Highest Salary: $" + maxSal;
    }
    else {
        // Check for bradchad
        if(names.includes("Brad Chadington"))
        {
            max.innerHTML = "Brad Chad has no need for money. We pay him in " + staff["Brad Chadington"];
        }
        else {
            alert("Unexpected error occurred while computing max salary!");
        }
    }
    

    // Get results div
    let results = document.getElementById("results");
    
    // Clear results for re-rendering
    results.innerHTML = "";

    // Add new DOM nodes to results
    results.appendChild(header);
    results.appendChild(average);
    results.appendChild(max);

    results.style.marginBottom = "100px";
}