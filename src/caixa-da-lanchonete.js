class CaixaDaLanchonete {
  constructor() {
      this.menu = {
          cafe: { valor: 3.00 }, chantily: { valor: 1.50, extra: true, pertence: 'cafe' },
          suco: { valor: 6.20 }, sanduiche: { valor: 6.50 },
          salgado: { valor: 7.25 }, queijo: { valor: 2.00, extra: true, pertence: 'sanduiche' },
          combo1: {valor: 9.50}, combo2: {valor:7.50}
    };
    this.metodoDePagamento = ['debito', 'credito','dinheiro']
  }

  calcularValorDaCompra(metodoDePagamento, itens) {
    let valorTotal = 0;
    if (itens.length <= 0) {
        return 'Não há itens no carrinho de compra!';
    }

    for (let item of itens) {
        let [codigo, qtd] = item.split(',');
        qtd = parseInt(qtd);

        if (qtd <= 0) {
            return 'Quantidade inválida!';
        }

        if (!this.menu[codigo]) {
            return 'Item inválido!';
        }

        if (this.menu[codigo].extra && !itens.find(i => i.startsWith(this.menu[codigo].pertence))) {
            return 'Item extra não pode ser pedido sem o principal';
        }

        valorTotal += this.menu[codigo].valor * qtd;
    }
      
    if (!this.metodoDePagamento.includes(metodoDePagamento)) {
        return'Forma de pagamento inválida!';
    }

      
   if (metodoDePagamento === 'dinheiro') {
            return `R$ ${(valorTotal * 0.95).toFixed(2).replace('.', ',')}`;
        } else if (metodoDePagamento === 'credito') {
            return `R$ ${(valorTotal * 1.03).toFixed(2).replace('.', ',')}`;
        } else {
            return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
        }

    
  }

}

export { CaixaDaLanchonete };

