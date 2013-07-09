
describe('Organiser son code javascript', function() {
	it("Encore une fois, pas de tests ici, que des choses à lire", function() {
		//Ça c'est important : http://learn.jquery.com/code-organization/concepts/
		//Si vous voulez aller plus loin, lisez ceci sur les deferreds (aussi appelés futur ou promise) : http://learn.jquery.com/code-organization/deferreds/
	})
});

describe('Organiser son code jQuery', function() {
	it("l'objet $.fn", function() {
		//L'objet renvoyé par $() est l'objet $.fn
		expect($('div').constructor).toBe($.fn.constructor);

		//Donc toute fonction de $() est une fonction de $.fn
		expect($('div').css).toBe($.fn.css);
	});

	it("mon premier plugin", function() {
		//Faites passer le test
		/**/
		expect($('div').monPremierPlugin()).toBe('je suis un as du javascript');
	});

	it("this dans un plugin", function() {
		//this dans un plugin jQuery représente l'objet $()
		setFixtures('<div id="mon-id"></div>');

		//Coder ici

		$('#mon-id').rendreVert();
		expect($('#mon-id')).toHaveCss({color: "green"});
	});

	it("chainer des fonctions", function() {
		//jQuery permet de chainer des appels de fonctions : $('div').find('span').rendreVert();
		setFixtures('<div id="mon-id"></div>');

		//Coder ici

		$('#mon-id').rendreVert().addClass('superGreen');
		expect($('#mon-id')).toHaveCss({color: "green"});
		expect($('#mon-id')).toHaveClass('superGreen');
	});

	it("un peu de scope", function() {
		var $ = {};

		//Recoder votre plugin en protégeant $ et en utilisant une variable privée nommé couleur

		expect(typeof jQuery.fn.rendreVert).toBe(Function);
		expect(jQuery.fn.rendreVert.couleur).toBe(undefined);
		expect($).toBe({});
	});

	it("de la lecture", function() {
		//Lire http://learn.jquery.com/plugins/basic-plugin-creation/ à partir de la section
		//Minimizing Plugin Footprint
	});
});
