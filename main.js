/*
1. The goal is to collect the circumference of a sphere at the equator and calculate how many rotations per minute it would take
for an object on its surface to reach light speed.
2. Secondary goal is to add the ability to call this from an api and return a varity of different answers depending on input.
*/
function calculate_rpm(){
    let size = form.circ_input.value;
    let c = 299792458;
    let rpm = (c / size) * 60;
    return(rpm);
}

//* When the button is clicked this function takes the value in the textbox and passes it to the function call that does the required math and trims it to three decimal points and then assigns it to the variable rpm_needed so that the value can be output to the page.

let form = document.forms.cform;
form.addEventListener('submit', event => {
  rpm_needed = calculate_rpm().toFixed(3);
  let to_change = document.getElementById('results');
  result_html = `In order for an object on the surface of this item to reach light speed it would have to be rotating at ${rpm_needed} rpm.`;
  to_change.innerHTML = result_html;
  event.preventDefault();
});
