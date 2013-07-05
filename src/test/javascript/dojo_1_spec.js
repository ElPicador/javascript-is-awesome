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
				b = 2;

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
			expect(objet instanceof Object).toBeFalsy();
		});
	});

	describe("les fonctions c'est ma joie", function() {
		it("Quel est le nom de ma fonction ?", function() {
			var ninja = function myNinja() {
				//ecrivez un test qui compare ninja et myNinja
			}

			//ecrivez un test sur la valeure de ninja et myNinja
		});

		it("arguments un object caché", function() {
			function maFonction(n) {
				return arguments;
			}
			console.log(maFonction(1));
			
		});
	});

});