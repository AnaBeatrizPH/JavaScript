function busca()
{
    var codigoBusca = document.getElementById("codigo").value;
    console.log("O código digitado foi = "+codigoBusca);
    
    var URL = "https://jsonplaceholder.typicode.com/users/"+codigoBusca;
    console.log("URL está montada");
    console.log(URL);

    fetch(URL, { method:"GET" })
       .then(response => response.json() )
       .then(json => preencheHTML(json));

}

function preencheHTML(json)
{
    var infos = document.getElementById("resultado");
    //infos.innerHTML = JSON.stringify(json);
    infos.innerHTML =  "ID: " +json.id + "<br/>";
    infos.innerHTML += "Nome: " +json.name + "<br/>";
    infos.innerHTML += "Sobrenome: " + json.username + "<br/>";
    infos.innerHTML += "E-mail: " +json.email +  "<br/>";
    infos.innerHTML += "Rua : " +json.address.street + "<br/>";
    infos.innerHTML += "Suite: " +json.address.suite +  "<br/>";
    infos.innerHTML += "Apartamento: " + json.address.apt + "<br/>";
    infos.innerHTML += "Cidade: " +json.address.city + "<br/>";
    infos.innerHTML += "Zipcode: "+json.address.zipcode + "<br/>";
    infos.innerHTML += "Telefone: " + json.phone + "<br/>";
    infos.innerHTML += "Website: " + json.website + "<br/>";
    infos.innerHTML += "Nome da companhia: "+json.company.name + "<br/>";
    infos.innerHTML += "Slogan: " + json.company.catchPhrase + "<br/>";
    infos.innerHTML += "BS: " + json.company.bs + "<br/>";
    
}