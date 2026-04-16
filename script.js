// example: toggle project visibility
document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelector('.projects');
    projects.style.display = 'none';

    document.body.addEventListener('click', () => {
        projects.style.display = projects.style.display === 'none' ? 'block' : 'none';
    });
});
