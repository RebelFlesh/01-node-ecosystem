const arithmetic = require('../lib/arithmetic');

describe('add',() => {
  it('returns null when given an invalid input',() => {
    expect(arithmetic.add([1,2,3],'hello')).toBe(null);
    expect(arithmetic.add('[1,2,3]','hello')).toBe(null);
    expect(arithmetic.add({type:'banana'},true)).toBe(null);
  });
});