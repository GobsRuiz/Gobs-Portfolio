function copyToBoard(e, content) {
    if(!e) return;

    var copy = !content ? e.innerText : content;

    navigator.clipboard.writeText(copy).then(function() {
        notification.show("Conteúdo copiado")
    })
    .catch(function(err) {
        console.error("Erro ao copiar o texto: ", err);
    });
}