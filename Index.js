/**
 *@kidist beyene 
 */
var milesConvert={
miles: 3,
feetPerMile:5280,
 milesToFeet: function ()
 {
  'use strict';
  return this.miles*this.feetPerMile;
 }
};
console.log(milesConvert.milesToFeet());

describe("miles Convert", function () {
	it("should be able to convert miles 3  * 5280 feet to equal 15840",function () {
            expect(milesConvert.milesToFeet()).toBe(15840);
});
});