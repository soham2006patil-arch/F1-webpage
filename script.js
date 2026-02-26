document.addEventListener('DOMContentLoaded', function () {
    // 1. Simulate Speed Telemetry
    const speedDisplay = document.querySelector('.speed-indicator');
    if (speedDisplay) {
        setInterval(() => {
            // F1 cars fluctuate between 210 and 220 in corners
            const currentSpeed = Math.floor(Math.random() * (220 - 210 + 1)) + 210;
            speedDisplay.innerText = currentSpeed;
        }, 800);
    }

    // 2. Initialize Tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (el) {
        return new bootstrap.Tooltip(el);
    });

    // 3. Popover for Legend Button
    const legendBtn = document.getElementById('legendBtn');
    if (legendBtn) {
        new bootstrap.Popover(legendBtn, {
            title: 'Legendary Perks',
            content: 'Includes Walk on the Grid, Champagne Podium Access, and Lifetime FIA Membership.',
            trigger: 'hover',
            placement: 'top'
        });
    }

    // 4. Form Validation
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
});