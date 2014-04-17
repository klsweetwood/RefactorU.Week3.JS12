describe("pluralize", function() {
	it("should add s to the end of the word if the number is not 1", function() {
		expect(pluralize('cat', 0)).toBe('cats');
		expect(pluralize('cat', 1)).toBe('cat');
		expect(pluralize('cat', 2)).toBe('cats');

	});
});

// describe("removeFalsey", function() {
// 	it("should remove falsey items from the array") {

// 	}
// })

describe("removeFalseyPure", function() {
	it("should create a copy of the array and remove any falsey items without modifying the original", function () {
			expect(removeFalseyPure([0, 1, null, 2, "", 3, undefined, 4, NaN, 5, false, 6, 'hi']))
			.toEqual([1, 2, 3, 4, 5, 6, 'hi']);
		}
	); 
});