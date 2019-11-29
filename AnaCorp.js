
function lista(){

   
    var tarefa = document.getElementById("tarefa").value;
      var novalinha='<div class="input-group-prepend"><div class="input-group-text"><input type="checkbox" aria-label="Checkbox for following text input"></div></div><div type="text" class="form-control" aria-label="Text input with checkbox ">**Titulo**</div></div>';

    //novalinha = novalinha.replace("**numSeq**");
    novalinha = novalinha.replace("**Titulo**", tarefa);
    console.log(novalinha);

    document.getElementById("listagem").innerHTML+=novalinha;








}
