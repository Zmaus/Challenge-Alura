//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim(); // Remove espaços extras

    // Validação do campo vazio
    if (!nome) {
        alert('Por favor, digite um nome válido!');
        return;
    }

    // Adiciona o nome ao array e atualiza a lista visual
    amigos.push(nome);
    input.value = ''; // Limpa o campo de entrada

    const listaAmigos = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;
    listaAmigos.appendChild(novoItem);
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    // Verifica se há nomes na lista
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de sortear!');
        return;
    }

    // Sorteia um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`; // Substitui o conteúdo anterior
}