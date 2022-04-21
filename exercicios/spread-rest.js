
function imprimir(x, y, z) { 
    return console.log(x, y, z)
}
let argumentos = [2, 3, 5]

// imprimir(...argumentos)

let compras = ['calça preta','blusa animal print', 'salto fino']
let novasCompras = ['argolas', ...compras, 'lance cacheada']
let novissimasCompras = [...compras]

//console.log(novissimasCompras)

let dados1 = {nome: 'Jéssica', cidade: 'Recife'}
let dados2 = {signo: 'Peixes', idade: '19'}

let dados = { ...dados1, ...dados2 }
console.log(dados)