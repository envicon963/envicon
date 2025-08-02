/* JavaScript for interactive elements */

// Function to toggle the dropdown menu
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.closest('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Sticky Header functionality
window.addEventListener('scroll', () => {
    const header = document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
});