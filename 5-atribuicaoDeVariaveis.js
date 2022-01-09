console.log("Trabalhando com Atribuição de Variáveis");

const idade = 26;
//const nome = "Alexandre"; quando chegar na linha 25 retorne aqui para seguir com a variável let na declaração abaixo:
let nome = "Alexandre";
const sobrenome = "Dias";

console.log(nome + sobrenome);

console.log("Visto que não tivemos espaço entre nome e sobrenome, veja a seguir duas formas de imprimir com espaço entre as variáveis:")
console.log(nome, sobrenome);
console.log(nome + " " + sobrenome);
console.log("Outra forma de imprimir texto é utilizando a crase, veja:");
console.log(`Meu nome é`);
console.log("É possível com isso, usar a interpolação, que significa adicionar variáveis e textos juntos, desde que estejam dentro da crase dupla, veja:")
console.log(`Meu nome é ${nome} ${sobrenome}`);
console.log("Para interpolar use sifrão e escreva variáveis dentro de duas chaves, assim: ${variável}.");
console.log("Ou ainda pode ser mais simples, veja:");
console.log("nome = nome + sobrenome;");

nome = nome + sobrenome;

console.log("Dessa forma podemos sobrescrever uma variável, veja:");
console.log(`Meu nome é ${nome}`);
//Ocorrerá um erro, pois o Const não é variável, logo será necessário modificar a declaração de Const para Let
console.log("Todavia o ideal é sempre usar Constantes ao invés de Let, a não ser que seja necessário usar o Let. Poderíamos ainda usar nomeCompleto, veja:");

const nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);