/*Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well. 

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string. 

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function QuestionsMarks(str) { 
  var filteredArr = str.split('').filter(el => /[\d?]/.test(el))
  for(var i = 0; i < filteredArr.length; i++){
    for(var j = i + 1; j < filteredArr.length; j++){
      if(parseFloat(filteredArr[i]) + parseFloat(filteredArr[j]) === 10){
        if(filteredArr.slice(i + 1, j).length === 3){
          return true;
        }
      }
    }
  }
  return false;
}
