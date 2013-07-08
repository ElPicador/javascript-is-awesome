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
			//Coder ici
		}
		$('#mon-id').on('click', monCallback);

		expect($('#mon-id')).toHandleWith('click', monCallback);
		monCallback();
		expect($('#mon-id span')).toHaveLength(1);
		expect($('#mon-id span')).toHaveClass('ma-classe');
	});

	it("votre premier onClick", function() {
		//Faites passer les tests !

		expect($('.ma-classe')).toHandle('click');
		//On simule un click sur cet élement jQuery
		$('.ma-classe').click();
		expect($('#mon-id span')).toHaveLength(1);
		expect($('#mon-id span')).toHaveClass('ma-classe');
	});

	xit("event.target", function() {

	});

	xit("event.preventDefault()", function() {
// 		$(document).ready(function() {
//   $(".see-photos").on("click", function(event) {
//     event.stopPropagation();
//     $(this).closest(".tour").find(".photos").slideToggle();
//   });
//   $(".tour").on("click", function() {
//     alert("This should not be called");
//   });
// });
	});

	it("utilisation du this", function() {
		//Dans le test précédent, vous avez normalement utilisé un selecteur pour retrouver votre élément
		//Avec jQuery vous pouvez vous simplifier la vie
		//Dans un callback l'objet _this_ permet d'accéder à l'élément sur lequel l'évènement est lancé
		//Faites passez les tests en utilisant _this_
		$('#mon-id span').on('click', function() {
			//Votre code ici
			//Hint : _this_ ne contient pas tout à fait ce dont vous avez besoin
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

