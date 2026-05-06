window.addEventListener("DOMContentLoaded", function () {

    const vlibrasHTML = `
        <div vw class="enabled">
            <div vw-access-button class="active"></div>
                <div vw-plugin-wrapper>
                <div class="vw-plugin-top-wrapper"></div>
            </div>
        </div>
        `;

    document.body.insertAdjacentHTML("beforeend", vlibrasHTML);

    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.onload = function () {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
    };

    document.body.appendChild(script);
});