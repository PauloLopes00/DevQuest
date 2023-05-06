const calcularValorPedidotest = require('./Calcular-valor-pedido')

test('teste feito', () => {
    const meuPedido = {
        itens: [
            { nome: "arco encantado", valor: 2000},
            { nome: "Entrega",  valor: 100 , entrega: true}
        ]
    }
    const resultado = calcularValorPedidotest(meuPedido)
    expect(resultado).toBe(2000)
})