const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signUpOverlayButton = document.getElementById('signUpOverlayButton');
const signInOverlayButton = document.getElementById('signInOverlayButton');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    setTimeout(() => {
        window.location.href = 'home.html'; // Redirect to userpage.html after animation
    }, 600); // Adjust timeout to match animation duration
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    setTimeout(() => {
        window.location.href = 'home.html'; // Redirect to userpage.html after animation
    }, 600); // Adjust timeout to match animation duration
});

signUpOverlayButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInOverlayButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});