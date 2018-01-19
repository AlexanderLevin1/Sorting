describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });


  beforeAll(function () {
    spyOn(arr, 'swap').and.callThrough(); 
  });
  describe('Bubble Sort', function(){
  it('should be On^2 swaps', function () {
    arr.bubbleSort();
    expect(arr.swap.calls.count()).toEqual(arr.length^2);
  });