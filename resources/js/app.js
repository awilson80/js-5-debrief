// Your application should meet the requirements listed below:
// 1. Selects from a pool of at least ten names of your classmates.
// 2. A 'Generate Random Names' button that initiates the selection of 4 random names.
// 3. The selected random names are displayed to the browser.
// 4. Each time the Generate Random Names button is pressed, a new set of names appears 
//    (replacing the previous set of 4 random names)
// 5. A button named 'Clear' that removes the populated list from the screen
// 6. The application should be designed to be visually pleasing. 
// Note: Do not spend too much time on design. Focus primarily on functionality(i.e. steps 1-5).

const names = ['Alyssa', 'Raven', 'Yannick', 'Anthony', 'Martin', 'Alexandra', 'Hector', 'Perom', 'Kaleab', 'Willis'];

const getNameButton = document.getElementById('randomNamesButton');
const clearButton = document.getElementById('clearButton');
const namesList = document.getElementById('namesList');

// Function creating list items as 4 names from names array populate list div

const clearBox = () => {
  namesList.innerHTML = '';
};

let generateRandomName = () => {
    clearBox();
    let i = 0;
    while (i < 4) {

        let randomName = names[Math.floor(Math.random()*names.length)];

        let listItem = document.createElement("li");
        listItem.id = 'nameListItem'
        listItem.innerHTML = randomName // Result of the while loop - delivers a random name
        namesList.appendChild(listItem);

      i++;

    }
};

getNameButton.onclick = generateRandomName;

clearButton.onclick = clearBox;

