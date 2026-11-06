
// Data oficial do início do namoro
const inicioNamoro = new Date(2025, 10, 8);

// Função para atualizar o contador
function atualizarContador() {

    // Data atual
    const hoje = new Date();

    // Calcula a diferença entre as datas
    const diferenca = hoje - inicioNamoro;

    // Converte milissegundos em dias
    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    // Atualiza o número no HTML
    document.getElementById("dias").textContent = dias;

}

// Executa o contador
atualizarContador();
