// Define an asynchronous function to fetch user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create a <ul> element
        const userList = document.createElement('ul');
        
        // Loop through the users array
        users.forEach(user => {
            // Create a <li> element
            const listItem = document.createElement('li');
            
            // Set the text content of the <li> to the user’s name
            listItem.textContent = user.name;
            
            // Append the <li> to userList
            userList.appendChild(listItem);
        });
        
        // Append userList to dataContainer
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear existing content and display error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Fetch error:', error);
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
