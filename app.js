



var vetorlista = []

window.onload = () => {
    if(localStorage.getItem('vetor')){
        vetorlista = JSON.parse(localStorage.getItem('vetor'))
        renderizar()
    }
}


function additem(event = null) {
    if (event.keyCode != 13 || document.getElementById('txtItem').value == '') return

    var texto = document.getElementById('txtItem').value
    vetorlista.push(texto)
    document.getElementById('txtItem').value = ''
    renderizar()
    salvarStorage()

}

function renderizar() {
    document.querySelector(".lista ul").innerHTML = ''

    for (itens of vetorlista) {
        var ul = document.querySelector(".lista ul")
        var li = document.createElement('li')

        var link = document.createElement('a')
        var textolink = document.createTextNode("excluir")
        link.appendChild(textolink)
        link.setAttribute('href', '#')
        var pos = vetorlista.indexOf(itens)
        link.setAttribute('onclick', 'excluirItem(' + pos + ')')

        var textoli = document.createTextNode(itens) || ''
        li.appendChild(textoli)
        li.appendChild(link)
        ul.appendChild(li)
    }


}

function excluirItem(posicao) {

    vetorlista.splice(posicao, 1)
    renderizar()
    salvarStorage()
}



function salvarStorage() {

    localStorage.setItem('vetor', JSON.stringify(vetorlista))

}