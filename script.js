// script.js

// Dynamically add projects
const projects = [
    {
        title: "Thrift Pop-Up Store",
        description: "An on-campus initiative I manage for CKG Market.",
        link: "https://example.com/thrift-store"
    },
    {
        title: "Startup Idea Tracker",
        description: "A JavaFX application for managing business ideas.",
        link: "https://example.com/startup-ideas"
    }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">Learn More</a>
    `;
    projectList.appendChild(projectDiv);
});

// Handle contact form submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset();
});
