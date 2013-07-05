describe("Ceci est un bloc de plusieurs tests", function() {
	//On déclare nos tests dans une fonction
	
	it("Ceci est un test, l'équivalent en jUnit serait une méthode avec un @test", function() {
		//Pareil, le corps de notre test est dans une fonction

		//On écrit les tests sous le format :
		//expect(notre objet).toBe(ce à quoi on s'attend).
		expect(1).toBe(1);

		//On a aussi toBeTruthy() et toBeFalsy() pour les booléens
		expect(true).toBeTruthy();
		expect(false).toBeFalsy();
	});

	it("Ceci est un autre test", function() {});

	it("le framwork de test c'est jasmine, c'est du BDD (et c'est cool)", function() {});

	it("instanceof", function() {
		//instanceof permet de savoir si un objet est d'un type donné
		var a = new String("aaa");
		expect(a instanceof String).toBeTruthy();
	});

	it("typeof", function() {
		//typeof permet de connaitre de le type  d'un objet. 
		var a = "aaa";
		expect(typeof a).toBe('string');
	});
});


describe("les bases", function() {
	it("des objets en javascript", function() {
		// {} représente un objet
		// { a: 1 } représente un objet ayant la propriété "a" qui vaut 1

		//Ecrire ce qu'il faut pour faire passer les tests
		expect(ninja instanceof Object).toBeTruthy();
		expect(ninja.yell()).toBe("yahhhh");
	});

	it('3 façons de définir une fonction', function() {
		//Ecrire de 3 façons une fonction :
		//Une "classique"
		//Une nommée
		//Une en propriété 

		expect(fonction1 instanceof Function).toBeTruthy();
		expect(fonction2 instanceof Function).toBeTruthy();
		expect(fonction3 instanceof Function).toBeTruthy();
	});

	it('les namespaces', function() {
		var a = 1;
		b = 1;

		function maFonction() {
			var a = 2;
			b = 2;

			//Ecrire deux tests sur les valeurs de a et b
		}

		//Ecrire deux tests sur les valeurs de a et b
		maFonction();
		//Ecrire deux tests sur les valeurs de a et b

		//Noter l'effet de l'utilisation de _var_
	});

	it("tout est objet (ou pas)", function() {
		//Ecrire ce qui fait passer les tests

		expect(fonction instanceof Object).toBeTruthy();
		expect(fonction instanceof Function).toBeTruthy();

		expect(objet instanceof Object).toBeTruthy();
		expect(objet instanceof Function).toBeFalsy();
	});

	it("tout est objet (encore)", function() {
		//Ecrire ce qui fait passer les tests

		expect(fonction instanceof Object).toBeTruthy();
		expect(fonction instanceof Function).toBeTruthy();

		expect(objet instanceof Object).toBeTruthy();
		expect(objet instanceof Object).toBeFalsy();

		expect(fonction.maPropriete).toBe(objet.maPropriete);
	});
});

