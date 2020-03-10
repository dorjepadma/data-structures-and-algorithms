const {
    isArray,
    
    
} = require('../lib/types.js');
  
describe('is a Array', () => {
    it('properly tells if a value is an Array', () => {
        expect(isArray([])).toBeTruthy();
        expect(isArray('hi')).toBeFalsy();
    });
});  