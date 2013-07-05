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

		it("arguments un object caché", function() {
			function maFonction(n) {
				return arguments;
			}
			console.log(maFonction(1));
			
		});
	});

	describe("Les objets c'est cool aussi", function() {
		it("l'operateur new", function() {
			function Ninja(){
				this.name = "Ninja";
			}

			//Faites passer les tests
			var ninjaA = Ninja();
			expect(ninja).toBe( ?? );

			var ninjaB = new Ninja();
			expect(ninja.name).toBe( ?? );
		});

		it("", function() {
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
			expect(fn()).toBe( ?? );

			//Changez le contexte d'appel de fn par object
			expect( ?? ).toBe( object );
		})

		it("", function() {
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
	});

});