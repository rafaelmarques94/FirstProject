
function executar() {
// buscando o texto digitado
var texto = document.getElementById('txtItem').value;

//buscando a div
    var div = document.querySelector("div.lista");
//criando a lista
    var li = document.createElement('li');
    var ul = document.createElement('ul');
// adcionando o texto na lista
   li.appendChild(document.createTextNode(texto));
// adicionando a lista na div

var excluir = document.createElement('a')
var textoLink = document.createTextNode(" - Excluir");
excluir.setAttribute('href', 'javascript:excluirItem(ul)');
excluir.appendChild(textoLink);

li.appendChild(excluir);
ul.appendChild(li);
    div.appendChild(ul);

   
}

function excluirItem(itemLista){

    console.log(itemLista);
    //var elemento_pai = document.body;
    //elemento_pai.appendChild(itemLista);

   


}
