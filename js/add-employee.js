// HANDLE THE LOAD EVENT OF THE WINDOW

window.addEventListener('load', init);
function init() {
    "use strict";

// SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
var width  = 800;
var height = 700;

// RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
window.resizeTo(width,height);

// MOVE THE POPUP TO THE MIDDLE OF THE SCREEN

window.moveTo(((window.screen.width - width) / 2), ((window.screen.height - height) / 2));

// CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM

const $ = (id) => document.getElementById(id);

// HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

var cancelBtn = $("cancel");
cancelBtn.addEventListener("click", function () {
window.close();
});

// CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
// SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

var id          = $("id");
var name        = $("name");
var extension   = $("extension");
var email       = $("email");
var department  = $("department");
var submitBtn   = $("submit");

// HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

submitBtn.addEventListener("click", (e) => {
e.preventDefault();
id          = id.value;
name        = name.value;
extension   = extension.value;
email       = email.value;
department  = department.value;

// GET THE LOGIN DETAILS OUTPUT ELEMENT FROM THE PARENT PAGE

let parentoutput = window.opener.document.getElementById("loginDetails");

// SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES


parentoutput.innerText = 
    `Employee ID: ${id} \n
     Name: ${name} \n
     Extension: ${extension} \n
     Email: ${email} \n
     Department: ${department} \n`
     window.close();
    });

// CLOSE THE POPUP
// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE
}
 // END LOAD EVENT OF WINDOW