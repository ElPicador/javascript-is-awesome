describe("Chercher dans le DOM", function() {

	//beforeEach permet d'executer du code avant chaque test
	beforeEach(function() {
		setFixtures(
			'<div id="langage-wrapper"> \
				<h1>Langage de programmation</h1> \
				<ul id="langages"> \
					<li class="java"> \
						<h2>Java</h2> \
						<span class="details">C\'est pas fonctionnel</span> \
						<ul class="vote"><li><a href="#">↑</a></li><li><a href="#">↓</a></li></ul> \
					</li> \
					<li class="javascript"> \
						<h2>Javascript</h2> \
						<span class="details">C\'est pas Java + script</span> \
						<ul class="vote"><li><a href="#">↑</a></li><li><a href="#">↓</a></li></ul> \
					</li> \
					<li class="javascript coffeescript"> \
						<h2>CoffeScript</h2> \
						<span class="details">Javascript sans les mauvais cotés</span> \
						<ul class="vote"><li><a href="#">↑</a></li><li><a href="#">↓</a></li></ul> \
					</li> \
					<li class="ruby"> \
						<h2>Ruby</h2> \
						<span class="details">Java en mieux</span> \
						<ul class="vote"><li><a href="#">↑</a></li><li><a href="#">↓</a></li></ul> \
					</li> \
				</ul>');
	});

	it("selecteur descendant", function() {
		//Trouver tous les li contenu dans #langages
		//Hint : utiliser un sélecteur double
		var selecteur = $( /**/ );

		expect(selecteur).toBe('li');
		expect(selecteur.length).toBe(12);
	});

	it("selecteur descendant v2", function() {
		//Le sélecteur précédent nous renvoyait aussi les li des ul.vote
		//Trouvez un sélecteur qui ne récupère que les li directement sous #langages
		//Ce sélecteur est nommé child selector et se note '>' (sans les '')
		var selecteur = $( /**/ );

		expect(selecteur).toBe('li');
		expect(selecteur.length).toBe(4);
		expect(selecteur).toHaveClass('java');
		expect(selecteur).toHaveClass('javascript');
		expect(selecteur).toHaveClass('coffeescript');
		expect(selecteur).toHaveClass('ruby');
	});

	it("selecteur multiple", function() {
		//Trouver uniquement les li ruby et java
		//On peut mettre plusieurs sélecteur en les séparants par une virgule (',')
		var selecteur = $( /**/ );

		expect(selecteur).toBe('li');
		expect(selecteur.length).toBe(2);
		expect(selecteur).toHaveClass('java');
		expect(selecteur).toHaveClass('ruby');
	});

	it("selecteur multiple v2", function() {
		//Trouver le li java et le h1
		//jQuery permet de trouver des balises différents au sein d'un même sélecteur
		var selecteur = $( /**/ );

		expect(selecteur).toBe('li');
		expect(selecteur).toBe('h1');
		expect(selecteur.length).toBe(2);
		expect(selecteur).toHaveClass('java');
	});

	it("autres sélecteurs", function() {
		//Il existe de nombreux autres sélecteurs
		//Une liste complète est disponible ici : http://api.jquery.com/category/selectors/
	});
});

describe("Traverser le DOM", function() {
	beforeEach(function() {
		setFixtures(
			'<ul id="langages"> \
				<li class="langage java"> \
					<h2>Java</h2> \
					<span class="details">new HashMap<String, String>()</span> \
				</li> \
				<li class="langage javascript"> \
					<h2 class="super">Javascript</h2> \
					<span class="details">{}</span> \
				</li> \
				<li class="langage javascript coffeescript"> \
					<h2>CoffeScript</h2> \
					<span class="details">{}</span> \
				</li> \
				<li class="langage ruby"> \
					<h2>Ruby</h2> \
					<span class="details">Hash.new</span> \
				</li> \
			</ul>');
	})

	it("la méthode find()", function() {
		//Cette méthode permet d'appliquer un sélecteur jQuery/CSS à un élément jQuery
		var selecteur = $('#langages').find( /**/ );

		expect(selecteur).toBe('li');
		expect(selecteur).toHaveLength(2);
		expect(selecteur).toHaveClass('javascript');
		expect(selecteur).toHaveClass('coffeescript');
	});

	it("la méthode first()", function() {
		//Cette méthode permet de prendre le premier enfant d'un élément jQuery
		//Sélectionner le premier li de #langages
		var selecteur = undefined /**/ ;

		expect(selecteur).toBe('li');
		expect(selecteur).toHaveLength(1);
		expect(selecteur).toHaveClass('java');
	});

	it("la méthode parent()", function() {
		//Cette méthode permet de "remonter" d'un cran dans l'arbre DOM
		//Sélectionner les li ayant une classe _super_ sur leur h2 en utilisant la méthode parent
		var selecteur = undefined /**/ ;

		expect(selecteur).toBe('li');
		expect(selecteur).toHaveLength(1);
		expect(selecteur).toHaveClass('javascript');
		expect(selecteur.find('h2')).toHaveClass('super');
	});

	it("d'autres fonctions", function() {
		//Il existe de nombreux autres méthode pour traverser le DOM
		//Une liste complète est disponible ici : http://api.jquery.com/category/traversing/tree-traversal/
	});
});