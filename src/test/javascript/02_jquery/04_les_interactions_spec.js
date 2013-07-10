describe("Les interactions (aka les handlers)", function() {

	beforeEach(function() {
	  setFixtures(
			'<div id="mon-id"> \
				<span class="ma-classe"></span> \
				<span class="mon-autre-classe"></span> \
			</div>');
	});

	it("un premier onClick", function() {
		//La méthode _on_ permet d'écouter un évènement et de réagir quand celui-ci est lancé
		//Ici on écoute le click de souris
		//Faites passer les tests
		var monCallback = function() {
			$('.mon-autre-classe').remove();
		}
		$('#mon-id').on('click', monCallback);

		expect($('#mon-id')).toHandleWith('click', monCallback);
		monCallback();
		expect($('#mon-id span')).toHaveLength(1);
		expect($('#mon-id span')).toHaveClass('ma-classe');
	});

	it("votre premier onClick", function() {
		$('.ma-classe').on('click', function() {
			$('.mon-autre-classe').remove();
		});

		expect($('.ma-classe')).toHandle('click');
		//On simule un click sur cet élement jQuery
		$('.ma-classe').click();
		expect($('#mon-id span')).toHaveLength(1);
		expect($('#mon-id span')).toHaveClass('ma-classe');
	});

	it("utilisation du this", function() {
		//Dans le test précédent, vous avez normalement utilisé un selecteur pour retrouver votre élément
		//Avec jQuery vous pouvez vous simplifier la vie
		//Dans un callback l'objet _this_ permet d'accéder à l'élément sur lequel l'évènement est lancé
		//Faites passez les tests en utilisant _this_
		$('#mon-id span').on('click', function() {
			$(this).remove();
		});

		//On simule un click sur cet élement jQuery
		$('.ma-classe').click();
		expect($('#mon-id span')).toHaveLength(1);
		expect($('#mon-id span')).toHaveClass('mon-autre-classe');

		$('.mon-autre-classe').click();
		expect($('#mon-id span')).toHaveLength(0);
	});

	it("L'objet event", function() {
		//Un callback jQuery peut prendre en paramètre un objet de type event
		//qui représente l'évènement qui a été déclenché

		$('#mon-id span').on('click', function(event) {
			$(event.target).remove();
			//Votre code ici, utiliser l'objet event (pas de this)
			//Hint : http://api.jquery.com/category/events/event-object/ et http://api.jquery.com/event.target/
		});

		//On simule un click sur cet élement jQuery
		$('.ma-classe').click();
		expect($('#mon-id span')).toHaveLength(1);
		expect($('#mon-id span')).toHaveClass('mon-autre-classe');

		$('.mon-autre-classe').click();
		expect($('#mon-id span')).toHaveLength(0);
	});

	it("d'autres fonctions", function() {
		//Il existe de nombreux autres méthode pour interragir avec le DOM
		//Une liste complète est disponible ici : http://api.jquery.com/category/events/
		//Pour plus de détails sur les évènements c'est ici : http://learn.jquery.com/events/
	});
});

