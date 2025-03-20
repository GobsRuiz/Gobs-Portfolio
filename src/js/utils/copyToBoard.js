function copyToBoard(e) {
    if(!e) return;

    var text = e.innerText;

    navigator.clipboard.writeText(text).then(function() {
        notification.show("Texto copiado")
    })
    .catch(function(err) {
        console.error("Erro ao copiar o texto: ", err);
    });
}