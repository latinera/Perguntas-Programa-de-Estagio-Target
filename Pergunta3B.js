function proximoElemento(sequencia) {
    return sequencia[sequencia.length - 1] * 2;
  }
  
  const proximo = proximoElemento([2, 4, 8, 16, 32, 64]);
  console.log(proximo); // Saída: 128
  