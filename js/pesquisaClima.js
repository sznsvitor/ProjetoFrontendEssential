document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const cidade = document.getElementById('cidade').value.trim();

        if (!cidade) {
            return console.erro("erro no id")
        }

        await obterClima(cidade);
    });
});

async function obterClima(cidade) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=85475d1b877042e5c24efc58c7f69373&units=metric&lang=pt_br`)

        if (!response.ok)
            throw new Error('Cidade não encontrada');

        const data = await response.json()
        exibirDados(data)
    } catch (erro) {
        alert(erro.message)
    }
}

function exibirDados(data) {
    const resultado = document.getElementById('resultado')

    resultado.innerHTML = `
        <div class="info-temperatura" style="max-width: 400px">
            <div class="container">
                <h3 class="cidade" style="font-size:1.5rem " >${data.name}
                    <p class="temperatura" style="font-size: 3rem" >${data.main.temp}°</p>
                </h3>
                <p class="clima" style="font-size:1.5rem ">${data.weather[0].description}</p>
                <p class="umidade" style="font-size:1rem " > Máx.: ${data.main.temp_max}° Mín.: ${data.main.temp_min}°</p>
            </div>
        </div>
    `
}