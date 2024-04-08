// js/script.js

// TODO: STEP 0: Implement the getRandomCategoryShortName function
function getRandomCategoryShortName() {
    // Array of category short names
    var categoryShortNames = ['L', 'D', 'S', 'A', 'P'];
  
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * categoryShortNames.length);
  
    // Return a random category short name
    return categoryShortNames[randomIndex];
  }
  
  // TODO: STEP 1: Implement the assignRandomCategoryShortName function
  function assignRandomCategoryShortName() {
    // Get the random category short name
    var randomCategoryShortName = getRandomCategoryShortName();
  
    // Assign the random category short name to the HTML attribute
    $('.home-tile a').attr('onclick', "$dc.loadMenuItems('" + randomCategoryShortName + "');");
  }
  
  // Call the function to assign a random category short name when the document is ready
  $(document).ready(function() {
    assignRandomCategoryShortName();
  });
  