let estoque = {
  'joao': [
    { 'tipo' : "maca", qtd: 1 },
    { 'tipo' : "pera", qtd: 1 }
  ],
  'maria': [
    { 'tipo' : "maca", qtd: 2 },
    { 'tipo' : "banana", qtd: 1 }
  ]
};

export function getEstoque() {
  return structuredClone(estoque);
}
export function transacao(origem, destino, quantidade, fruta){
  if(origem === 'pomar'){
    const pessoa = estoque[destino];
    for(let i = 0; i < pessoa.lenght;i++){
      const monte = pessoa[i];
      if(monte.tipo ===fruta){
        monte.qtd += quantidade;
      }
    }
  }
}
//export {getEstoque}
