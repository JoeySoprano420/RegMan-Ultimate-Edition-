document.getElementById('run').onclick = async function() {
    const code = document.getElementById('code').value;
    const outputElement = document.getElementById('output');

    outputElement.textContent = 'Running...';

    // Simulate Stayzia code execution
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
            outputElement.textContent = data.output;  // Display the output from Stayzia execution
        } else {
            outputElement.textContent = `Error: ${data.error}`; // Handle errors gracefully
        }
    } catch (error) {
        outputElement.textContent = `Network Error: ${error.message}`; // Handle network errors
    }
};

// Theme toggle functionality
const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});
