document.addEventListener('DOMContentLoaded', function () {
    // ...previous script code...
    const changeTitleButton = document.getElementById('change-title');
    const titleHeading = document.getElementById('title-heading');

    changeTitleButton.addEventListener('click', function () {
        titleHeading.textContent = 'New Title';
    });

    const footerLogo = document.getElementById('footer-logo');
    const footerText = document.getElementById('footer-text');

    footerLogo.addEventListener('click', function () {
        if (footerText.style.display === 'none') {
            footerText.style.display = 'block';
        } else {
            footerText.style.display = 'none';
        }
    });
});
