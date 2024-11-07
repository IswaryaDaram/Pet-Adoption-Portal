// Sample pet data to display in the portal
const pets = [
    {
        name: "Buddy",
        type: "Dog",
        age: 3,
        breed: "Labrador",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Whiskers",
        type: "Cat",
        age: 2,
        breed: "Siamese",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Nibbles",
        type: "Rabbit",
        age: 1,
        breed: "Angora",
        image: "https://via.placeholder.com/150"
    },
    // Add more pets as needed
];

// Function to display pets on the page
function displayPets() {
    const container = document.getElementById('pets-container');
    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.classList.add('pet-card');
        
        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Type: ${pet.type}</p>
            <p>Age: ${pet.age} years</p>
            <p>Breed: ${pet.breed}</p>
            <button onclick="adoptPet('${pet.name}')">Adopt Me!</button>
        `;
        
        container.appendChild(petCard);
    });
}

// Function to handle pet adoption
function adoptPet(petName) {
    alert(`Thank you for your interest in adopting ${petName}! Please contact your local shelter for more details.`);
}

// Initialize the display when page loads
window.onload = displayPets;
