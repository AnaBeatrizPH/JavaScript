function nome()
{
var NomeInt = document.getElementById("entrada").value;
var primNome; 
console.log("Nome inteiro = " +NomeInt); 
console.log("Tamanho da palavra = " + NomeInt.lenght);
var primNome = NomeInt.slice(0, NomeInt.indexOf(" "));

while(nome.lenght>0)
console.log("Primeira palavra = " +primNome);
NomeInt = NomeInt.slice(NomeInt.indexOf(" ")+1);
console.log("Sobrou = " + NomeInt);


}