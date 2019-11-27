function calculaImposto()
{
    var salario = document.getElementById("salario").value;
    console.log("Salário digitado =" + salario);
    var imposto;
    if(salario<1000)
    {
        imposto=0;
        //console.log("Isento de imposto")
    }
    else if (salario>=1000 && salario<2500)
    {
       imposto = salario*0.125;
        
    }
   
    else if(salario>=2500 && salario<5000)
    {
      imposto = salario*0.25;
       
    }

    else 
    {
        imposto = 1300; 
    }

    return imposto; 
}
 
function totalizarExibir(){

    var salarioBruto = document.getElementById("salario").value; 
    console.log("salario bruto obtido: "+ salarioBruto);
    var imposto = calculaImposto();
    var sliquido = salarioBruto - imposto; 
    document.getElementById("resultado").innerHTML = "Imposto Devido RS " + imposto+"<br/>"+"Salário Líquido R$ " + sliquido + "<br/>";











    
}