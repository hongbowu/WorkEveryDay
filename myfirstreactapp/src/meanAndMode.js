// Create a statsFinder() function that takes in a list of numbers and returns a list containing the mean and mode, 
// in that order. As a reminder, the mean is the average of the values and the mode is the most occurring value. 
// If there are multiple modes, return the mode that occurs first. 
// Make sure that you write your functions and find these answers from scratch – don’t use imported tools!

// For example, statsFinder([500, 400, 400, 375, 300, 350, 325, 300]) should return [368.75, 400].
function statsFinder(array) {
    // Write your code here
    const mean = array.reduce((acc, curr) => acc + curr, 0) / array.length;
    
    const frequencyMap = {};
    let maxFrequency = 0;
    let mode = null;
    array.forEach((num)=>{
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      if(frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mode = num;
      }
    })
      
    return[mean,mode];
  }
  
  console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))
  
  // Leave this so we can test your code:
  module.exports = statsFinder;