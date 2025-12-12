const form = document.getElementById('portfolioForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById('name').value.trim(),
        skills: document.getElementById('skills').value.split(',').map(s => s.trim()),
        project: document.getElementById('project').value.trim(),
        about: document.getElementById('about').value.trim(),
        github: document.getElementById('github').value.trim(),
        qualifications: document.getElementById('qualifications').value.split(',').map(s => s.trim()).filter(Boolean),
        certifications: document.getElementById('certifications').value.split(',').map(s => s.trim()).filter(Boolean),
        experience: document.getElementById('experience').value.split(',').map(s => s.trim()).filter(Boolean)
    };

    // URL-safe Base64 encode
    const encodedData = btoa(JSON.stringify(data))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

    // Relative link to portfolio.html
    const portfolioLink = `portfolio.html?data=${encodedData}`;

    output.innerHTML = `
        <h2>Portfolio Link Generated!</h2>
        <p>Share this link with anyone:</p>
        <a href="${portfolioLink}" target="_blank">${portfolioLink}</a>
    `;
});
