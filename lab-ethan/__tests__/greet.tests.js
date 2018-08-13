const greet = require('../lib/greet');

describe('greet',() => {
  it('returns null if non-string is given',() =>{
    expect(greet()).toBe(null);
    expect(greet(1)).toBe(null);
    expect(greet([1,2,3])).toBe(null);
  });

  it('can create a greeting with give string', () => {
    expect(greet('world')).toBe('hello world');
    expect(greet('David')).toBe('hello David');
  });
  
});