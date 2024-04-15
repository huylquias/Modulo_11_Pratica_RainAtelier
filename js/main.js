$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay: true,
    });

    $("#leia-mais").click(function(){
        $("#conteudo-extra").slideDown();
        $(this).hide();
        $("#leia-menos").show();
        const d3stino = $('#sobre-a-loja');
        $('html').animate({
            scrollTop: d3stino.offset().top
        },1000)
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $("#leia-menos").click(function(){
        $("#conteudo-extra").slideUp();
        $(this).hide();
        $("#leia-mais").show(); 
        const d3stin0 = $('#leia-mais');
        $('html').animate({
            scrollTop: d3stin0.offset().top
        },1000)

    })
    

    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(22) 99871-2071'
    })

    $('form').validate({
            rules:{ 
                nome:{
                required: true
            },
            email:{
                required: true,
                email: true,
            },
            telefone:{
                required: true
            },
            mensagem:{ 
                required: true
            },
            veiculoDeInteresse:{
                required: false
            },

            },
            messages:{
                nome:'Por favor, insira seu nome.',
                email:'Por favor, insira seu email.',
                telefone:'Por favor, insira seu numero de telefone.'
            },
            submitHandler: function(form) { 
                console.log(form)
            },
            invalidHandler: function(evento, validador) { 
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos) {
                    alert(`Existem ${camposIncorretos} campos incorretos.`)
                }
        }
    })
    
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        
        const nomeVeiculo = $(this).parent().find('h3').text();
        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})


