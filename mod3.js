// script.js

// STEP 1: Wrap the entire contents of script.js inside an IIFE (Immediately Invoked Function Expression) to avoid polluting the global namespace.
(function () {
    // STEP 2: Define an array of names
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
    // STEP 3: Loop over the array of names
    for (var i = 0; i < names.length; i++) {
      // STEP 4: Retrieve the current name from the array
      var name = names[i];
  
      // STEP 5: Convert the current name to lowercase for case-insensitive comparison
      var lowerCaseName = name.toLowerCase();
  
      // STEP 6: Retrieve the first letter of the lowercase name
      var firstLetter = lowerCaseName.charAt(0);
  
      // STEP 7: Compare the first letter with 'j'
      if (firstLetter === 'j') {
        // STEP 8: If the first letter is 'j', print "Goodbye" + name to the console
        byeSpeaker.speak(name);
      } else {
        // STEP 9: If the first letter is not 'j', print "Hello" + name to the console
        helloSpeaker.speak(name);
      }
    }
  })();
  