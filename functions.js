/**
 * Created by Ollie on 05/05/2016.
 */

/* Change the title of navbar link item depending which one is passed */
function changeTitle(id) {
    "use strict";

    if (id === "nav-content") {
        document.getElementById(id).innerHTML = "HTML";
    }

    if (id === "nav-presentation") {
        document.getElementById(id).innerHTML = "CSS";
    }

    if (id === "nav-behaviour") {
        document.getElementById(id).innerHTML = "JavaScript";
    }
}

/* Return navbar link item text to original state */
function resetTitle(id) {
    "use strict";

    if (id === "nav-content") {
        document.getElementById(id).innerHTML = "Content";
    }

    if (id === "nav-presentation") {
        document.getElementById(id).innerHTML = "Presentation";
    }

    if (id === "nav-behaviour") {
        document.getElementById(id).innerHTML = "Behaviour";
    }
}

var sum;
var prev = 2;

/* Perform addition and append output to given element for JS demo */
function add(id) {
    "use strict";
    sum = prev + prev;
    document.getElementById(id).innerHTML = prev + " + " + prev + " = " + sum;
    prev = sum;
}

/* Reset given addition block to original state */
function reset(id) {
    "use strict";
    document.getElementById(id).innerHTML = prev + " + " + prev + " = ?";
}

/* Display current date to the given element */
function displayDate(id) {
    "use strict";
    document.getElementById(id).innerHTML = String(new Date());
}

/* Take inputs from demo form field, ensure not empty, and return to output element */
function processForm() {
    "use strict";
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;

    if (name === null || name === "" || age === null || age === "" || gender === null || gender === "") {
        alert("Must fill in all fields with valid inputs");
        return false;
    }

    document.getElementById("form-output").innerHTML = name + ", " + age + ", " + gender + ".";
}