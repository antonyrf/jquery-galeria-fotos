$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-nova-imagem').val();
        const novoItem = $('<li></li>') //Cria uma nova variavel para inserção de elementos no <li> do html
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem); //Recebe o endereço da imagem e insere no li do novoItem
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Expandir
                </a>
            </div>        
        `).appendTo(novoItem); // Recebe toda a div criada e insere na variavel novoItem
        $(novoItem).appendTo('ul') // Insere a variavel criada novoItem na ul do html
    })
    $('#endereco-nova-imagem').val('');

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('.cancelar-button').click(function(){
        $('form').slideUp();
    })
});

