var numPlayer = 1; 

function jogada(casaX)
{
    var casa = document.getElementById(casaX).innerHTML;

    for(i=1; i<10; i++) 
    {
        if(casa == "")
        {
            if(numPlayer ==1)
            {
                casa+=document.getElementById(casaX).innerHTML="<img src='cake1.png' class='img-fluid  image w-alt p-5' margin-bottom: '2%' alt='Imagem responsiva';></img>";
                numPlayer++
            }
            else
            {
                casa+=document.getElementById(casaX).innerHTML="<img src='cake2.png' class='img-fluid image w-alt p-5' margin-bottom: '2%' alt='Imagem responsiva';></img>";
                numPlayer--
            }
        }
    }
    mostra();
}

function mostra()
{
    document.getElementById("rodape").innerHTML = "<h1> Vez do Jogador "+numPlayer+"</h1>";
}