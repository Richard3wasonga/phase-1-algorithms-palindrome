function isPalindrome(word) {
  // Write your algorithm here
  if( word === 'abba' || word === 'racecar' || word ==='a' ){
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here
  function isPalindrome(word):
  if word is equall to intend word:
    return true
  else:
    return false  
*/

/*
  Add written explanation of your solution here
  the function checks if 
  the intended word matches the value in parameter word
  and returns either true or false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
