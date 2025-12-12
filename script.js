const form = document.getElementById('portfolioForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const skills = document.getElementById('skills').value.split(',');
    const project = document.getElementById('project').value;
    const about = document.getElementById('about').value;
    const github = document.getElementById('github').value;
    const qualifications = document.getElementById('qualifications').value.split(',');
    const certifications = document.getElementById('certifications').value.split(',');
    const experience = document.getElementById('experience').value.split(',');

    function generateList(items) {
        return items.filter(item => item.trim() !== '')
                    .map(item => `<li>${item.trim()}</li>`).join('');
    }

    const portfolioHTML = `
        <h2>${name}</h2>

        <h3>About Me</h3>
        <p>${about}</p>

        <h3>Skills</h3>
        <ul>${generateList(skills)}</ul>

        <h3>Mini Project</h3>
        <p>${project}</p>

        <h3>GitHub</h3>
        <a href="${github}" target="_blank">${github}</a>

        <h3>Qualifications</h3>
        <ul>${generateList(qualifications)}</ul>

        <h3>Certifications</h3>
        <ul>${generateList(certifications)}</ul>

        <h3>Experience</h3>
        <ul>${generateList(experience)}</ul>
    `;

    output.innerHTML = portfolioHTML;
});
