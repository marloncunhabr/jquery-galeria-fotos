$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const endereçoDaImagemNova = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endereçoDaImagemNova}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${endereçoDaImagemNova}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(500);
        $('#endereço-imagem-nova').val('');
    });
});
