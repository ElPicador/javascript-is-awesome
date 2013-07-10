
describe("les closures", function() {
	it("toutes simples", function() {
		var num = 10;

		function addNum(myNum){
			return num + myNum;
		}

		expect(addNum(5)).toBe( /**/ );
	})

	it("toutes simples ou pas", function() {
		var num = 10;

		function addNum(myNum){
			return num + myNum;
		}

		num = 15;

		expect(addNum(5)).toBe( /**/ );
	});

	it("les scopes avec des closures", function() {
		(function() {
			var count = 0;
			var timer = function() {
				if ( count < 5 ) {
					count++;
					timer();
				} else {
					expect(count).toBe( /**/ );
					expect(typeof timer).toBe( /**/ );
					return timer
				}
			}

			return timer();
		})();

		expect(typeof count).toBe( /**/ );
		expect(typeof timer).toBe( /**/ );
	});

	it("Double closure", function() {
		function A(value) {
			return function B() {
				return value;
			}
		}

		expect(typeof A("toto")).toBe( /**/ );
		expect(A("toto")()).toBe( /**/ );
	});
});

