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
        qualifications: document.getElementById('qualifications').value.split(',').map(s => s.trim()),
        certifications: document.getElementById('certifications').value.split(',').map(s => s.trim()),
        experience: document.getElementById('experience').value.split(',').map(s => s.trim())
    };

    // Convert to Base64
    const encodedData = btoa(JSON.stringify(data));

    // Auto-generate shareable link
    const portfolioLink = `${window.location.origin}/portfolio.html?data=${encodedData}`;

    output.innerHTML = `
        <h2>Portfolio Link Generated!</h2>
        <p>Share this link with anyone:</p>
        <a href="${portfolioLink}" target="_blank">${portfolioLink}</a>
    `;
});
