//Ecrivez ce qu'il faut à la place des commentaires

describe('dojo 1', function() {

	describe("les bases", function() {
		it('des objets en javascript ?', function() {
			//Ecrivez ce qu'il faut pour faire passer les tests

			expect(ninja instanceof Object).toBeTruthy();
			expect(ninja.yell()).toBe("yahhhh");
		});

		it('3 façons de définir une fonction', function() {
			//Ecrire de 3 façons une fonction

			expect(fonction1 instanceof Function).toBeTruthy();
			expect(fonction2 instanceof Function).toBeTruthy();
			expect(fonction3 instanceof Function).toBeTruthy();
		});

		var a = 1;
		b = 1;
		it('les namespaces', function() {
			var a = 2;
			b = 2;

			function maFonction() {
				var a = 3;
				b = 3;

				//Ecrivez deux tests sur les valeurs de a et b
			}

			//Ecrivez deux tests sur les valeurs de a et b
			maFonction();
			//Ecrivez deux tests sur les valeurs de a et b
		});

		it('all is object (or not)', function() {
			//Ecrivez ce qui fait passer le test

			expect(fonction instanceof Object).toBeTruthy();
			expect(fonction instanceof Function).toBeTruthy();

			expect(objet instanceof Object).toBeTruthy();
			expect(objet instanceof Function).toBeFalsy();
		});

		it('all is object (or not)', function() {
			//Ecrivez ce qui fait passer le test

			expect(fonction instanceof Object).toBeTruthy();
			expect(fonction instanceof Function).toBeTruthy();

			expect(objet instanceof Object).toBeTruthy();
			expect(objet instanceof Object).toBeFalsy();

			expect(fonction.maPropriete).toBe(objet.maPropriete);
		});
	});

	describe("les fonctions c'est ma joie", function() {
		it("Quel est le nom de ma fonction ?", function() {
			var ninja = function myNinja() {
				//ecrivez un test qui compare ninja et myNinja
			}

			//ecrivez un test sur la valeur de ninja et myNinja
		});

	});

	describe("Les objets c'est cool aussi", function() {
		it("l'operateur new", function() {
			function Ninja(){
				this.name = "Ninja";
			}

			//Faites passer les tests
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
			expect(typeof user).toBe( /**/ );
			expect(name).toBe( /**/ );
		});

		it("comme une fonction", function() {
			function Ninja(){ 
				//N'oubliez pas la propriété swung

				this.swingSword = function(){ 
					//Faites passer les tests
				}; 
			} 
			
			var ninja = new Ninja(); 
			expect(ninja.swingSword()).toBeTruthy();
			expect(ninja.swung).toBeTruthy();
			 
			var ninjaB = new Ninja(); 
			expect(ninjaB.swung).toBeFalsy();
		});
	});

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
			(function(){ 
				var count = 0; 
			 
				var timer = setInterval(function(){ 
					if ( count < 5 ) { 
						count++; 
					} else { 
						expect(count).toBe( /**/ );
						expect(typeof timer).toBe( /**/ );
						clearInterval( timer ); 
					} 
				}, 100); 
			})(); 

			expect(typeof count).toBe( /**/ );
			expect(typeof timer).toBe( /**/ );
		});
	});

	describe("les prototypes", function() {
		it("la base", function() {
			function Ninja(){}

			var ninjaA = Ninja();
			expect(ninjaA.swingSword()).toBe( /**/ );

			var ninjaB = new Ninja()
			expect(ninjaB.swingSword()).toBeTruthy();
		});

		it("les constructeurs", function() {
			function Ninja(){} 
			 
			var ninja = new Ninja(); 
			
			expect(typeof ninja).toBe( /**/ );
			expect(ninja instanceof Ninja).toBe( /**/ );
			expect(ninja.constructor).toBe( /**/ );
		});

		it("les constructeurs 2", function() {
			function Ninja(){}
			var ninja = new Ninja();
			var ninjaB = new ninja.constructor();

			expect(typeof ninja).toBe( /**/ );
			expect(typeof ninjaB).toBe( /**/ );
		});

		it("héritage", function() {
			function Person(){}
			Person.prototype.dance = function(){};

			function Ninja(){}

			Ninja.prototype = new Person();

			var ninja = new Ninja();
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

	describe("Pour aller plus loin", function() {
		it("mettre en cache le résultat d'une fonction", function() {
			function isPrime( num ) { 
				var prime = (num != 1); // Everything but 1 can be prime 
				for ( var i = 2; i < num; i++ ) { 
					if ( num % i == 0 ) { 
						prime = false; 
						break; 
					} 
				} 
				return prime; 
			}

			//Modifiez la méthode au dessus pour faire passer les tests
			expect(isPrime(5)).toBeTruthy();
			expect(isPrime.cache[5]).toBeTruthy();
		});

		it("Parlons contexte", function() {
			var object = {}; 
			function fn(){ 
				return this; 
			}

			//Faites passer les tests
			expect(fn()).toBe( /**/ );

			//Changez le contexte d'appel de fn par object
			expect( /**/ ).toBe( object );
		})

		it("looooooop", function() {
			function loop(array, fn){ 
				for ( var i = 0; i < array.length; i++ ) { 
					// Implementez la méthode pour faire passer les tests
				} 
			} 

			var num = 0; 
			loop([0, 1, 2], function(value){ 
				expect(value).toBe(num);
				expect(this instanceof Array).toBeTruthy();

				num++;
			});
		});

		it("je change de nom", function() {
			function Ninja(name){ 
				// Implement meeee! 
			} 
			 
			var ninja = new Ninja("John"); 
			expect(ninja.name).toBe("John");
			 
			ninja.changeName("Bob"); 
			expect(ninja.name).toBe("Bob");
		});

		it("avec ou sans new", function() {
			function User(first, last){ 
				//Coder ici
				 
				this.name = first + " " + last; 
			} 
			 
			var name = "Resig"; 
			var user = User("John", name); 
			 
			expect(typeof user).toBe(User);
			expect(name).toBe("Resig");
		});

		it("min ou max sur un tableau", function() {
			function smallest(array) { 
				//Code ici, ça doit faire une seule ligne et utiliser Math.min
			} 

			expect(Math.min(0, 1, 2, 3)).toBe(0);
			expect(Math.min([0, 1, 2, 3])).toBe(NaN);
			expect(smallest([0, 1, 2, 3])).toBe(0);
		});

		it("sur les closures", function() {
			var a = 5; 
			function runMe(a) {
				expect(a).toBe( /**/ ); 
			 
				function innerRun(){ 
					expect(b).toBe( /**/ );
					expect(c).toBe( /**/ );
				} 

				var b = 7; 
				innerRun(); 
				var c = 8; 
			} 
			runMe(6); 
			 
			for ( var d = 0; d < 3; d++ ) { 
				setTimeout(function(){ 
					expect(d).toBe( /**/ );
				}, 100); 
			}
		});
	});


});