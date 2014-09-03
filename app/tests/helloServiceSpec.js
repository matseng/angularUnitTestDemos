describe("helloService", function() {
  var $childScope, $el;
  beforeEach(module('HelloModule'));

  // it('should return "hello" when called', function() {
  //     inject(function(helloService) {
  //         expect(helloService()).toBe("hello");
  //     });
  // });

  beforeEach(inject(function($rootScope, $compile) {
    var directiveHtml = '<div my-click="testVar=6"></div>';
    $childScope = $rootScope.$new();

    $el = $compile(directiveHtml)($childScope);
    $childScope.$digest();
  }));

  it('should testVar with an initial value', function() {
    expect($childScope.testVar).toBe(undefined);
  });

  it('should change the variable', function() {
    $el.click();
    //if not a browser event such as click, then call $digest
    expect($childScope.testVar).toBe(6);
  });

  it('should return "hello" when called', inject(function(helloService) {
    
    expect(helloService()).toBe('hello');
  }));

});
