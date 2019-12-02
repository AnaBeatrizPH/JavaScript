/*var numMusica=0;

function tocaAnterior(){

}
function tocaAtual(){
    console.log("musica atual = "+document.getElementById("mymusic").src);

        document.getElementById("mymusic").src = "./Musica"+numMusica+".mp3";
        document.getElementById("mymusic").play();
    console.log("ah... chato!");
}
function paraTudo(){
    document.getElementById("mymusic").pause();

}
function tocaProxima(){

}*/

var filme=0; 

function rodaFilme()
{
    console.log("filme = "+document.getElementById("Video1").src);
    document.getElementById("Video1").play();
}

function rodaProximo()
{
    filme++
    if(filme>=1)
    {
        filme=0;
    }

    document.getElementById("Video2").play();
}

