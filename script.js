// Function to handle the menu toggle
function myFunction() {
    var x = document.getElementById("myTopnav");
    var menu = document.querySelector(".menu");
    var header = document.querySelector(".header");

    if (x.className === "navbar") {
        x.className += " responsive";
        menu.style.display = "flex";
        header.style.marginTop = menu.offsetHeight + "px";
    } else {
        x.className = "navbar";
        menu.style.display = "none";
        header.style.marginTop = 0;
    }
}

function toggleMenu(x) {
    x.classList.toggle("change");
}

// Smooth scrolling when clicking on menu items with the class "smooth-scroll"
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.smooth-scroll');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            const headerOffset = 75; // Adjust this value based on your header height
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skillProgressBars = document.querySelectorAll(".progress");

    // Function to update skill progress based on intersection
    function updateSkillProgress(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target.getAttribute("data-level");
                entry.target.style.width = skillLevel + "%";
            }
        });
    }

    // Create an Intersection Observer 
    const observer = new IntersectionObserver(updateSkillProgress, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1 // 10% of the element is visible
    });

    // Observe each skill progress bar
    skillProgressBars.forEach(bar => observer.observe(bar));
});