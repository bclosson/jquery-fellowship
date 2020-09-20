console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const $newSec1 = $('<section id="middle-earth"></section>');
  // 2. append the section to the body of the DOM.
  $('body').append($newSec1);
  // 3. use a for loop to iterate over the lands array that does the following:
for (let i = 0; i < lands.length; i++) {
  if (lands[i] === lands[0]){
    const $shire = $('<article id="the-shire"><h1>The Shire</h1></article>');
    $('section').append($shire);
  }else if (lands[i] === lands[1]) {
    const $rivendell = $('<article id="rivendell"><h1>Rivendell</h1></article>');
    $('section').append($rivendell);
  }else if (lands[i] === lands[2]) {
    const $mordor = $('<article id="mordor"><h1>Mordor</h1></article>');
    $('section').append($mordor);
  }
}
  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');

  // 1. display an unordered list of the hobbits in the shire.
const $hobbits = $('<ul id="shire-folk"></ul');
$('#the-shire').append($hobbits);
  // 2. give each hobbit a class of "hobbit"
for (let i = 0; i < hobbits.length; i++) {
  if (hobbits[i] === hobbits[0]) {
    const $frodo = $('<li class="hobbit">Frodo Baggins</li>');
    $('#shire-folk').append($frodo);
  }else if (hobbits[i] === hobbits[1]) {
    const $sam = $('<li class="hobbit">Samwise "Sam" Gamgee</li>');
    $('#shire-folk').append($sam);
  }else if (hobbits[i] === hobbits[2]) {
    const $merry = $('<li class="hobbit">Merindoc "Mary" Brandybuck</li>');
    $('#shire-folk').append($merry);
  }else if (hobbits[i] === hobbits[3]) {
    const $pippin = ('<li class="hobbit">Peregrin "Pippin" Took</li>');
    $('#shire-folk').append($pippin);
  }
}
  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'
const $ring = ('<div id="the-ring"></div>');
$('.hobbit')[0].append($ring);
  // 2. add the ring as a child of Frodo
// $('.hobbits(0)').append($ring);
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor
const $baddy = $('<ul class="bad-guys"></ul>');
$('.mordor').append($baddy);

for (let i = 0; i < baddies.length; i++) {
  if (baddies[i] === baddies[0]) {
    const $sauron = $('<li class="baddy">Sauron</li>');
    $('#mordor').append($sauron);
  }else if (baddies[i] === baddies[1]) {
    const $saruman = $('<li class="baddy">Saruman</li>');
    $('#mordor').append($saruman);
  }else if (baddies[i] === baddies[2]) {
    const $urukHai = $('<li class="baddies">The Uruk-hai</li>');
    $('#mordor').append($urukHai);
  }else if (baddies[i] === baddies[3]) {
    const $orcs = $('<li class="baddies">Orcs</li>');
    $('#mordor').append($orcs);
  }
}
  // 2. give each of the baddies a class of "baddy"

  // 3. remember to append them to Mordor
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor
const $buddy = $('<aside id="buddy"></aside>');
$('#middle-earth').append($buddy);
  // 2. display an unordered list of buddies in the aside
const $buddies = $('<ul></ul>');
for (let i = 0; i < buddies.length; i++) {
  if (buddies[i] === buddies[0]) {
    const $gandolf = $('<li class="buddy">Gandolf the Grey</li>');
    $('#buddy').append($gandolf);
  }else if (buddies[i] === buddies[1]) {
    const $legolas = $('<li class="buddy">Legolas</li>');
    $('#buddy').append($legolas);
  }else if (buddies[i] === buddies[2]) {
    const $gimli = $('<li class="buddy">Gimli</li>');
    $('#buddy').append($gimli);
  }else if (buddies[i] === buddies[3]) {
    const $strider = $('<li class="buddy">Strider</li>');
    $('#buddy').append($strider);
  }else if (buddies[i] === buddies[4]) {
    const $boromir = $('<li class="buddy">Boromir</li>');
    $('#buddy').append($boromir);
  }
}
  // 3. give each of the buddies a class of "buddy"

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"

  // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'

  // 2. add an h1 with the text 'The Fellowship' to this new div

  // 3. append the fellowship to middle-earth

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'

  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  // 2. add a div with an id of 'mount-doom' to Mordor

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor

  // 2. Move the ring from Frodo and give it to Gollum

  // 3. Move Gollum into Mount Doom

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
  $('#14').on('click', () => {
    makeMiddleEarth();
    makeHobbits();
    keepItSecretKeepItSafe();
    makeBaddies();
    makeBuddies();
    leaveTheShire();
    beautifulStranger();
    forgeTheFellowShip();
    theBalrog();
    hornOfGondor();
    itsDangerousToGoAlone();
    weWantsIt();
    thereAndBackAgain();
  });

});
