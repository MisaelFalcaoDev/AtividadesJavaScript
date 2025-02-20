/*Desafio
Imagine que você está desenvolvendo um aplicativo para um banco que deseja calcular os juros compostos de um investimento. 
Seu objetivo é criar uma função que receba três parâmetros: o valor inicial do investimento, a taxa de juros anual e o período de tempo em anos. 
A função deve calcular e retornar o valor final do investimento após o período determinado, levando em consideração os juros compostos.*/

const valorInicial = parseFloat(gets());
const taxaJuros = parseFloat(gets());
const periodo = parseInt(gets());

//TODO: Iterar, baseado no período em anos, para calculo do valorFinal com os juros.
function jurosCompostos (valorInicial, taxaJuros, periodo){
  while(periodo != 0){
    valorInicial = valorInicial + (valorInicial * taxaJuros);
    periodo--;
  }
  return valorInicial;
}

let valorFinal = jurosCompostos(valorInicial, taxaJuros, periodo);

print('Valor final do investimento: R$', valorFinal.toFixed(2));
