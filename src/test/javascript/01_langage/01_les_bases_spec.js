describe("À lire avant", function() {
	it("Aller dans le fichier src/test/langage/01_les_bases_spec.js", function() {
		//Vous pouvez supprimer ce test
		expect(true).toBeTruthy();
	});
});

//Pour tester nous utiliserons Jasmine : http://pivotal.github.io/jasmine/
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

		var ninja = {
			yell: function() { return "yahhhh" }
		}

		expect(ninja instanceof Object).toBeTruthy();
		expect(ninja.yell()).toBe("yahhhh");
	});

	it('3 façons de définir une fonction', function() {
		function fonction1() {}
		var fonction2 = function() {}
		window.fonction3 = function() {}

		expect(fonction1 instanceof Function).toBeTruthy();
		expect(fonction2 instanceof Function).toBeTruthy();
		expect(fonction3 instanceof Function).toBeTruthy();
	});

	it("Javascript est fonctionnel", function() {
		function maFonction() {
			return function() { return true; }
		}

		expect(typeof maFonction()).toBe("function");
		expect(maFonction()()).toBeTruthy();
	});

	it('les namespaces', function() {
		var a = 1;
		b = 1;

		function maFonction() {
			var a = 2;
			b = 2;

			expect(a).toBe(2);
			expect(b).toBe(2);
		}

		expect(a).toBe(1);
		expect(b).toBe(1);

		maFonction();

		expect(a).toBe(1);
		expect(b).toBe(2);

		//Noter l'effet de l'utilisation de _var_
	});

	it("tout est objet (ou pas)", function() {
		function fonction() {}
		var objet = {}

		expect(fonction instanceof Object).toBeTruthy();
		expect(fonction instanceof Function).toBeTruthy();

		expect(objet instanceof Object).toBeTruthy();
		expect(objet instanceof Function).toBeFalsy();
	});

	it("tout est objet (encore)", function() {
		function fonction() {}
		var objet = {}

		fonction.maPropriete = 1;
		objet.maPropriete = 1;

		expect(fonction instanceof Object).toBeTruthy();
		expect(fonction instanceof Function).toBeTruthy();

		expect(objet instanceof Object).toBeTruthy();
		expect(objet instanceof Function).toBeFalsy();

		expect(fonction.maPropriete).toBe(objet.maPropriete);
	});

	it("== vs ===", function() {
		expect('' == '0').toBeFalsy();
		expect('' === '0').toBeFalsy();

		expect(0 == '').toBeTruthy();
		expect(0 === '').toBeFalsy();

		expect(0 == '0').toBeTruthy();
		expect(0 === '0').toBeFalsy();

		expect(false == 'false').toBeFalsy();
		expect(false === 'false').toBeFalsy();

		expect(false == '0').toBeTruthy();
		expect(false === '0').toBeFalsy();

		expect(false == undefined).toBeFalsy();
		expect(false === undefined).toBeFalsy();

		expect(false == null).toBeFalsy();
		expect(false === null).toBeFalsy();

		expect(null == undefined).toBeTruthy();
		expect(null === undefined).toBeFalsy();

		expect(' \t\r\n ' == 0).toBeTruthy();
		expect(' \t\r\n ' === 0).toBeFalsy();

		var a = [1,2,3]
		var b = [1,2,3]
		expect(a == b).toBeFalsy();
		expect(a === b).toBeFalsy();

		var c = { x: 1, y: 2 };
		var d = { x: 1, y: 2 };
		expect(c == d).toBeFalsy();
		expect(c === d).toBeFalsy();

		var e = "text";
		var f = "te" + "xt";
		expect(e == f).toBeTruthy();
		expect(e === f).toBeTruthy();

		expect("abc" == new String("abc")).toBeTruthy();
		expect("abc" === new String("abc")).toBeFalsy();

		//Conclusion me JAMAIS utiliser ==
	});
});

