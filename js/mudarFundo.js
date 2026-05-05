function mudarFundo(tipo) {
    let imagem = "";

    if (tipo === "sol") {
        imagem = "/img/sol.gif";
    } else if (tipo === "chuva") {
        imagem = "/img/chuva.gif";
    } else if (tipo === "nublado") {
        imagem = "/img/nublado.gif";
    } else {
        imagem = "/img/tempestade.gif";
    }

    document.body.style.backgroundImage = `url(${imagem})`;
}