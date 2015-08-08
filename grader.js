

exports.letterGrader = function(testScore){
  if (testScore >= 90 && testScore <= 100){
    return 'A'
  } else if (testScore >= 80 && testScore <= 89){
    return 'B'
  } else if (testScore >= 70 && testScore <= 79){
    return 'C'
  } else if (testScore >= 60 && testScore <= 69){
    return 'D'
  } else if (testScore >= 0 && testScore <= 59){
    return 'F'
  }
   
};

exports.averageScore = function(testScores){
  return testScores.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
  }) / testScores.length;
};

exports.medianScore = function(testScores){
  if (testScores.length % 2 != 0){
    return (testScores[Math.floor(testScores.length / 2)]) 
  } else {
    return (testScores[Math.floor(testScores.length / 2)-1] + testScores[Math.floor(testScores.length / 2)])/2
  }
};

exports.modeScore = function(testScores){

  var numTracker = {};
  var mostOften = 0;
  var mode;

  testScores.forEach(function findMode(number){
     
    numTracker[number] = (numTracker[number] || 0)+1;
    if (mostOften < numTracker[number]){
      mostOften = numTracker[number];
       mode = number;
    }
  });
     return +mode;
}
 
// http://codereview.stackexchange.com/questions/68315/finding-the-mode-of-an-array





