const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];
const alunas = ['Dayane', 'Renata', 'Amanda', 'Brenda', 'Aline']

//find - encontrar: ele encontra o primeiro elemento 
// '()=> {}'  é uma função
//o nome elemento se refere a um detereminado elemento na interação que for realizada na constante número, é um nome genérico, poderia ser qualquer outro nome
const encontrarPrimeiro = numeros.find((elemento)=> elemento == 5)
//console.log("Encontrar primeiro: ", encontrarPrimeiro)

//filter = filtro , ele filtra o(s) elemento(s) que eu pedir
const filtrarPor = numeros.filter((elemento) => elemento == 3)
//console.log("Filtrar por: ", filtrarPor)

//map executa todos
const executarTodos = numeros.map((elemento => elemento * 2))
// console.log('(map) Multiplicados:',executarTodos)
// console.log('array original:',numeros)

//forEach
const somarComForEach = numeros.forEach(elemento => {
    let acumulador = 0
    acumulador += elemento
    //console.log('Soma com ForEach: ', acumulador)
})

//reduce
const somarTodos = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual)
//console.log('Somar todos: ', somarTodos)

// concat acrescenta mais um elemento 
console.log('Método Concat')
const arrayConcatenada = numeros.concat(1)
console.log('Concatenada:',arrayConcatenada)
console.log('Original',numeros)
console.log('--------------------------------------------------------')

//push adiciona um elemento no final 
console.log('Método Push')
const adicionaNoFinal = numeros.concat(7, 9, 3)
console.log('Adiciona no final:',adicionaNoFinal)
console.log('Original: ', numeros)
console.log('--------------------------------------------------------')

//pop
console.log('Método Pop')
const removeUltimo = numeros.pop()
console.log('Remove: ', removeUltimo)
console.log('Original',numeros)
console.log('--------------------------------------------------------')

//shift remove  o primeiro da fila
console.log('Método shift')
const removePrimeiro = numeros.shift()
console.log('Remove o primeiro da fila: ', removePrimeiro)
console.log('Original: ', numeros)
console.log('--------------------------------------------------------')

//unshift
console.log('Método Unshift')
const adicionaInicio = numeros.unshift()
console.log('Adiciona no início fila: ', adicionaInicio)
console.log('Original: ', numeros)
console.log('--------------------------------------------------------')

//slice retorna uma cópia
console.log('Método slice (copia)')
const copiaParte = numeros.slice(2,5)
console.log('Cópia de um pedaço da lista original:', copiaParte)
console.log('--------------------------------------------------------')


//splice remove uma cópia
console.log('Método splice')
const removeEAdiciona = numeros.splice(2, 2, "novo");
console.log('Remove',removeEAdiciona); //retorno [4, 3] -> removidos
console.log('Original',numeros); // retorno [3, 2, 'novo', 5, 1, 3, 4, 2]
console.log('--------------------------------------------------------')

//indexof
console.log('Método IndexOf - retonar o primeiro indice')
const localizaElemento = numeros.indexOf(3);
console.log(localizaElemento); // retorno 1


//includes
console.log('Método inludes')
const verificaSeExiste = numeros.includes(4);
console.log(localizaElemento); // true

//join
console.log('Método join')
const transformaString = numeros.join("-");
console.log(transformaString); // retorno "3, 2, 4, 3, 5, 1, 3, 4, 2"