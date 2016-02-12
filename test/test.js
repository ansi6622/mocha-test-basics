var code = require('../main.js')
var expect = require('chai').expect
describe("tug_o_war", function(teams) {
  it("will tug two arrays that are inside of an array: expect code to return string [[1,2,3,4,5], [5,4,3,2,1]] It's a tie! [[7,2,3,4,6], [5,4,3,2,1]] Team 1 wins! [[5,2,3,4,6], [5,4,3,2,8]] Team 2 wins!", function (){
    expect(code.tug_o_war([[1,2,3,4,5], [5,4,3,2,1]])).to.equal("It's a tie!")
    expect(code.tug_o_war([[7,2,3,4,6], [5,4,3,2,1]])).to.equal("Team 1 wins!")
    expect(code.tug_o_war([[5,2,3,4,6], [5,4,3,2,8]])).to.equal("Team 2 wins!")
  })
})
