function verificarNumeroFibonacci(numero) {
    let a = 0, b = 1, encontrado = false;
    for (let i = 2; i <= numero; i++) {
      [a, b] = [b, a + b];
      if (b === numero) {
        encontrado = true;
        break;
      }
    }
    return encontrado ? `O número ${numero} pertence à sequência de Fibonacci` : `O número ${numero} não pertence à sequência de Fibonacci`;
  }
  
  // Exemplo de uso
  const numero = 13;
  const resultado = verificarNumeroFibonacci(numero);
  console.log(resultado);
  
  // Saída:
  // O número 13 pertence à sequência de Fibonacci
  