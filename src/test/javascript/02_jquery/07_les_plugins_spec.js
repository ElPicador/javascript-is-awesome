
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
		$.fn.monPremierPlugin = function() {
			return 'je suis un as du javascript';
		}

		expect($('div').monPremierPlugin()).toBe('je suis un as du javascript');
	});

	it("this dans un plugin", function() {
		//this dans un plugin jQuery représente l'objet $()
		setFixtures('<div id="mon-id"></div>');

		$.fn.rendreVert = function() {
			this.css("color", "green");
		}

		$('#mon-id').rendreVert();
		expect($('#mon-id')).toHaveCss({color: "rgb(0, 128, 0)"});
	});

	it("chainer des fonctions", function() {
		//jQuery permet de chainer des appels de fonctions : $('div').find('span').rendreVert();
		setFixtures('<div id="mon-id"></div>');

		$.fn.rendreVert = function() {
			this.css("color", "green");
			return this;
		}

		$('#mon-id').rendreVert().addClass('superGreen');
		expect($('#mon-id')).toHaveCss({color: "rgb(0, 128, 0)"});
		expect($('#mon-id')).toHaveClass('superGreen');
	});

	it("un peu de scope", function() {
		var emptyObject = {};
		var $ = emptyObject;

		(function($) {
			$.fn.rendreVert = function(couleur) {
				this.couleur = couleur;
				this.css("color", couleur);
				return this;
			}
		})(jQuery);

		jQuery('div').rendreVert('green');
		expect(typeof jQuery.fn.rendreVert).toBe('function');
		expect(jQuery.fn.rendreVert.couleur).toBe(undefined);
		expect($).toBe(emptyObject);
	});

	it("de la lecture", function() {
		//Lire http://learn.jquery.com/plugins/basic-plugin-creation/ à partir de la section
		//Minimizing Plugin Footprint
	});
});
