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