document.getElementById('run').onclick = async function() {
    const code = document.getElementById('code').value;
    const outputElement = document.getElementById('output');

    outputElement.textContent = 'Running...';

    // Simulate Stayzia code execution (replace with actual backend integration)
    try {
        const result = await mockRunStayziaCode(code);
        outputElement.textContent = result.output || "No output generated.";
    } catch (error) {
        outputElement.textContent = `Error: ${error.message}`;
    }
};

// Mock function to simulate Stayzia execution
async function mockRunStayziaCode(code) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (code.trim() === "") {
                reject(new Error("No code entered. Please write some Stayzia code."));
            } else {
                resolve({ output: `Executed Stayzia code:\n${code}` });
            }
        }, 1000);
    });
}

// Theme toggling (dark/light mode)
const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});
