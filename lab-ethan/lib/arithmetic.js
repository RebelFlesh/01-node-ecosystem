const arithmetic = {};

arithmetic.add = function(a,b){
  if(isNaN(a) || isNaN(b)){
    return null;
  }
  else{
    return a + b;
  }
};


module.exports = arithmetic;