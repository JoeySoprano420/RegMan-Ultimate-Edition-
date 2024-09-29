document.getElementById('run').onclick = async function() {
    const code = document.getElementById('code').value;
    const outputElement = document.getElementById('output');

    outputElement.textContent = 'Running...';

    // Code execution logic here
    try {
        const response = await fetch('/run', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code: code })
        });

        const data = await response.json();

        if (response.ok) {
            outputElement.textContent = data.output;  // Display output
        } else {
            outputElement.textContent = `Error: ${data.error}`; // Error handling
        }
    } catch (error) {
        outputElement.textContent = `Network Error: ${error.message}`; // Network error handling
    }
};
const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});
