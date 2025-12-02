// Optional backend logic wrapper for fetching data
// This could be used in serverless functions or as a utility

async function fetchData(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error("Fetch failed");
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}

// Example usage:
// fetchData('/api/data.json').then(data => console.log(data));

module.exports = { fetchData };