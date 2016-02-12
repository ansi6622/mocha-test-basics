var code = require('../main.js')
var expect = require('chai').expect
describe("helloWorld", function() {
  it('will greet us', function (){
    expect(code.helloWorld()).to.equal("Hello World!")
  })
})
