
describe("les prototypes", function() {
	// Javascript est un langage de programmation orientée prototype.
	// C'est une forme de programmation orientée objet sans classe, basée sur la notion de prototype. 
	// Un prototype est un objet à partir duquel on crée de nouveaux objets. 
	// Toute fonction Javascript comporte une propriété nommée _prototype_ (sans les _)

	// N'hésiter pas à lire la page wikipedia sur le sujet : http://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_prototype

	it("la base", function() {
		function Ninja() {}

		//Completer le code ici pour faire passer les tests

		var ninjaA = Ninja();
		expect(ninjaA.swingSword()).toBe( /**/ );

		var ninjaB = new Ninja()
		expect(ninjaB.swingSword()).toBeTruthy();
	});

	// En JS, tout objet a une propriété nommée _constructor_ 
	// qui représente la fonction qui a été utilisée pour le créer

	it("les constructeurs", function() {
		function Ninja(){} 
		 
		var ninja = new Ninja(); 

		//Faire passer les tests		
		expect(typeof ninja).toBe( /**/ );
		expect(ninja instanceof Ninja).toBe( /**/ );
		expect(ninja.constructor).toBe( /**/ );
	});

	it("les constructeurs 2", function() {
		function Ninja(){}
		var ninja = new Ninja();
		var ninjaB = new ninja.constructor();

		//Faire passer les tests
		expect(typeof ninja).toBe( /**/ );
		expect(typeof ninjaB).toBe( /**/ );
	});

	it("héritage", function() {
		function Person(){}
		Person.prototype.dance = function(){};

		function Ninja(){}

		Ninja.prototype = new Person();

		var ninja = new Ninja();

		//Faire passer les tests		
		expect(ninja instanceof Ninja).toBe( /**/ );
		expect(ninja instanceof Person).toBe( /**/ );
		expect(ninja instanceof Object).toBe( /**/ );
	});

	it("héritage 2", function() {
		function Person(){}
		Person.prototype.getName = function(){
		  return this.name;
		};

		// Coder une fonction qui hérite de Person
		// et déclarer son name dans le constructeur

		var me = new Me();
		expect(me.getName()).toBe("A name was set.");
	});
});

