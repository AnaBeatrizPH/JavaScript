var salMin = prompt("Digite o valor do salário mínimo");
var qtdKw = prompt("Digite a quantidade de Kw"); 
var valor1Kw = salMin/700;
var valorTotal= qtdKw * valor1Kw
var valorDesc = valorTotal * 0.9; 


document.write("Valor de 1 Kw: R$ " + valor1Kw + "</br>"); 
document.write("Valor da conta: R$ " + valorTotal + "</br>");
document.write("Valor com 10% de desconto: R$ " + valorDesc + "</br>"); 

console.log("Valor de um Kw: " + valor1Kw);
console.log("Valor total de conta: R$ " + valorTotal);
console.log("Valor com 10% de desconto R$ " + valorDesc);

alert("Valor de um Kw: " + valor1Kw);
alert("Valor total de conta: R$ " + valorTotal);
alert("Valor com 10% de desconto R$ " + valorDesc);