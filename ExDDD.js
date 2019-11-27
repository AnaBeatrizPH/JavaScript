var ddd = prompt("Digite um DDD válido")
 
if(ddd == 11)
{
    document.getElementById("UF").innerHTML = "São Paulo"; 
} 
    else if(ddd == 61)
    {
        document.getElementById("UF").innerHTML = "Brasília"; 
    }
        else if(ddd==71)
        {
           document.getElementById("UF").innerHTML = "Salvador"; 
        }
            else if(ddd==21)
            {
                document.getElementById("UF").innerHTML = "Rio de Janeiro"; 
            }
                else if(ddd==32)
                {
                    document.getElementById("UF").innerHTML = "Juiz de Fora"; 
                }
                    else if(ddd==19)
                    {
                        document.getElementById("UF").innerHTML = "Campinas"; 
                    }
                        else if(ddd==27)
                        document.getElementById("UF").innerHTML = "Vitória"; 
                            else
                            {
                                document.getElementById("UF").innerHTML = "DDD não cadastrado"; 
                            }



