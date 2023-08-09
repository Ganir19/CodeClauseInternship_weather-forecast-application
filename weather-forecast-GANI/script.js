// Function to handle the search
function search() {
    const apiKey = '579b464db66ec23bdd000001751fb294ddb8437e754bfb9c7b465e90';
    const apiUrl = 'https://api.data.gov.in/resource/44bea382-c525-4740-8a07-04bd20a99b52?api-key=579b464db66ec23bdd000001751fb294ddb8437e754bfb9c7b465e90&format=json&limit=10';
    const searchQuery = document.getElementById('searchInput').value;

    // Check if the search query is not empty
    if (searchQuery.trim() !== '') {
        const url = `${apiUrl}?key=${apiKey}&q=${encodeURIComponent(searchQuery)}`;

        // Make an API request using fetch
        fetch(url)
            .then(response => response.json())
            .then(data => displayResults(data))
            .catch(error => console.error('Error fetching data:', error));
    } else {
        alert('Please enter a search query.');
    }
}

// Function to display the results
function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Process the data returned from the API and display it in the resultsDiv
    // Example: You could loop through the data and create HTML elements to show the results.
    // For simplicity, we'll just display the raw JSON data as a string.
    resultsDiv.innerText = JSON.stringify(data, null, 2);
}
