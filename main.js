/*
1. The goal is to collect the circumference of a sphere at the equator and calculate how many rotations per minute it would take
for an object on its surface to reach light speed.
2. Secondary goal is to add the ability to call this from an api and return a varity of different answers depending on input.
*/
function calculate_rpm(){
    size = document.forms.circ_in.circ_input.value;
    c = 299792458;
    rpm_needed = (c / size) * 60;
    alert(rpm_needed);
}

/* let in_form = document.forms.circ-form;
in_form.addEventListener("submit", event => {
    event.preventDefault();
    alert("It works");
     */
let form = document.forms.circ_in;
form.addEventListener("submit", event => {
  console.log("Saving value", form.elements.value.value);
  event.preventDefault();
});

function test(){
    alert("It works");
}