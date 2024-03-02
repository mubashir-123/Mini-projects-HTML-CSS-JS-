// // Define specific coordinates for the four spots
// const icons = document.querySelectorAll('.icon img');
// const positions = [
//     { x: 20, y: 40 }, // Top-left corner
//     { x: 31.5, y: 48 }, // Top-right corner
//     { x: 63.5, y: 46 }, // Bottom-left corner
//     { x: 74.5, y: 37 }  // Bottom-right corner
// ];

// // Counter to keep track of the current position index
// let currentPositionIndex = 0;
// let currentIndex = 0;
// let filledPositions = 0;

// // Function to handle image click event
// function handleClick(event) {
//     //  // Check if all positions are filled
//     //  if (filledPositions >= positions.length) {
//     //     // All positions are filled, ignore further clicks
//     //     return;
//     // }
//     // Get the clicked image
//     const clickedImage = event.target;

//     // Clone the clicked image
//     const clonedImage = clickedImage.cloneNode(true);

//     // Remove the clicked image from its initial position
//     clickedImage.remove();

//     // Get the coordinates of the spot
//     const { x, y } = positions[currentPositionIndex];

//     // Apply CSS properties to the cloned image
//     clonedImage.style.position = 'absolute'; // Set position to absolute
//     clonedImage.style.left = x + '%'; // Set left position
//     clonedImage.style.top = y + '%'; // Set top position
//     clonedImage.style.width = '8%'; // Set width
//     clonedImage.style.height = 'auto'; // Maintain aspect ratio, adjust height automatically

//      // Increment the position index or reset to 0 if it reaches the end
//      currentPositionIndex = (currentPositionIndex + 1) % positions.length;
    
//      // Increment currentIndex
//      currentIndex++;

//       // Increment filledPositions
//       filledPositions++;

//     // Append the cloned image to the main container
//     const mainContainer = document.querySelector('.main');
//     mainContainer.appendChild(clonedImage);
// }

// // Add click event listener to each image
// icons.forEach(icon => {
//     icon.addEventListener('click', handleClick);
// });


























// Define specific coordinates for the four spots
const icons = document.querySelectorAll('.icon img');
const positions = [
    { x: 20, y: 40 }, // Top-left corner
    { x: 31.5, y: 48 }, // Top-right corner
    { x: 63.5, y: 46 }, // Bottom-left corner
    { x: 74.5, y: 37 }  // Bottom-right corner
];

// Counter to keep track of the current position index
let currentPositionIndex = 0;
let filledPositions = 0;

// Function to handle image click event
function handleClick(event) {
    // Get the clicked image
    const clickedImage = event.target;

    // Clone the clicked image
    const clonedImage = clickedImage.cloneNode(true);

    // Remove the clicked image from its initial position
    clickedImage.style.visibility = 'hidden';

    // Get the coordinates of the spot
    const { x, y } = positions[currentPositionIndex];

    // Apply CSS properties to the cloned image
    clonedImage.style.position = 'absolute'; // Set position to absolute
    clonedImage.style.left = x + '%'; // Set left position
    clonedImage.style.top = y + '%'; // Set top position
    clonedImage.style.width = '8%'; // Set width
    clonedImage.style.height = 'auto'; // Maintain aspect ratio, adjust height automatically

    // Increment the position index or reset to 0 if it reaches the end
    currentPositionIndex = (currentPositionIndex + 1) % positions.length;

    // Increment filledPositions
    filledPositions++;

    // Check if all positions are filled
    if (filledPositions >= positions.length) {
        // All positions are filled, hide remaining images
        icons.forEach(icon => {
            if (icon !== clickedImage) {
                icon.style.visibility = 'hidden';
            }
        });
    }

    // Append the cloned image to the main container
    const mainContainer = document.querySelector('.main');
    mainContainer.appendChild(clonedImage);
}

// Add click event listener to each image
icons.forEach(icon => {
    icon.addEventListener('click', handleClick);
});





































