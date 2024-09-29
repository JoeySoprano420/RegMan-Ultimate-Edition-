document.getElementById('run').onclick = async function() {
    const code = document.getElementById('code').value;
    const outputElement = document.getElementById('output');

    outputElement.textContent = 'Running...';

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
            outputElement.textContent = data.output;  // Display Stayzia execution result
        } else {
            outputElement.textContent = `Error: ${data.error}`;
        }
    } catch (error) {
        outputElement.textContent = `Network Error: ${error.message}`;
    }
};
