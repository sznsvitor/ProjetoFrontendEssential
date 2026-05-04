function buscarClima() {
    const cidade = document.getElementById("cidade").value.trim();
    const resultado = document.getElementById("resultado");

    if (cidade === "") {
        alert("Digite uma cidade!");
        return;
    }

    const temperatura = Math.floor(Math.random() * 30) + 10;

    const climas = ["☀️ Ensolarado", "🌧️ Chuvoso", "⛅ Nublado", "🌩️ Tempestade"];
    const clima = climas[Math.floor(Math.random() * climas.length)];

    resultado.innerHTML = `
        <div class="card p-4 shadow">
            <h3>${cidade}</h3>
            <p>${clima}</p>
            <h4>${temperatura}°C</h4>
        </div>
    `;
}