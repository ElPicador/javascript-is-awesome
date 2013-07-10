describe("Manipuler le DOM", function() {

	it("Text to DOM", function() {
		//La méthode $ (ou jQuery) permet de transformer du texte en DOM
		//Faites passer les tests
		var dom = $( /**/ );

		expect(dom).toBe('span');
		expect(dom).toHaveClass('ma-classe');
		expect(dom).toHaveId('mon-id');
	});

	it("Ajouter du DOM", function() {
		//La méthode append permet d'ajouter du DOM _après_ une balise
		//Faites passer les tests
		setFixtures(
			'<div id="mon-id"> \
				<span class="ma-classe"></span> \
			</div>');

		/**/

		expect($('#mon-id span')).toHaveLength(2);
		expect($('#mon-id span')).toBe('span');
		expect($('#mon-id span').last()).toHaveClass('autre-classe');
	});

	it("Supprimer du DOM", function() {
		//La méthode remove permet de supprimer du DOM
		//Faites passer les tests
		setFixtures(
			'<div id="mon-id"> \
				<span class="ma-classe"></span> \
				<span class="mon-autre-classe"></span> \
			</div>');

		/**/

		expect($('#mon-id span')).toHaveLength(1);
		expect($('#mon-id span')).toHaveClass('ma-classe');
	});

	it("Changer de classe CSS : toggleClass()", function() {
		setFixtures('<span id="mon-id" class="ma-classe"></span>');

		function toggleClass() {
			//Votre code ici
		}

		expect($('#mon-id')).toHaveAttr('class', 'ma-classe');

		toggleClass();
		expect($('#mon-id')).toHaveAttr('class', '');

		toggleClass();
		expect($('#mon-id')).toHaveAttr('class', 'ma-classe');
	});

	it("Les attributs data- (html5 inside)", function() {
		//La norme html5 permet d'avoir des attributs data-qqchose sur un élément
		//jQuery permet d'y accéder/modifier simplement avec la méthode data()

		setFixtures('<div id="mon-id" data-toto="tata"></div>');

		//Faites passer les tests
		expect($('#mon-id')).toHaveData('mondata', 1);
		expect(/**/).toBe('tata');
	});

	it("d'autres fonctions", function() {
		//Il existe de nombreux autres méthode pour manipuler le DOM
		//Une liste complète est disponible ici : http://api.jquery.com/category/manipulation/
	});
});

