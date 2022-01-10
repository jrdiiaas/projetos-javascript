console.log(`Trabalhando com Listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log(`Destinos possíveis:`);
console.log(salvador, saoPaulo, rioDeJaneiro);

//Listas são chamadas de ARRAYS
//A maneira de declarar um ARRAY é diferente do modo como as variáveis são declaradas normalmente

console.log(`Agora vamos imprimir a Lista de Destinos usando o ARRAY, veja:`);

//Abaixo está o CONSTRUTOR de ARRAY
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Curitiba`) //Adicionando outro item na lista através do .push

console.log(`Lista de destinos: ${listaDeDestinos}`);
console.log(listaDeDestinos);

//Também é possível adicionar novos ítens à lista, usando o .push, esse push vai empurrar itens pra dentro do ARRAY, veja a partir da linha 19.

//Agora vamos aprender a remover do ARRAY com o comando splice
console.log(`Iremos deletar São Paulo, é necessário informar a posição incial, no caso, SP está na segunda posição, e em seguida a quantidade de itens a serem deletados, dessa vez vamos deletar apenas 1, veja:`);
//listaDeDestinos.splice(2, 1);
console.log(`Veja a lista de destinos após a exclusão: ${listaDeDestinos}`);
console.log(`Tivemos um erro na contagem, pois a contagem de posições inicia em zero, corrigindo para 1,1, veja:`); //comentaremos o primeiro splice.
listaDeDestinos.splice(1, 1);
console.log(`Veja a lista de destinos após a exclusão: ${listaDeDestinos}`);
//Para ao invés de exibir todos os itens, caso queira realizar a consulta específica se um item da lista está disponível, pode-se usar a seguinte estrutura:
console.log(listaDeDestinos[1], listaDeDestinos[0]);