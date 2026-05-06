function mudarFundo(clima) {

    const body = document.body;

    if (clima.includes("clear")) {

        body.style.backgroundImage = "url('../img/sol.gif')";

    }
    else if (clima.includes("rain")) {

        body.style.backgroundImage = "url('../img/chuva.gif')";

    }
    else if (clima.includes("cloud")) {

        body.style.backgroundImage = "url('../img/nublado.gif')";

    }
    else if (clima.includes("storm") || clima.includes("thunder")) {

        body.style.backgroundImage = "url('../img/tempestade.gif')";

    }
    else {

        body.style.backgroundColor = "#0a1f44";

    }

    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundAttachment = "fixed";
}