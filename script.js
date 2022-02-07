
   
   let arrayTop = [0,1,2,3,4,5,6,7,8,9];
   
   let arrayBottom = [0,1,2,3,4,5,6,7,8,9];
   
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
   
   var arrayDisplayTest = ["ken", "James", "Tippy"];

   document.getElementById("display-array").textContent = arrayDisplayTest[1];
   
   console.log(shuffleArray(arrayBottom));