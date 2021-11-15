const btn = document.querySelector('.data-toggle-btn');
    const input = document.querySelector('.data-input');

    btn.addEventListener("click", function() {
        navigator.clipboard.writeText(input.value);
        btn.innerHTML = 'Copied';
    });
    function Change() {
        btn.innerHTML = 'Copy';
    }