function getData(){
    return fetch('http://localhost:3000/', {
        method: 'GET',
        mode: 'cors',
    }).then((response) => {   
        return response.json()
        .then((json) => json)
    })
}

function createElement(json){
    let result = ""
    result += "<li>"
    // Da forma à seguir eu não preciso saber os campos do objeto json
    Object.keys(json).map(key => {
        result += `<p>${json[key]}</p>`
    })
    result += "</li>"
    return result
}


function main(){
    getData().then(data => {
        let listaHTML = "<ul>"
        data.forEach(element => {
            listaHTML += createElement(element)
        });
        listaHTML += "</ul>"
        let root = document.getElementById('root')
        root.innerHTML = listaHTML
    })
}

main()