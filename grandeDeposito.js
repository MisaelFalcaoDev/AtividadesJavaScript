/*Desafio
Você foi contratado por um banco para desenvolver um programa que auxilie seus clientes a realizar depósitos em suas contas. 
O programa deve solicitar ao cliente o valor do depósito e verificar se o valor é válido. Se o valor for maior do que zero, o programa deve adicionar o valor ao saldo da conta. 
Caso contrário, o programa deve exibir uma mensagem de erro. O programa deve solicitar apenas uma vez o valor de depósito.*/

const valor = parseFloat(gets());

if (valor > 0) {
  //TODO: Imprimir a mensagem de sucesso, formatando o saldo atual (vide Exemplos).
  console.log("Deposito realizado com sucesso!\nSaldo atual: R$ " + valor.toFixed(2))
} else if (valor < 0) {
  //TODO: Imprimir a mensagem de valor inválido.
  console.log("Valor invalido! Digite um valor maior que zero.")
} else {
  //TODO: Imprimir a mensagem de encerrar o programa.
  console.log("Encerrando o programa...")
}
