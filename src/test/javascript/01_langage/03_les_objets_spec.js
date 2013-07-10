
describe("Les objets", function() {
	it("l'operateur new", function() {
		//L'opérateur _new_ s'utilise comme en Java

		function Ninja(){
			this.name = "Ninja";
		}

		//Faire passer les tests
		var ninjaA = Ninja();
		expect(ninjaA).toBe(undefined);

		var ninjaB = new Ninja();
		expect(ninjaB.name).toBe('Ninja');
	});

	it("sans new", function() {
		function User(first, last){
			this.name = first + " " + last;
		}

		window.name = "Resig";
		var user = User("John", name);

		//Faire passer les tests
		expect(typeof user).toBe('undefined');
		expect(name).toBe('John Resig');
	});

	it("comme une fonction", function() {
		//Faire passer les tests en complétant le code de la fonction Ninja
		// /!\ Ne pas oublier la propriété swung /!\
		function Ninja(){
			this.swung = false;
			this.swingSword = function() {
				this.swung = true;
				return this.swung;
			};
		}

		var ninja = new Ninja();
		expect(ninja.swingSword()).toBeTruthy();
		expect(ninja.swung).toBeTruthy();

		var ninjaB = new Ninja();
		expect(ninjaB.swung).toBeFalsy();
	});

	it("ou comme un tableau", function() {
		var ninja = {
			swung: false,
			swingSword: function() {}
		}

		expect(ninja['swung']).toBeFalsy();
		expect(typeof ninja['swingSword']).toBe('function');
	});
});
