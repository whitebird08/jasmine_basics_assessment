var code = require('../grader.js');


describe("letterGrader", function(){
  it("takes a test score and returns the equivalent letter grade.", function(){
    expect(code.letterGrader(95)).toEqual('A');
  });

  it("takes a test score and returns the equivalent letter grade.", function(){
    expect(code.letterGrader(85)).toEqual('B'); 
  });

  it("takes a test score and returns the equivalent letter grade.", function(){
    expect(code.letterGrader(75)).toEqual('C'); 
  });

  it("takes a test score and returns the equivalent letter grade.", function(){
    expect(code.letterGrader(65)).toEqual('D');
  });
  it("takes a test score and returns the equivalent letter grade.", function(){
    expect(code.letterGrader(55)).toEqual('F');
  });
});

describe("averageScore", function(){
 var testScores = [90, 95, 87, 60]
  it("takes an array of test scores and returns the average score.", function(){
    expect(code.averageScore(testScores)).toEqual(83);
  });
});

describe("medianScore", function(){
  it("takes an array of test scores and calculates the median score", function(){
    expect(code.medianScore([52,80,80,86,94])).toEqual(80);
  });

  xit("If there are an even number of scores, calculate the average of the middle two scores.", function(){
    expect(code.medianScore([40,50,60,70,80,90])).toEqual(65);
  });
});

describe("modeScore", function(){
 var testScores = [82, 92, 75, 91, 92, 89, 95, 100, 86]
  xit("takes an array of test scores and calculates the mode score", function(){
    expect(code.modeScore(testScores)).toEqual(92);
  });
});



