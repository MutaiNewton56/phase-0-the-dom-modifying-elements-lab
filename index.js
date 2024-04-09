// Write your code here!
// 1. Remove the existing 'main' element if it exists
const existingMain = document.querySelector('main#main');
if (existingMain) {
    existingMain.remove();
}

// 2. Create a new 'h1' element
const newHeader = document.createElement('h1');

// 3. Set the id attribute of the 'h1' element to 'victory'
newHeader.id = 'victory';

// 4. Set the text content of the 'h1' element to "YOUR-NAME is the champion"
const yourName = "YOUR-NAME"; // Replace "YOUR-NAME" with your actual name
newHeader.textContent = `${yourName} is the champion`;

// Append the new 'h1' element to the document body
document.body.appendChild(newHeader);
