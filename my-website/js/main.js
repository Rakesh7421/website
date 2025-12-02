const container = document.getElementById("data-container");

async function loadData() {
    try {
        // Try to fetch from backend API
        const response = await fetch("/api/data.json"); // Can be replaced with real API
        if (!response.ok) throw new Error("Backend not available");
        const data = await response.json();
        container.textContent = "Backend Data: " + JSON.stringify(data);
    } catch (error) {
        // Fallback to static content
        container.textContent = "Static Content: Hello, visitor!";
    }
}

loadData();