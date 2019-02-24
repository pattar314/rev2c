/*
1. The goal is to collect the circumference of a sphere at the equator and calculate how many rotations per minute it would take
for an object on its surface to reach light speed.
2. Secondary goal is to add the ability to call this from an api and return a varity of different answers depending on input.
*/

let in_form = document.getElementById("#circ-form");
in_form.addEventListener("submit", event => {
    alert("It works");
    let size = in_form.elements.circ_in.value;
    event.preventDefault();
    let c = 299792458;
    let rpm_needed = (c / size);
    let solution = document.getElementById("#results");
    solution.elements = "It worked";
});