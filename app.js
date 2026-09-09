// ===============================
// Contact Form Validation
// ===============================

const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {
        alert("Please fill in all fields.");
        messageBox.textContent = "";
        return;
    }

    messageBox.textContent = "✅ Your message has been sent successfully! Thank you for contacting me.";
    messageBox.style.color = "#22d3ee";

    form.reset();

});


function openProject(projectId) {
    document.getElementById(projectId).style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeProject() {
    document.querySelectorAll(".project-modal").forEach(function(modal) {
        modal.style.display = "none";
    });

    document.body.style.overflow = "auto";
}

document.querySelectorAll(".project-modal").forEach(function (modal) {
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeProject();
        }
    });
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeProject();
    }
});

// ===============================
// Back to Top Button
// ===============================

const backToTopBtn = document.getElementById("backToTop");
const headerEl = document.querySelector(".header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }

    if (headerEl) {
        headerEl.classList.toggle("scrolled", window.scrollY > 10);
    }
});

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===============================
// Active Nav Link on Scroll
// ===============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const navObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === "#" + entry.target.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    },
    { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach(function (section) {
    navObserver.observe(section);
});