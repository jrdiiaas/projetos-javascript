console.log("Conversão de Tipos");

console.log("Ano " + 2022);
console.log("2" + "2");

console.log("Todavia, ainda dessa forma, poderá usar conversão usando o parse, veja:");
console.log(parseInt("2" + "2"));
console.log("Na forma anterior vimos que não funcionou!")
console.log("Logo a conversão funciona apenas da seguinte forma:");
console.log(parseInt("2") + parseInt("2"));
console.log("Mas não corre exatamente igual para divisão, por exemplo, veja:");
console.log("10 / 2 = ", "10" / "2");
console.log("E se tentarmos dividir letras por número? Veja:");
console.log("Alexandre" / "2");
console.log("Retornarará: NaN, que significa: Não é um Número.");
console.log("Existe também a opção de conversão para números com vírgulas, veja os exemplos:");
console.log(10 / 2);
console.log(6.5);
console.log(6, 5);
console.log(7 / 2);
console.log("Observe que não há uma vírgula, ou seja, no JS a vírgula é simbolizada por um ponto. Que chamamos de ponto fluturante.");