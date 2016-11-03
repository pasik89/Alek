// ==============================
// Main.js
$(function() {

    const native = $('#native'),
    			activator = $('.activator'),
    			ul = $('ul');
    			pierwszy = $('.pierwszy');
    			drugi = $('.drugi');
    			trzeci = $('.trzeci');
			    czwarty = $('.czwarty');
    			piaty = $('.piaty');

    activator.on('click', function() {
        ul.toggle(1000);
        console.log('kliknięto mnie');

    });

    pierwszy.on('click', function() {

      native.val('pierwszy');
    });
		drugi.on('click', function() {
		  native.val('drugi');
		});
		trzeci.on('click', function() {
		  native.val('trzeci');
		});
		czwarty.on('click', function() {
		  native.val('czwarty');
		});
		piaty.on('click', function() {
		  native.val('piaty');
		});



    console.log('DOM READY');
});
