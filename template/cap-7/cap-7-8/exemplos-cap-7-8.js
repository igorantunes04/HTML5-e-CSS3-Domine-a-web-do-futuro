jQuery(function ($) {
    function supportsPlaceholder() {
        return 'placeholder' in document.createElement('input') &&
            'placeholder' in document.createElement('textarea');
    }

    if (!supportsPlaceholder()) {
        $('html').addClass('no-placeholder');
    }
});

$('#popup').fadeOut(function () {
    // o '#popup' já está com opacidade 0;
});
    Pode ser escrito assim, utilizando o transitionend em um navegador baseado
    no WebKit, e uma classe.hidden que altera a opacidade:
$('#popup').on('webkitTransitionEnd', function () {
    // A transição do '#popup' foi finalizada.
})
$('#popup').addClass('hidden');