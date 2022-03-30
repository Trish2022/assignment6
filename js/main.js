// HANDLE THE LOAD EVENT OF THE WINDOW

window.addEventListener('load', init);
    function init() {

// HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON

var btnAdd = window.document.getElementById("btnAddEmployee"); 

// OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP

btnAdd.addEventListener("click", function() {
    window.open("add-employee.html","addEmp", "resizeable=yes");
});
}
