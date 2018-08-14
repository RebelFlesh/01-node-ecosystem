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