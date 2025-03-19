//To Fetch data from the backend API
/*
async function fetchData() {
    try {
       //new one that needs to be applied.
       const response = await fetch('https://zooproject-aqbue2e2e3cbh9ek.centralus-01.azurewebsites.net/api/data');
        
       //works but is empty
       //const response = await fetch('http://localhost:3000/api/data'); // Fetch from backend
        const data = await response.json();

        const list = document.getElementById('data-list'); // Make sure your HTML has <ul id="data-list">
        list.innerHTML = ""; // Clear old data

        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `ID: ${item.id} - Name: ${item.name}`; // Modify based on DB columns
            list.appendChild(li);
        });
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

// Run fetchData() when the page loads
window.onload = fetchData;

//testing
//Default domain:  zooproject-aqbue2e2e3cbh9ek.centralus-01.azurewebsites.net

*/
const localAPI = "http://localhost:8080/api/data"; // Now using port 8080
const azureAPI = "https://zooproject-aqbue2e2e3cbh9ek.centralus-01.azurewebsites.net/api/data"; // Azure backend

// Detect environment dynamically
const API_URL = window.location.hostname === "localhost" ? localAPI : azureAPI;

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log("Fetched data:", data);
        document.getElementById("output").innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error("Error fetching data:", error));

