const arithmetic = require('../lib/arithmetic');

describe('add',() => {
  it('returns null when given an invalid input',() => {
    expect(arithmetic.add([1,2,3],'hello')).toBe(null);
    expect(arithmetic.add('[1,2,3]','hello')).toBe(null);
    expect(arithmetic.add({type:'banana'},true)).toBe(null);
  });

  it('adds two integers together', ()=> {
    expect(arithmetic.add(0,0)).toBe(0);
    expect(arithmetic.add(400,1)).toBe(401);
    expect(arithmetic.add(-7,7.5)).toBe(0.5);
    expect(arithmetic.add(-8,-2)).toBe(-10);
  });
});

describe('sub', ()=> {
  it('returns null when given an invalid input', ()=> {
    expect(arithmetic.sub([4,5,6],'goodbye')).toBe(null);
    expect(arithmetic.sub(7,'goodbye')).toBe(null);
    expect(arithmetic.sub({type:'apple'},false)).toBe(null);
  });

  it('subtracts two integers from eachother', ()=> {
    expect(arithmetic.sub(0,-1)).toBe(1);
    expect(arithmetic.sub(-10.5,4.5)).toBe(-15);
    expect(arithmetic.sub(-2,-2)).toBe(0);
    expect(arithmetic.sub(50,8)).toBe(42);
  });
});