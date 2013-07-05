
describe("Les objets", function() {
	it("l'operateur new", function() {
		//L'opérateur _new_ s'utilise comme en Java

		function Ninja(){
			this.name = "Ninja";
		}

		//Faitre passer les tests
		var ninjaA = Ninja();
		expect(ninja).toBe( /**/ );

		var ninjaB = new Ninja();
		expect(ninja.name).toBe( /**/ );
	});

	it("sans new", function() {
		function User(first, last){ 
			this.name = first + " " + last; 
		} 
		
		window.name = "Resig"; 
		var user = User("John", name); 

		//Faire passer les tests
		expect(typeof user).toBe( /**/ );
		expect(name).toBe( /**/ );
	});

	it("comme une fonction", function() {
		//Faire passer les tests en complétant le code de la fonction Ninja
		// /!\ Ne pas oublier pas la propriété swung /!\
		function Ninja(){ 
			/**/
			this.swingSword = function() {
				/**/ 				
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
			//Coder ici pour faire passer les tests
		}

		expect(ninja['swung']).toBeFalsy();
		expect(typeof ninja['swingSword']).toBe('function');
	});
});
