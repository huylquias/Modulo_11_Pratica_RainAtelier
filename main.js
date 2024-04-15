$(document).ready(function () {
    $('.menu').click(function () {
        $('nav').slideToggle();
    });

    $("#leia-mais").click(function(){
        $("#conteudo-extra").slideDown();
        $(this).hide();
        $("#leia-menos").show();
        const destino = $('#sobre-a-loja');
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });

    $("#leia-menos").click(function(){
        $("#conteudo-extra").slideUp();
        $(this).hide();
        $("#leia-mais").show(); 
        const destino = $('#leia-mais');
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});
