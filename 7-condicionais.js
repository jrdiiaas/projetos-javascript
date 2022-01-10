console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

console.log(`Lista de Destinos:`);
console.log(listaDeDestinos);

const idadeComprador = 15;

if (idadeComprador >= 18) {
    console.log(`Comprador maior de idade`);
    listaDeDestinos.splice(1, 1);
} else {
    console.log(`Comprador NÃO é maior de idade, não posso vender`)
}

console.log(listaDeDestinos);

//Outros operadores lógicos booleanos
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador == 18);

//Vamos adicionar a situação onde o menor de idade esteja acompanhado por uma pessoa maior de idade ou não veja:
console.log(`Vamos adicionar mais IFs?`);

const estaAcompanhado = true;
const temPassagemComprada = true;

console.log(`Comprador está acompanhado? ${estaAcompanhado}`);

if (idadeComprador >= 18) {
    console.log(`Comprador maior de idade`);
    listaDeDestinos.splice(1, 1);
    //A pessoa é menor de idade
} else if (estaAcompanhado) {
    console.log(`Comprador NÃO é maior de idade, mas ESTÁ ACOMPANHADO`);
    listaDeDestinos.splice(1, 1);
} else {
    console.log(`Comprador NÃO é maior de idade, NÃO posso vender`);
}

console.log(listaDeDestinos);

//Melhorando o código

console.log(`Código após melhoria: comprador está acompanhado? ${estaAcompanhado}`);

if (
    idadeComprador >= 18 || //Operador de ou
    estaAcompanhado // Adicionando segunda condição dentro do IF
) {
    console.log(`Poderá realizar a compra`);
    listaDeDestinos.splice(1, 1);
    //A pessoa é menor de idade
} else {
    console.log(`Comprador NÃO é maior de idade, NÃO posso vender`);
}

console.log(`No embarque, está com a passagem? \n\n`); // O \n pula a linha

if (idadeComprador >= 18 && temPassagemComprada == true) {
    console.log(`Boa viagem!!!`);
} else {
    console.log(`Infelizmente não será possível embarcar!`);
}

console.log(listaDeDestinos);
