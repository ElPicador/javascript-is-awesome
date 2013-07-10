
describe("les fonctions", function() {
	it("Quel est le nom de ma fonction ?", function() {
		var ninja = function myNinja() {
			expect(ninja === myNinja).toBeTruthy();
		}

		expect(typeof ninja).toBe('function');
		expect(typeof myNinja).toBe('undefined');
	});

});
