//Capturei elementos do html que vou precisar

const btn = document.querySelector('.btn')



// função que permite a conversão e a seleção dinâmica de cada unidade

function converter() {
    const valorEmMetros = Number(document.querySelector("#inputMetros").value)
    const unidadeSelecionada = document.querySelector("#unidade").value
    let resultado

    switch (unidadeSelecionada) {
        case 'jardas':
            resultado = valorEmMetros * 1.09361
            break;

        case 'polegadas':

            resultado = valorEmMetros * 39.3701
            break;

        case 'pés':
            resultado = valorEmMetros * 3.28084
            break;

        case 'milhas':
            resultado = valorEmMetros * 0.000621371
            break;

        default:

            resultado = 'Unidade de medida inválida!'
            break;
    }

    

    document.getElementById('resultado').innerHTML = resultado;

}


//Evento/Função que atribui várias funções à um botão
btn.addEventListener('click', (event) => {
    converter()


})

