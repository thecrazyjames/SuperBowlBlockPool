
   // arrayTop represents the labels for the x-axis which represent a potential score for either
   //the home or away team at any given point in the game. Typically at the end of a quarter or 
   //the end of the game. The number represents the last digit of the respective teams score. For example,
   // if the HOME team has 17 and the AWAY team has 6, the square which is selected as the winner is represented by (7 and 6)
   let arrayTop = [0,1,2,3,4,5,6,7,8,9];
   
   // see arrayTop
   let arrayLeft = [0,1,2,3,4,5,6,7,8,9];

  // arraySquares represent the individual squares reading 1 through 100 from left to right starting at the top
   let arraySquares = ["Open 1", "Open 2", "Open 3", "Open 4", "Open 5", "Open 6", "Open 7", "Open 8", "Open 9", "Open 10",
   "Open 11", "Open 12", "Open 13", "Open 14", "Open 15", "Open 16", "Open 17", "Open 18", "Open 19", "Open 20", "Open 21",
   "Open 22", "Open 23", "Open 24", "Open 25", "Open 26", "Open 27", "Open 28", "Open 29", "Open 30", "Open 31", "Open 32",
   "Open 33", "Open 34", "Open 35", "Open 36", "Open 37", "Open 38", "Open 39", "Open 40", "Open 41", "Open 42", "Open 43",
   "Open 44", "Open 45", "Open 46", "Open 47", "Open 48", "Open 49", "Open 50", "Open 51", "Open 52", "Open 53", "Open 54",
   "Open 55", "Open 56", "Open 57", "Open 58", "Open 59", "Open 60", "Open 61", "Open 62", "Open 63", "Open 64", "Open 65",
   "Open 66", "Open 67", "Open 68", "Open 69", "Open 70", "Open 71", "Open 72", "Open 73", "Open 74", "Open 75", "Open 76",
   "Open 77", "Open 78", "Open 79", "Open 80", "Open 81", "Open 82", "Open 83", "Open 84", "Open 85", "Open 86", "Open 87",
   "Open 88", "Open 89", "Open 90", "Open 91", "Open 92", "Open 93", "Open 94", "Open 95", "Open 96", "Open 97", "Open 98",
   "Open 99", "Open 100"];


   
   function shuffleArray(array) {
     let currentIndex = array.length,  randomIndex;
   
     // While there remain elements to shuffle...
     while (currentIndex != 0) {
   
       // Pick a remaining element...
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex--;
   
       // And swap it with the current element.
       [array[currentIndex], array[randomIndex]] = [
         array[randomIndex], array[currentIndex]];
     }
   
     return array;
   }

   function quarterScoreUpdate(array1, array2){
     shuffleArray(array1);
     document.getElementById("item 01").textContent = array1[0];
     document.getElementById("item 02").textContent = array1[1];
     document.getElementById("item 03").textContent = array1[2];
     document.getElementById("item 04").textContent = array1[3];
     document.getElementById("item 05").textContent = array1[4];
     document.getElementById("item 06").textContent = array1[5];
     document.getElementById("item 07").textContent = array1[6];
     document.getElementById("item 08").textContent = array1[7];
     document.getElementById("item 09").textContent = array1[8];
     document.getElementById("item 010").textContent = array1[9];
     shuffleArray(array2);
     document.getElementById("item 10").textContent = array2[0];
     document.getElementById("item 20").textContent = array2[1];
     document.getElementById("item 30").textContent = array2[2];
     document.getElementById("item 40").textContent = array2[3];
     document.getElementById("item 50").textContent = array2[4];
     document.getElementById("item 60").textContent = array2[5];
     document.getElementById("item 70").textContent = array2[6];
     document.getElementById("item 80").textContent = array2[7];
     document.getElementById("item 90").textContent = array2[8];
     document.getElementById("item 100").textContent = array2[9];
   }

   
   // calculateWinningSquare will use the remainder operator ( % 10 ) of the score, iterate through the arrayTop and arrayLeft to determine the position of the array in x and y coordinates.
   // since the squares are stored in an array of 0 - 99 the position will be: (arrayLeft position - 1) * 10 + (arrayTop position - 1).
   // Once the position is determined we will update the color of square and send the winner and message the how much they won!
   function calculateWinningSquare(){

   }
   