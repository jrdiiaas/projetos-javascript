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