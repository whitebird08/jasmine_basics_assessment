

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

  return testScores[Math.floor(testScores.length / 2)];

  
}

