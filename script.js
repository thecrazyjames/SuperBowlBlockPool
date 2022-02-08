window.onload = function squaresUpdate(){
  for(let i = 0; i<100; i++){
    document.getElementById("item " + i).innerHTML = arraySquares[i].display + " " + arraySquares[i].ID;
  }
}
   
   // arrayTop represents the labels for the x-axis which represent a potential score for either
   //the home or away team at any given point in the game. Typically at the end of a quarter or 
   //the end of the game. The number represents the last digit of the respective teams score. For example,
   // if the HOME team has 17 and the AWAY team has 6, the square which is selected as the winner is represented by (7 and 6)
   let arrayTop = [0,1,2,3,4,5,6,7,8,9];
   
   // see arrayTop
   let arrayLeft = [0,1,2,3,4,5,6,7,8,9];

  // arraySquares represent the individual squares reading 1 through 100 from left to right starting at the top
  // let arraySquares = ["Open 1", "Open 2", "Open 3", "Open 4", "Open 5", "Open 6", "Open 7", "Open 8", "Open 9", "Open 10",
  // "Open 11", "Open 12", "Open 13", "Open 14", "Open 15", "Open 16", "Open 17", "Open 18", "Open 19", "Open 20", "Open 21",
  // "Open 22", "Open 23", "Open 24", "Open 25", "Open 26", "Open 27", "Open 28", "Open 29", "Open 30", "Open 31", "Open 32",
  // "Open 33", "Open 34", "Open 35", "Open 36", "Open 37", "Open 38", "Open 39", "Open 40", "Open 41", "Open 42", "Open 43",
  // "Open 44", "Open 45", "Open 46", "Open 47", "Open 48", "Open 49", "Open 50", "Open 51", "Open 52", "Open 53", "Open 54",
  // "Open 55", "Open 56", "Open 57", "Open 58", "Open 59", "Open 60", "Open 61", "Open 62", "Open 63", "Open 64", "Open 65",
  // "Open 66", "Open 67", "Open 68", "Open 69", "Open 70", "Open 71", "Open 72", "Open 73", "Open 74", "Open 75", "Open 76",
  // "Open 77", "Open 78", "Open 79", "Open 80", "Open 81", "Open 82", "Open 83", "Open 84", "Open 85", "Open 86", "Open 87",
  // "Open 88", "Open 89", "Open 90", "Open 91", "Open 92", "Open 93", "Open 94", "Open 95", "Open 96", "Open 97", "Open 98",
  // "Open 99", "Open 100"];

//function booleanOnClick(){
//  if arraySquares
//}

   let arraySquares = [
     { ID: 1, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 2, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 3, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 4, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 5, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 6, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 7, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 8, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 9, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 10, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 11, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 12, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 13, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 14, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 15, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 16, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 17, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 18, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 19, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 20, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 21, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 22, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 23, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 24, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 25, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 26, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 27, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 28, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 29, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 30, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 31, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 32, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 33, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 34, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 35, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 36, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 37, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 38, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 39, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 40, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 41, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 42, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 43, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 44, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 45, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 46, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 47, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 48, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 49, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 50, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 51, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 52, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 53, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 54, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 55, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 56, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 57, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 58, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 59, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 60, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 61, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 62, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 63, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 64, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 65, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 66, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 67, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 68, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 69, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 70, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 71, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 72, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 73, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 74, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 75, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 76, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 77, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 78, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 79, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 80, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 81, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 82, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 83, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 84, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 85, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 86, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 87, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 88, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 89, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 90, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 91, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 92, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 93, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 94, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 95, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 96, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 97, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 98, display: "Open", quarterWinner: false, gameWinner: false},
     { ID: 99, display: "Open", quarterWinner: false, gameWinner: false},{ ID: 100, display: "Open", quarterWinner: false, gameWinner: false}]
   

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
     document.getElementById("item x01").textContent = array1[0];
     document.getElementById("item x02").textContent = array1[1];
     document.getElementById("item x03").textContent = array1[2];
     document.getElementById("item x04").textContent = array1[3];
     document.getElementById("item x05").textContent = array1[4];
     document.getElementById("item x06").textContent = array1[5];
     document.getElementById("item x07").textContent = array1[6];
     document.getElementById("item x08").textContent = array1[7];
     document.getElementById("item x09").textContent = array1[8];
     document.getElementById("item x010").textContent = array1[9];
     shuffleArray(array2);
     document.getElementById("item y10").textContent = array2[0];
     document.getElementById("item y20").textContent = array2[1];
     document.getElementById("item y30").textContent = array2[2];
     document.getElementById("item y40").textContent = array2[3];
     document.getElementById("item y50").textContent = array2[4];
     document.getElementById("item y60").textContent = array2[5];
     document.getElementById("item y70").textContent = array2[6];
     document.getElementById("item y80").textContent = array2[7];
     document.getElementById("item y90").textContent = array2[8];
     document.getElementById("item y100").textContent = array2[9];
   }

   
   // calculateWinningSquare will use the remainder operator ( % 10 ) of the score, iterate through the arrayTop and arrayLeft to determine the position of the array in x and y coordinates.
   // since the squares are stored in an array of 0 - 99 the position will be: (arrayLeft position - 1) * 10 + (arrayTop position - 1).
   // Once the position is determined we will update the color of square and send the winner and message the how much they won!
   function calculateWinningSquare(){

   }
   
   const divs = document.querySelectorAll('div');
Array.from(divs).forEach(div => {
    div.addEventListener('click', changeColor);
});

function changeColor() {
    let color = this.style.color;
    this.style.color = color? '' : 'red';
}

function changeStatus(){

}


