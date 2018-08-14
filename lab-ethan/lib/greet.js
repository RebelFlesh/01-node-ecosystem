function greet(name){
  if(typeof(name)==='string'){
    return `hello ${name}`;
  }
  return null;
}

module.exports = greet;