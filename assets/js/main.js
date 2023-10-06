// https://pokeapi.co/api/v2/pokemon?offset=0&limit=10

const offset = 0
const limit = 20
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
    /* .then(function (response){
            return response.json()
    }) mesma coisa que a de baixo*/
    
    .then ((response) => response.json()) // quando a funçao tiver apenas um comando, pode reduzir em uma linha
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.log(error))
    .finally(() => console.log('Requisição Concluída!'))

