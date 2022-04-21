//Lista de compa da cliente Lilit
let clienteLilit = [
    { produto: 'Bolsa pequena', valor: 49.0 },
    { produto: 'Cinto preto', valor: 22.0 },
    { produto: 'Jaqueta Jeans', valor: 300.0 },
    { produto: 'Calça preta', valor: 100.0 },
    { produto: 'Blusa simples', valor: 35.0 },
    { produto: 'Calça jeans clara', valor: 130.0 },
    { produto: 'Blusa preta gola alta', valor: 60.0 },
    { produto: 'Short verde canelado', valor: 80.0 },
    { produto: 'Salto agulha 39', valor: 250.0 },
    { produto: 'Tênis casual preto', valor: 120.0 },
    { produto: 'meia calça transparente', valor: 30.0 }]

//Lista de compa da cliente Carol    
let clienteCarol = [
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}]

//Lista de compa do cliente Tiago
let clienteTiago = [
    {produto: 'Chinelo', valor: 35.0}
]

//Lista de compa da cliente Regina
let clienteRegina = [
    {produto: 'teste', valor: 1600.1}
]

//Um função para facilitar a apresentação dos valores da compra 'R$ (VALOR)' onde eu quero que apareça já formatado
function format(numero) {
    return `R$ ${numero.toFixed(2).replace('.', ',')}`
}

//função para facilitar na hora que chamar 'data'
function formatData() {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const hoje = new Date();

    const dataFormatada = hoje.toLocaleDateString("pt-BR", options);
    return dataFormatada 
}

//Função para realizar a compra com base em todas condições
function realizarCompra(listaDeCompra) {

    //Declarando variáveis que vou precisar usar durante o processo
    let valorTotal = 0
    let descontoAplicado = 0
    let valorFinal = 0
    let quantidadeProdutos = listaDeCompra.length
    //let dataCompra = new Date() 

    //Percorre a lista de compra dos clientes
    for (let item of listaDeCompra) {
        valorTotal += item.valor
        console.log(`Contando com ${item.produto} de valor ${format(item.valor)} o total fica: ${format(valorTotal)}`)

        //condição para atender os requisitos de descontos
        if (item.valor >= 200.0) {
            valorFinal += (item.valor * 0.5)
            descontoAplicado += (item.valor * 0.5)
        } else if (item.valor >= 100.0) {
            valorFinal += (item.valor * 0.8)
            descontoAplicado += (item.valor * 0.2)
        } else if (item.valor >= 80.0) {
            descontoAplicado += (item.valor * 0.1)
            valorFinal += (item.valor * 0.9)
        } else if (item.valor >= 50.0) {
            descontoAplicado += (item.valor * 0.05)
            valorFinal += (item.valor * 0.95)
        } else {
            valorFinal += item.valor
        }
    }

    //objeto nota fiscal, onde vai aparecer o resumo da compra
    let notaFiscal = {
        "Valor total": format(valorTotal),
        "Desconto aplicado": format(descontoAplicado),
        "Valor final": format(valorFinal),
        "Data": formatData(), 
    
    }

    //condição para cliente ganhar cupom
    if (quantidadeProdutos > 10 || valorFinal > 800.0) {
        return console.table({
            ...notaFiscal,
            "Bônus": 'Você ganho um cupom de R$ 50,00 para a próxima compra.'
        })
    } else {
        return console.table(notaFiscal) //imprimi o resumo da compra
    }

}
//Chamando a função que realiza a compra da(o) cliente
realizarCompra(clienteRegina)
realizarCompra(clienteCarol)
realizarCompra(clienteTiago)
realizarCompra(clienteLilit)
