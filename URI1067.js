var numX = prompt("Insira um valor entre 1 e 1000: ");
var html1="";
var num = 1;
var nLinha =0;
for (i=0; num<=numX; i++)
    
    {
        html1+="<div class = 'row color1 '><div class='col-sm-12 text-center' >" + num + "</div></div>"
     
        num += 2;
    
   
    }
document.getElementById("Numimpar").innerHTML = html1;  