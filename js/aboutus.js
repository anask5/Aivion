fetch("footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });


// -----------------------------------------------------------------------

const buttons = document.querySelectorAll('.container-name button');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();

        const dropdown = this.nextElementSibling;
        dropdown.classList.toggle('show');
    });
});
const toggleBtn = document.getElementById('communityToggle');
const allDropdowns = document.querySelectorAll('.container-name .dropdown');

let allOpen = false;

toggleBtn.addEventListener('click', function(e) {
    e.preventDefault();

    allOpen = !allOpen;

    allDropdowns.forEach(drop => {
        drop.classList.toggle('show', allOpen);
    });
});